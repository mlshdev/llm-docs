> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosrestoreimage/fetchlatestsupported(completionhandler:)](https://developer.apple.com/documentation/virtualization/vzmacosrestoreimage/fetchlatestsupported(completionhandler:))

# fetchLatestSupported(completionHandler:)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Fetches the latest restore image supported by this host from the network.

## Declaration

```swift
@preconcurrency class func fetchLatestSupported(completionHandler: @escaping @Sendable (Result<VZMacOSRestoreImage, any Error>) -> Void)
```

## Parameters

- `completionHandler`: A block called after the restore image fetch has succeeded or failed. The `error` parameter passed to the block is `nil` if the image restoration was successful.

  The system invokes the completion handler on an arbitrary thread. The completion handler returns an `error` parameter that describes the reason for the failure; the block is `nil` if installation was successful.

<a id="Discussion"></a>

## Discussion

Construct a [VZMacOSInstaller](../vzmacosinstaller.md) object with a `VZMacOSRestoreImage` loaded from a file on the local file system. A `VZMacOSRestoreImage` fetched with the [latestSupported](latestsupported.md) method has a URL property that refers to a restore image on the network.

To use a network restore image, download the file to disk (using [URLSession](https://developer.apple.com/documentation/foundation/urlsession) or similar API). After downloading the restore image, you can initialize a [VZMacOSInstaller](../vzmacosinstaller.md) using a URL referring to the local file.

## See Also

### Controlling the Restoration Process

- [load(from:completionHandler:)](load%28from_completionhandler_%29.md): Load a restore image from a file on the local file system.
- [latestSupported](latestsupported.md): Fetches the latest restore image supported by this host from the network.
- [image(from:)](image%28from_%29.md): Load a restore image from a file on the local file system.
