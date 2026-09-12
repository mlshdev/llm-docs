> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/playerlayer](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/playerlayer)

# playerLayer (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The presenting player layer.

## Declaration

```swift
var playerLayer: AVPlayerLayer? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the content source doesn’t represent a player layer.

## See Also

### Accessing the Presentation Layer

- [sampleBufferDisplayLayer](samplebufferdisplaylayer.md): The presenting sample buffer display layer.

# playerLayer (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The presenting player layer.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVPlayerLayer * playerLayer;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the content source doesn’t represent a player layer.

## See Also

### Accessing the Presentation Layer

- [sampleBufferDisplayLayer](samplebufferdisplaylayer.md): The presenting sample buffer display layer.
