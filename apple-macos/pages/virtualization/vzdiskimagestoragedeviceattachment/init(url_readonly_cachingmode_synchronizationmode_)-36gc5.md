> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskimagestoragedeviceattachment/init(url:readonly:cachingmode:synchronizationmode:)-36gc5](https://developer.apple.com/documentation/virtualization/vzdiskimagestoragedeviceattachment/init(url:readonly:cachingmode:synchronizationmode:)-36gc5)

# init(url:readOnly:cachingMode:synchronizationMode:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Initialize the attachment from a local file URL.

## Declaration

```swift
init(url: URL, readOnly: Bool, cachingMode: VZDiskImageCachingMode, synchronizationMode: VZDiskImageSynchronizationMode) throws
```

## Parameters

- `url`: Local file URL to the disk image in RAW format.
- `readOnly`: If `true`, the device attachment is read-only, otherwise the device can write data to the disk image.
- `cachingMode`: The cacheing mode from one of the available [VZDiskImageCachingMode](../vzdiskimagecachingmode.md) options.
- `synchronizationMode`: How the disk image synchronizes with the underlying storage when the guest operating system flushes data, described by one of the available [VZDiskImageSynchronizationMode](../vzdiskimagesynchronizationmode.md) modes.

## See Also

### Creating the attachment point

- [init(url:readOnly:)](init%28url_readonly_%29-9qeco.md): Creates the attachment object from the specified disk image.

# initWithURL:readOnly:cachingMode:synchronizationMode:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Initialize the attachment from a local file URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url readOnly:(BOOL) readOnly cachingMode:(VZDiskImageCachingMode) cachingMode synchronizationMode:(VZDiskImageSynchronizationMode) synchronizationMode error:(NSError **) error;
```

## Parameters

- `url`: Local file URL to the disk image in RAW format.
- `readOnly`: If `true`, the device attachment is read-only, otherwise the device can write data to the disk image.
- `cachingMode`: The cacheing mode from one of the available [VZDiskImageCachingMode](../vzdiskimagecachingmode.md) options.
- `synchronizationMode`: How the disk image synchronizes with the underlying storage when the guest operating system flushes data, described by one of the available [VZDiskImageSynchronizationMode](../vzdiskimagesynchronizationmode.md) modes.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## See Also

### Creating the attachment point

- [initWithURL:readOnly:error:](init%28url_readonly_%29-9qeco.md): Creates the attachment object from the specified disk image.
