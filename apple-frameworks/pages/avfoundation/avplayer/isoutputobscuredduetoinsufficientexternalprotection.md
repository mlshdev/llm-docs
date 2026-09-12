> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/isoutputobscuredduetoinsufficientexternalprotection](https://developer.apple.com/documentation/avfoundation/avplayer/isoutputobscuredduetoinsufficientexternalprotection)

# isOutputObscuredDueToInsufficientExternalProtection (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether output is being obscured because of insufficient external protection.

## Declaration

```swift
nonisolated var isOutputObscuredDueToInsufficientExternalProtection: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Items that incorporate copy protection or other forms of security might have their visual content obscured by the player object if the current device configuration does not meet the requirements for protecting the item. This property reports whether the player is currently obscuring the item. If the current item does not require external protection or if the device configuration sufficiently protects the item, the value of this property is set to [false](https://developer.apple.com/documentation/swift/false).

You can use this property to determine whether to change your app’s user interface to reflect the change in visibility. You can observe changes to the value of this property using key-value observing.

# outputObscuredDueToInsufficientExternalProtection (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether output is being obscured because of insufficient external protection.

## Declaration

```objectivec
@property (readonly) BOOL outputObscuredDueToInsufficientExternalProtection;
```

<a id="Discussion"></a>

## Discussion

Items that incorporate copy protection or other forms of security might have their visual content obscured by the player object if the current device configuration does not meet the requirements for protecting the item. This property reports whether the player is currently obscuring the item. If the current item does not require external protection or if the device configuration sufficiently protects the item, the value of this property is set to [false](https://developer.apple.com/documentation/swift/false).

You can use this property to determine whether to change your app’s user interface to reflect the change in visibility. You can observe changes to the value of this property using key-value observing.
