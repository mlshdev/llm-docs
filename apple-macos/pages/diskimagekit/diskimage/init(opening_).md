> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/init(opening:)](https://developer.apple.com/documentation/diskimagekit/diskimage/init(opening:))

# init(opening:)

**Framework:** DiskImageKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Opens an existing disk image using the specified image URL.

## Declaration

```swift
convenience init(opening configuration: some OpenConfigurationProtocol) throws
```

## Parameters

- `configuration`: The configuration object that specifies the parameters for opening the disk image.

<a id="discussion"></a>

## Discussion

Use this initializer to open any existing disk image — standalone or a disk image layer. To append this image to a stacked disk image, use [appending(\_:)](appending%28__%29-4wifj.md). Encrypted disk images are not supported.

The following example demonstrates opening a disk image using a URL.

```
let image = try DiskImage(opening: .open(url: imageURL))
```

> **Throws**

> [CorruptedImageError](../corruptedimageerror.md) if the disk image contains invalid data. [UnsupportedFormatError](../unsupportedformaterror.md) if the disk image format isn’t supported. `POSIXError` for file system errors such as file not found or permission denied.
