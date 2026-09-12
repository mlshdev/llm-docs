> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosrestoreimage/load(from:completionhandler:)](https://developer.apple.com/documentation/virtualization/vzmacosrestoreimage/load(from:completionhandler:))

# load(from:completionHandler:)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Load a restore image from a file on the local file system.

## Declaration

```swift
@preconcurrency class func load(from fileURL: URL, completionHandler: @escaping @Sendable (Result<VZMacOSRestoreImage, any Error>) -> Void)
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

- [fetchLatestSupported(completionHandler:)](fetchlatestsupported%28completionhandler_%29.md): Fetches the latest restore image supported by this host from the network.
- [latestSupported](latestsupported.md): Fetches the latest restore image supported by this host from the network.
- [image(from:)](image%28from_%29.md): Load a restore image from a file on the local file system.
