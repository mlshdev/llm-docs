> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatacinematicvideometadataobject/timedmetadatagroup](https://developer.apple.com/documentation/avfoundation/avmetadatacinematicvideometadataobject/timedmetadatagroup)

# timedMetadataGroup (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A timed metadata group containing the Cinematic video metadata.

## Declaration

```swift
var timedMetadataGroup: AVTimedMetadataGroup? { get }
```

<a id="discussion"></a>

## Discussion

Append this group to an [AVAssetWriterInputMetadataAdaptor](../avassetwriterinputmetadataadaptor.md) to write the Cinematic video metadata track.

# timedMetadataGroup (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A timed metadata group containing the Cinematic video metadata.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVTimedMetadataGroup * timedMetadataGroup;
```

<a id="discussion"></a>

## Discussion

Append this group to an [AVAssetWriterInputMetadataAdaptor](../avassetwriterinputmetadataadaptor.md) to write the Cinematic video metadata track.
