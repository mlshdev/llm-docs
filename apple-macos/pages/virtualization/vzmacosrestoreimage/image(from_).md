> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosrestoreimage/image(from:)](https://developer.apple.com/documentation/virtualization/vzmacosrestoreimage/image(from:))

# image(from:) (Swift)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Load a restore image from a file on the local file system.

## Declaration

```swift
class func image(from fileURL: URL) async throws -> VZMacOSRestoreImage
```

## Parameters

- `fileURL`: A file URL that indicates the macOS restore image to load.

<a id="Discussion"></a>

## Discussion

`VZMacOSRestoreImage` can load macOS installation media from a local file. If the `fileURL` parameter doesn’t refer to a local file, the system raises an exception.

## See Also

### Controlling the Restoration Process

- [fetchLatestSupported(completionHandler:)](fetchlatestsupported%28completionhandler_%29.md): Fetches the latest restore image supported by this host from the network.
- [load(from:completionHandler:)](load%28from_completionhandler_%29.md): Load a restore image from a file on the local file system.
- [latestSupported](latestsupported.md): Fetches the latest restore image supported by this host from the network.

# loadFileURL:completionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Load a restore image from a file on the local file system.

## Declaration

```objectivec
+ (void) loadFileURL:(NSURL *) fileURL completionHandler:(void (^)(VZMacOSRestoreImage *, NSError *)) completionHandler;
```

## Parameters

- `fileURL`: A file URL that indicates the macOS restore image to load.
- `completionHandler`: A block called after the restore image successfully loaded or has failed to load. The `error` parameter passed to the block is `nil` if the restore image loads successfully.

  The system invokes the completion handler on an arbitrary thread.

<a id="Discussion"></a>

## Discussion

`VZMacOSRestoreImage` can load macOS installation media from a local file. If the `fileURL` parameter doesn’t refer to a local file, the system raises an exception.

## See Also

### Controlling the Restoration Process

- [fetchLatestSupportedWithCompletionHandler:](latestsupported.md): Fetches the latest restore image supported by this host from the network.
