> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldisplaylink/ispaused](https://developer.apple.com/documentation/quartzcore/cametaldisplaylink/ispaused)

# isPaused (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the system suspends the display link’s notifications to the target.

## Declaration

```swift
var isPaused: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

You can instruct the display link to stop sending notifications to the delegate by setting the property to [true](https://developer.apple.com/documentation/swift/true). The property defaults to [false](https://developer.apple.com/documentation/swift/false).

# paused (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the system suspends the display link’s notifications to the target.

## Declaration

```objectivec
@property (nonatomic, getter=isPaused) BOOL paused;
```

<a id="Discussion"></a>

## Discussion

You can instruct the display link to stop sending notifications to the delegate by setting the property to [true](https://developer.apple.com/documentation/swift/true). The property defaults to [false](https://developer.apple.com/documentation/swift/false).
