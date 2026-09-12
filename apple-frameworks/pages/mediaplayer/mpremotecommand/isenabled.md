> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommand/isenabled](https://developer.apple.com/documentation/mediaplayer/mpremotecommand/isenabled)

# isEnabled (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

A Boolean value that indicates whether a user can interact with the displayed element.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the designated element is enabled so users can interact with it. When set to [false](https://developer.apple.com/documentation/swift/false), events for this command are not sent to your app, and the user interface may be changed to reflect this when your app is the Now Playing app. The default value is [true](https://developer.apple.com/documentation/swift/true).

# enabled (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

A Boolean value that indicates whether a user can interact with the displayed element.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the designated element is enabled so users can interact with it. When set to [false](https://developer.apple.com/documentation/swift/false), events for this command are not sent to your app, and the user interface may be changed to reflect this when your app is the Now Playing app. The default value is [true](https://developer.apple.com/documentation/swift/true).
