> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/samplebufferdisplaylayer](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/samplebufferdisplaylayer)

# sampleBufferDisplayLayer (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The presenting sample buffer display layer.

## Declaration

```swift
var sampleBufferDisplayLayer: AVSampleBufferDisplayLayer? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the content source doesn’t represent a sample buffer display layer.

## See Also

### Accessing the Presentation Layer

- [playerLayer](playerlayer.md): The presenting player layer.

# sampleBufferDisplayLayer (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The presenting sample buffer display layer.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVSampleBufferDisplayLayer * sampleBufferDisplayLayer;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the content source doesn’t represent a sample buffer display layer.

## See Also

### Accessing the Presentation Layer

- [playerLayer](playerlayer.md): The presenting player layer.
