> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetexportsession/metadataitemfilter

# metadataItemFilter (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object the export session uses to filter the metadata items it transfers to the output asset.

## Declaration

```swift
var metadataItemFilter: AVMetadataItemFilter? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Configuring metadata

- [metadata](metadata.md): The metadata an export session writes to the output container file.

# metadataItemFilter (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object the export session uses to filter the metadata items it transfers to the output asset.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) AVMetadataItemFilter * metadataItemFilter;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Configuring metadata

- [metadata](metadata.md): The metadata an export session writes to the output container file.
