cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/barcode.js",
        "id": "com.mirasense.scanditsdk.plugin.Barcode",
        "clobbers": [
            "Scandit.Barcode"
        ]
    },
    {
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/barcodepicker.js",
        "id": "com.mirasense.scanditsdk.plugin.BarcodePicker",
        "clobbers": [
            "Scandit.BarcodePicker"
        ]
    },
    {
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/license.js",
        "id": "com.mirasense.scanditsdk.plugin.License",
        "clobbers": [
            "Scandit.License"
        ]
    },
    {
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/margins.js",
        "id": "com.mirasense.scanditsdk.plugin.Margins",
        "clobbers": [
            "Scandit.Margins"
        ]
    },
    {
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/point.js",
        "id": "com.mirasense.scanditsdk.plugin.Point",
        "clobbers": [
            "Scandit.Point"
        ]
    },
    {
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/quadrilateral.js",
        "id": "com.mirasense.scanditsdk.plugin.Quadrilateral",
        "clobbers": [
            "Scandit.Quadrilateral"
        ]
    },
    {
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/rect.js",
        "id": "com.mirasense.scanditsdk.plugin.Rect",
        "clobbers": [
            "Scandit.Rect"
        ]
    },
    {
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/overlay.js",
        "id": "com.mirasense.scanditsdk.plugin.ScanOverlay",
        "clobbers": [
            "Scandit.ScanOverlay"
        ]
    },
    {
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/session.js",
        "id": "com.mirasense.scanditsdk.plugin.ScanSession",
        "clobbers": [
            "Scandit.ScanSession"
        ]
    },
    {
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/settings.js",
        "id": "com.mirasense.scanditsdk.plugin.ScanSettings",
        "clobbers": [
            "Scandit.ScanSettings"
        ]
    },
    {
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/symbologysettings.js",
        "id": "com.mirasense.scanditsdk.plugin.SymbologySettings",
        "clobbers": [
            "Scandit.SymbologySettings"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
        "id": "cordova-plugin-file.DirectoryEntry",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
        "id": "cordova-plugin-file.DirectoryReader",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Entry.js",
        "id": "cordova-plugin-file.Entry",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/File.js",
        "id": "cordova-plugin-file.File",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileEntry.js",
        "id": "cordova-plugin-file.FileEntry",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileError.js",
        "id": "cordova-plugin-file.FileError",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileReader.js",
        "id": "cordova-plugin-file.FileReader",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileSystem.js",
        "id": "cordova-plugin-file.FileSystem",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
        "id": "cordova-plugin-file.FileUploadOptions",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
        "id": "cordova-plugin-file.FileUploadResult",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileWriter.js",
        "id": "cordova-plugin-file.FileWriter",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Flags.js",
        "id": "cordova-plugin-file.Flags",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
        "id": "cordova-plugin-file.LocalFileSystem",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Metadata.js",
        "id": "cordova-plugin-file.Metadata",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
        "id": "cordova-plugin-file.ProgressEvent",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystems.js",
        "id": "cordova-plugin-file.fileSystems"
    },
    {
        "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
        "id": "cordova-plugin-file.requestFileSystem",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
        "id": "cordova-plugin-file.resolveLocalFileSystemURI",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
        "id": "cordova-plugin-file.isChrome",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
        "id": "cordova-plugin-file.androidFileSystem",
        "merges": [
            "FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
        "id": "cordova-plugin-file.fileSystems-roots",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
        "id": "cordova-plugin-file.fileSystemPaths",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-media/www/MediaError.js",
        "id": "cordova-plugin-media.MediaError",
        "clobbers": [
            "window.MediaError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media/www/Media.js",
        "id": "cordova-plugin-media.Media",
        "clobbers": [
            "window.Media"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.mirasense.scanditsdk.plugin": "4.12.2",
    "cordova-plugin-camera": "2.1.1",
    "cordova-sqlite-storage": "0.8.5",
    "cordova-plugin-file": "4.1.1",
    "cordova-plugin-media": "2.1.0"
};
// BOTTOM OF METADATA
});