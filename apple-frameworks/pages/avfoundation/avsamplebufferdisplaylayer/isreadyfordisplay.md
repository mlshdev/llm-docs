> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/isreadyfordisplay](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/isreadyfordisplay)

# isReadyForDisplay (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the first video frame is ready for display.

## Declaration

```swift
var isReadyForDisplay: Bool { get }
```

## See Also

### Configuring the layer

- [controlTimebase](controltimebase.md): A timebase that determines how the layer interprets timestamps.
- [videoGravity](videogravity.md): A value that indicates how the layer displays video within its bounds.
- [AVLayerVideoGravity](../avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.

# readyForDisplay (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the first video frame is ready for display.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReadyForDisplay) BOOL readyForDisplay;
```

## See Also

### Configuring the layer

- [controlTimebase](controltimebase.md): A timebase that determines how the layer interprets timestamps.
- [videoGravity](videogravity.md): A value that indicates how the layer displays video within its bounds.
- [AVLayerVideoGravity](../avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.
