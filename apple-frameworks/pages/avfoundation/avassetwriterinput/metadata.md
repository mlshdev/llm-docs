> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetwriterinput/metadata

# metadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The track-level metadata to write to the output.

## Declaration

```swift
var metadata: [AVMetadataItem] { get set }
```

<a id="Discussion"></a>

## Discussion

You can’t set this property after writing starts.

# metadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The track-level metadata to write to the output.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVMetadataItem *> * metadata;
```

<a id="Discussion"></a>

## Discussion

You can’t set this property after writing starts.
