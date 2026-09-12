> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderservicing/supportedservicesources(for:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderservicing/supportedservicesources(for:completionhandler:))

# supportedServiceSources(for:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Asks the File Provider extension for an array of custom communication channels.

## Declaration

```swift
func supportedServiceSources(for itemIdentifier: NSFileProviderItemIdentifier, completionHandler: @escaping ([any NSFileProviderServiceSource]?, (any Error)?) -> Void) -> Progress
```

## Parameters

- `itemIdentifier`: The item’s identifier.
- `completionHandler`: A block that you call after gathering the service sources. You pass the following parameters:

  - **serviceSources**: An array of service sources that lets you communicate with the host app.
  - **error**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="return-value"></a>

## Return Value

An item that tracks the progress of the

<a id="Discussion"></a>

## Discussion

The system calls this method when an app requests a list of supported services. Return an array of services for the specified file. An application with access to the file can request the supported services by calling the [FileManager](../../foundation/filemanager.md) class’s [getFileProviderServicesForItem(at:completionHandler:)](../../foundation/filemanager/getfileproviderservicesforitem%28at_completionhandler_%29.md) method. For more information, see [NSFileProviderService](../../foundation/nsfileproviderservice.md).

# supportedServiceSourcesForItemIdentifier:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Asks the File Provider extension for an array of custom communication channels.

## Declaration

```objectivec
- (NSProgress *) supportedServiceSourcesForItemIdentifier:(NSFileProviderItemIdentifier) itemIdentifier completionHandler:(void (^)(NSArray<id<NSFileProviderServiceSource>> *, NSError *)) completionHandler;
```

## Parameters

- `itemIdentifier`: The item’s identifier.
- `completionHandler`: A block that you call after gathering the service sources. You pass the following parameters:

  - **serviceSources**: An array of service sources that lets you communicate with the host app.
  - **error**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="return-value"></a>

## Return Value

An item that tracks the progress of the

<a id="Discussion"></a>

## Discussion

The system calls this method when an app requests a list of supported services. Return an array of services for the specified file. An application with access to the file can request the supported services by calling the [NSFileManager](../../foundation/filemanager.md) class’s [getFileProviderServicesForItemAtURL:completionHandler:](../../foundation/filemanager/getfileproviderservicesforitem%28at_completionhandler_%29.md) method. For more information, see [NSFileProviderService](../../foundation/nsfileproviderservice.md).
