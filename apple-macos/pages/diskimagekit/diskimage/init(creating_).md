> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/init(creating:)](https://developer.apple.com/documentation/diskimagekit/diskimage/init(creating:))

# init(creating:)

**Framework:** DiskImageKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a new, empty disk image.

## Declaration

```swift
convenience init(creating configuration: some DiskImage.CreationConfiguration) throws
```

## Parameters

- `configuration`: A configuration object that specifies the parameters for the new disk image. If the URL points to an existing file, the framework overwrites it.

<a id="discussion"></a>

## Discussion

Use this initializer to create a new standalone disk image or a base image for a stacked disk image. The `configuration` must not be a [DiskImage.StackableLayer](stackablelayer.md); use [appending(\_:)](appending%28__%29-3pfqg.md) instead.

The following example creates an ASIF disk image at a specific location, a block count, and block size you specify with an [ASIFCreationConfiguration](../asifcreationconfiguration.md) configuration object.

```
let image = try DiskImage(creating: .asif(url: imageURL, blockCount: 1000000000, blockSize: .bytes512))
```

> **Throws**

> [InvalidBlockCountError](../invalidblockcounterror.md) if the block count is zero or negative. `POSIXError` if the disk image cannot be created.

## See Also

### Creating disk images

- [ASIFCreationConfiguration](../asifcreationconfiguration.md): The configuration to use to create Apple sparse image format (ASIF) disk images.
- [ASIFLayerCreationConfiguration](../asiflayercreationconfiguration.md): The configuration to use to create Apple sparse image format (ASIF) disk image layers in stacked images.
- [DiskImage.CreationConfiguration](creationconfiguration.md): A marker protocol for disk image creation configurations.
- [RAWCreationConfiguration](../rawcreationconfiguration.md): The configuration to use to create RAW disk images.
