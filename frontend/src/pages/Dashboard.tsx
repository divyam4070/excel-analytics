
import React, { useState } from 'react';
import { Upload, BarChart3, Settings, LogOut, FileText, Eye, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      console.log('File uploaded:', files[0].name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const recentFiles = [
    { name: 'Q4 Sales Data.xlsx', date: '2024-01-15', charts: 3 },
    { name: 'Marketing Analytics.csv', date: '2024-01-14', charts: 5 },
    { name: 'Customer Survey.xlsx', date: '2024-01-13', charts: 2 },
    { name: 'Product Performance.csv', date: '2024-01-12', charts: 4 }
  ];

  const sampleCharts = [
    { title: 'Revenue Trends', type: '3D Bar Chart', description: 'Monthly revenue analysis with growth projections' },
    { title: 'Customer Demographics', type: '2D Pie Chart', description: 'Age and location distribution of customers' },
    { title: 'Product Performance', type: '3D Surface Plot', description: 'Sales performance across different product categories' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Excel Analytics
          </h2>
        </div>

        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center px-4 py-3 text-white bg-blue-600 rounded-lg transition-colors duration-200"
          >
            <Upload className="mr-3" size={20} />
            Dashboard
          </Link>
          <Link
            to="/dashboard/graphs"
            className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <BarChart3 className="mr-3" size={20} />
            View Graphs
          </Link>
          <Link
            to="/dashboard/settings"
            className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <Settings className="mr-3" size={20} />
            Account Settings
          </Link>
          <Link
            to="/"
            className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <LogOut className="mr-3" size={20} />
            Log Out
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Upload your Excel files and generate stunning visualizations</p>
          </div>

          {/* Upload Section */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 mb-8">
            <h2 className="text-xl font-semibold text-white mb-6">Upload New File</h2>
            
            <div
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
                isDragOver 
                  ? 'border-blue-500 bg-blue-500/10' 
                  : 'border-gray-600 hover:border-gray-500'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Drop your Excel files here
              </h3>
              <p className="text-gray-400 mb-4">
                Or click to browse files (.xlsx, .xls, .csv supported)
              </p>
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 cursor-pointer"
              >
                Select Files
              </label>
              {selectedFile && (
                <div className="mt-4 text-green-400">
                  ✓ {selectedFile.name} selected
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Files */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <FileText className="mr-2" size={20} />
                Recent Files
              </h2>
              <div className="space-y-4">
                {recentFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                    <div>
                      <h3 className="text-white font-medium">{file.name}</h3>
                      <p className="text-gray-400 text-sm">{file.date} • {file.charts} charts generated</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-400 transition-colors duration-200">
                        <Download size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-200">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Visualizations */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <BarChart3 className="mr-2" size={20} />
                Sample Visualizations
              </h2>
              <div className="space-y-4">
                {sampleCharts.map((chart, index) => (
                  <div key={index} className="p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium">{chart.title}</h3>
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">{chart.type}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{chart.description}</p>
                    <button className="mt-3 text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200">
                      View Chart →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Files</p>
                  <p className="text-2xl font-bold text-white">24</p>
                </div>
                <FileText className="text-blue-400" size={24} />
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Charts Generated</p>
                  <p className="text-2xl font-bold text-white">87</p>
                </div>
                <BarChart3 className="text-green-400" size={24} />
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Data Points</p>
                  <p className="text-2xl font-bold text-white">156K</p>
                </div>
                <Eye className="text-purple-400" size={24} />
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Storage Used</p>
                  <p className="text-2xl font-bold text-white">2.4 GB</p>
                </div>
                <Upload className="text-orange-400" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
