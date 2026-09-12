> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlayer/isreadyfordisplay](https://developer.apple.com/documentation/avfoundation/avplayerlayer/isreadyfordisplay)

# isReadyForDisplay (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the first video frame of the player’s current item is ready for display.

## Declaration

```swift
var isReadyForDisplay: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine when to show or animate a player layer into view. You can display a player layer while this property value is [false](https://developer.apple.com/documentation/swift/false), but the layer doesn’t present any content until the value becomes [true](https://developer.apple.com/documentation/swift/true).

This property remains [false](https://developer.apple.com/documentation/swift/false) for a player when its [currentItem](../avplayer/currentitem.md) contains no enabled video tracks.

This property is key-value observable.

# readyForDisplay (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the first video frame of the player’s current item is ready for display.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReadyForDisplay) BOOL readyForDisplay;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine when to show or animate a player layer into view. You can display a player layer while this property value is [false](https://developer.apple.com/documentation/swift/false), but the layer doesn’t present any content until the value becomes [true](https://developer.apple.com/documentation/swift/true).

This property remains [false](https://developer.apple.com/documentation/swift/false) for a player when its [currentItem](../avplayer/currentitem.md) contains no enabled video tracks.

This property is key-value observable.
