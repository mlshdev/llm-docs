> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/metadata](https://developer.apple.com/documentation/avfoundation/avassetexportsession/metadata)

# metadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The metadata an export session writes to the output container file.

## Declaration

```swift
var metadata: [AVMetadataItem]? { get set }
```

## See Also

### Configuring metadata

- [metadataItemFilter](metadataitemfilter.md): An object the export session uses to filter the metadata items it transfers to the output asset.

# metadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The metadata an export session writes to the output container file.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<AVMetadataItem *> * metadata;
```

## See Also

### Configuring metadata

- [metadataItemFilter](metadataitemfilter.md): An object the export session uses to filter the metadata items it transfers to the output asset.
