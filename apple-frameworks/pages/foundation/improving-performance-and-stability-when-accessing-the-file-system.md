> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/improving-performance-and-stability-when-accessing-the-file-system](https://developer.apple.com/documentation/foundation/improving-performance-and-stability-when-accessing-the-file-system)

# Improving performance and stability when accessing the file system (Swift)

**Framework:** Foundation  
**Kind:** Article

Prevent data loss and app crashes by interacting with the file system in a coordinated, asynchronous manner and by avoiding unnecessary disk I/O.

<a id="overview"></a>

## Overview

A device’s file system is a shared resource available to all running processes. If multiple processes (or multiple threads in the same process) attempt to act on the same file simultaneously, data corruption or loss may occur, and your app may even crash.

To establish safe and efficient file access, avoid performing immediate file I/O on the app’s main thread. Use [NSFileCoordinator](nsfilecoordinator.md) to choreograph file access, opt for the I/O-free variants of file-related APIs, and implement the prefetching mechanisms of [UICollectionView](../uikit/uicollectionview.md) and [UITableView](../uikit/uitableview.md) to efficiently prepare file-related data for display.

<a id="Coordinate-file-access-to-reduce-hangs"></a>

### Coordinate file access to reduce hangs

A *blocking call* is a task that may temporarily suspend the calling thread’s execution, such as checking whether a file or directory exists. When a blocking call originates from the app’s main thread, the suspended execution manifests as user interface hangs and high scroll hitch rates, negatively impacting the user experience. The duration of this specific blocking call is often indeterminate if the related files are external to the device, such as those in iCloud Drive or other file providers, or on a mounted USB drive or SMB server.

Adopt [NSFileCoordinator](nsfilecoordinator.md) and [NSFilePresenter](nsfilepresenter.md) to coordinate safe file access across different threads and processes. A *file coordinator* notifies interested file presenters whenever a file they care about is due to change. Each presenter then has an opportunity to perform any work necessary to safeguard their integrity. The file coordinator waits on all file presenters to respond before it executes the requested actions on the file. By specifying a background operation queue, the coordinator works asynchronously and is therefore safe to call from the main thread. For more information, see [coordinate(with:queue:byAccessor:)](nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md).

<a id="Prefetch-displayable-file-data-to-maintain-a-low-scroll-hitch-rate"></a>

### Prefetch displayable file data to maintain a low scroll hitch rate

If your app displays list- or collection-based layouts of any size, adopt [UITableView](../uikit/uitableview.md) or [UICollectionView](../uikit/uicollectionview.md) — and the corresponding data source and prefetching protocols — to provide a smooth scrolling experience. An object that implements the data source protocol provides the view with items to display, whereas an object that implements the prefetching protocol is responsible for preparing and caching the data for those items.

The system provides a few milliseconds to prepare content for a cell, and exceeding that may cause elevated scroll hitch rates or dropped frames. Dropped frames in particular indicate that the system is performing file I/O in data source protocol methods such as [collectionView(\_:cellForItemAt:)](../uikit/uicollectionviewdatasource/collectionview%28__cellforitemat_%29.md), which the system invokes on the main thread. To avoid such issues, delegate all file I/O to [NSFileCoordinator](nsfilecoordinator.md) and invoke the necessary reads (and writes) in one or more of the methods that the view’s prefetching protocol defines.

For more information, see [UICollectionViewDataSourcePrefetching](../uikit/uicollectionviewdatasourceprefetching.md), [UITableViewDataSourcePrefetching](../uikit/uitableviewdatasourceprefetching.md), and the sample code [Prefetching collection view data](../uikit/prefetching-collection-view-data.md).

<a id="Request-access-to-multiple-files-in-parallel-to-boost-efficiency"></a>

### Request access to multiple files in parallel to boost efficiency

When taking some action on a list of files, an app may iterate over that list and process each file sequentially, such as in a `for` or `while` loop. However, accessing files that are external to the device, such as those in iCloud Drive, may result in expensive, blocking network requests as the system must download the files before it can make them available for your app to use.

To minimize the impact, don’t perform any file I/O in the loop. Instead, use each iteration of the loop to create an instance of [NSFileCoordinator](nsfilecoordinator.md) and specify a background queue for the system to use when it invokes that coordinator’s `accessor` closure. By adopting this approach, you enable the system to download any remote files in a concurrent, nonblocking way, as the following example shows:

```swift
// Create a background queue for the system to use
// when invoking each file coordinator's accessor 
// closure.
let queue = OperationQueue()
queue.underlyingQueue = .global(qos: .utility)

// Iterate over the file URLs.
for url in fileURLs {
    // Create a file coordinator and specify the appropriate
    // file access intent and queue.
    let intent = NSFileAccessIntent.readingIntent(with: url)
    let coordinator = NSFileCoordinator()
    coordinator.coordinate(with: [intent],
                           queue: queue) { error in
        if let error {
            // If there's an error, handle it here.
        } else {
            // Otherwise, process the file.
        }
    }
}
```

<a id="Provide-directory-hints-for-file-URLs-to-avoid-wasteful-IO"></a>

### Provide directory hints for file URLs to avoid wasteful I/O

Many convenience methods make it possible to create URLs that represent files and directories in the file system, local or otherwise. If you know that the destination of such a URL is a directory, use the method variants that require the `isDirectory` parameter and specify [true](https://developer.apple.com/documentation/swift/true) as the value. If you use a more succinct method that omits the parameter, the system performs a potentially blocking call to the file system to determine if the URL’s destination is a file or a directory.

If you are using Swift and your app targets iOS 16 and later (or macOS 13 and later), use [init(filePath:directoryHint:relativeTo:)](url/init%28filepath_directoryhint_relativeto_%29.md) to create file URLs — and [appending(path:directoryHint:)](url/appending%28path_directoryhint_%29.md) to modify existing URLs — and specify a value other than `inferFromPath` for the `directoryHint` parameter. For earlier versions, opt for the nonblocking variants of the methods in the following table.

The following table lists the blocking and nonblocking method variants.

| Blocking | Nonblocking |
| --- | --- |
| [fileURL(withPath:)](nsurl/fileurl%28withpath_%29.md) | [fileURL(withPath:isDirectory:)](nsurl/fileurl%28withpath_isdirectory_%29.md) |
| [init(fileURLWithPath:)](nsurl/init%28fileurlwithpath_%29.md) | [init(fileURLWithPath:isDirectory:)](nsurl/init%28fileurlwithpath_isdirectory_%29.md) |
| [fileURL(withPath:relativeTo:)](nsurl/fileurl%28withpath_relativeto_%29.md) | [fileURL(withPath:isDirectory:relativeTo:)](nsurl/fileurl%28withpath_isdirectory_relativeto_%29.md) |
| [init(fileURLWithPath:relativeTo:)](nsurl/init%28fileurlwithpath_relativeto_%29.md) | [init(fileURLWithPath:isDirectory:relativeTo:)](nsurl/init%28fileurlwithpath_isdirectory_relativeto_%29.md) |
| [appendingPathComponent(\_:)](nsurl/appendingpathcomponent%28__%29.md) | [appendingPathComponent(\_:isDirectory:)](nsurl/appendingpathcomponent%28__isdirectory_%29.md) |

Additionally, APIs that traverse directory hierarchies may also block, and the duration of the block depends entirely on the depth of the traversed hierarchy. For that reason, only call these APIs from a background thread.

## See Also

### File system operations

- [Using the file system effectively](using-the-file-system-effectively.md): Gain access to benefits like automatic backup or purging by using purpose-built directories provided by the system.
- [FileManager](filemanager.md): A convenient interface to the contents of the file system, and the primary means of interacting with it.
- [FileManagerDelegate](filemanagerdelegate.md): The interface a file manager’s delegate uses to intervene during operations or if an error occurs.
- [About Apple File System](about-apple-file-system.md): Use high-level APIs to get the most out of Apple File System.

# Improving performance and stability when accessing the file system (Objective-C)

**Framework:** Foundation  
**Kind:** Article

Prevent data loss and app crashes by interacting with the file system in a coordinated, asynchronous manner and by avoiding unnecessary disk I/O.

<a id="overview"></a>

## Overview

A device’s file system is a shared resource available to all running processes. If multiple processes (or multiple threads in the same process) attempt to act on the same file simultaneously, data corruption or loss may occur, and your app may even crash.

To establish safe and efficient file access, avoid performing immediate file I/O on the app’s main thread. Use [NSFileCoordinator](nsfilecoordinator.md) to choreograph file access, opt for the I/O-free variants of file-related APIs, and implement the prefetching mechanisms of [UICollectionView](../uikit/uicollectionview.md) and [UITableView](../uikit/uitableview.md) to efficiently prepare file-related data for display.

<a id="Coordinate-file-access-to-reduce-hangs"></a>

### Coordinate file access to reduce hangs

A *blocking call* is a task that may temporarily suspend the calling thread’s execution, such as checking whether a file or directory exists. When a blocking call originates from the app’s main thread, the suspended execution manifests as user interface hangs and high scroll hitch rates, negatively impacting the user experience. The duration of this specific blocking call is often indeterminate if the related files are external to the device, such as those in iCloud Drive or other file providers, or on a mounted USB drive or SMB server.

Adopt [NSFileCoordinator](nsfilecoordinator.md) and [NSFilePresenter](nsfilepresenter.md) to coordinate safe file access across different threads and processes. A *file coordinator* notifies interested file presenters whenever a file they care about is due to change. Each presenter then has an opportunity to perform any work necessary to safeguard their integrity. The file coordinator waits on all file presenters to respond before it executes the requested actions on the file. By specifying a background operation queue, the coordinator works asynchronously and is therefore safe to call from the main thread. For more information, see [coordinateAccessWithIntents:queue:byAccessor:](nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md).

<a id="Prefetch-displayable-file-data-to-maintain-a-low-scroll-hitch-rate"></a>

### Prefetch displayable file data to maintain a low scroll hitch rate

If your app displays list- or collection-based layouts of any size, adopt [UITableView](../uikit/uitableview.md) or [UICollectionView](../uikit/uicollectionview.md) — and the corresponding data source and prefetching protocols — to provide a smooth scrolling experience. An object that implements the data source protocol provides the view with items to display, whereas an object that implements the prefetching protocol is responsible for preparing and caching the data for those items.

The system provides a few milliseconds to prepare content for a cell, and exceeding that may cause elevated scroll hitch rates or dropped frames. Dropped frames in particular indicate that the system is performing file I/O in data source protocol methods such as [collectionView:cellForItemAtIndexPath:](../uikit/uicollectionviewdatasource/collectionview%28__cellforitemat_%29.md), which the system invokes on the main thread. To avoid such issues, delegate all file I/O to [NSFileCoordinator](nsfilecoordinator.md) and invoke the necessary reads (and writes) in one or more of the methods that the view’s prefetching protocol defines.

For more information, see [UICollectionViewDataSourcePrefetching](../uikit/uicollectionviewdatasourceprefetching.md), [UITableViewDataSourcePrefetching](../uikit/uitableviewdatasourceprefetching.md), and the sample code [Prefetching collection view data](../uikit/prefetching-collection-view-data.md).

<a id="Request-access-to-multiple-files-in-parallel-to-boost-efficiency"></a>

### Request access to multiple files in parallel to boost efficiency

When taking some action on a list of files, an app may iterate over that list and process each file sequentially, such as in a `for` or `while` loop. However, accessing files that are external to the device, such as those in iCloud Drive, may result in expensive, blocking network requests as the system must download the files before it can make them available for your app to use.

To minimize the impact, don’t perform any file I/O in the loop. Instead, use each iteration of the loop to create an instance of [NSFileCoordinator](nsfilecoordinator.md) and specify a background queue for the system to use when it invokes that coordinator’s `accessor` closure. By adopting this approach, you enable the system to download any remote files in a concurrent, nonblocking way, as the following example shows:

```swift
// Create a background queue for the system to use
// when invoking each file coordinator's accessor 
// closure.
let queue = OperationQueue()
queue.underlyingQueue = .global(qos: .utility)

// Iterate over the file URLs.
for url in fileURLs {
    // Create a file coordinator and specify the appropriate
    // file access intent and queue.
    let intent = NSFileAccessIntent.readingIntent(with: url)
    let coordinator = NSFileCoordinator()
    coordinator.coordinate(with: [intent],
                           queue: queue) { error in
        if let error {
            // If there's an error, handle it here.
        } else {
            // Otherwise, process the file.
        }
    }
}
```

<a id="Provide-directory-hints-for-file-URLs-to-avoid-wasteful-IO"></a>

### Provide directory hints for file URLs to avoid wasteful I/O

Many convenience methods make it possible to create URLs that represent files and directories in the file system, local or otherwise. If you know that the destination of such a URL is a directory, use the method variants that require the `isDirectory` parameter and specify [true](https://developer.apple.com/documentation/swift/true) as the value. If you use a more succinct method that omits the parameter, the system performs a potentially blocking call to the file system to determine if the URL’s destination is a file or a directory.

If you are using Swift and your app targets iOS 16 and later (or macOS 13 and later), use [init(filePath:directoryHint:relativeTo:)](url/init%28filepath_directoryhint_relativeto_%29.md) to create file URLs — and [appending(path:directoryHint:)](url/appending%28path_directoryhint_%29.md) to modify existing URLs — and specify a value other than `inferFromPath` for the `directoryHint` parameter. For earlier versions, opt for the nonblocking variants of the methods in the following table.

The following table lists the blocking and nonblocking method variants.

| Blocking | Nonblocking |
| --- | --- |
| [fileURLWithPath:](nsurl/fileurl%28withpath_%29.md) | [fileURLWithPath:isDirectory:](nsurl/fileurl%28withpath_isdirectory_%29.md) |
| [initFileURLWithPath:](nsurl/init%28fileurlwithpath_%29.md) | [initFileURLWithPath:isDirectory:](nsurl/init%28fileurlwithpath_isdirectory_%29.md) |
| [fileURLWithPath:relativeToURL:](nsurl/fileurl%28withpath_relativeto_%29.md) | [fileURLWithPath:isDirectory:relativeToURL:](nsurl/fileurl%28withpath_isdirectory_relativeto_%29.md) |
| [initFileURLWithPath:relativeToURL:](nsurl/init%28fileurlwithpath_relativeto_%29.md) | [initFileURLWithPath:isDirectory:relativeToURL:](nsurl/init%28fileurlwithpath_isdirectory_relativeto_%29.md) |
| [URLByAppendingPathComponent:](nsurl/appendingpathcomponent%28__%29.md) | [URLByAppendingPathComponent:isDirectory:](nsurl/appendingpathcomponent%28__isdirectory_%29.md) |

Additionally, APIs that traverse directory hierarchies may also block, and the duration of the block depends entirely on the depth of the traversed hierarchy. For that reason, only call these APIs from a background thread.

## See Also

### File system operations

- [Using the file system effectively](using-the-file-system-effectively.md): Gain access to benefits like automatic backup or purging by using purpose-built directories provided by the system.
- [NSFileManager](filemanager.md): A convenient interface to the contents of the file system, and the primary means of interacting with it.
- [NSFileManagerDelegate](filemanagerdelegate.md): The interface a file manager’s delegate uses to intervene during operations or if an error occurs.
- [About Apple File System](about-apple-file-system.md): Use high-level APIs to get the most out of Apple File System.
