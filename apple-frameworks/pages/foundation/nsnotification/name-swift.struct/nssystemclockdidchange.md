> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nssystemclockdidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nssystemclockdidchange)

# NSSystemClockDidChange (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification posted whenever the system clock is changed.

## Declaration

```swift
static let NSSystemClockDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This can be initiated by a call to `settimeofday(_:_:)` or the user changing values in the Date and Time Preference panel.

The notification object is `null`. This notification does not contain a `userInfo` dictionary.

# NSSystemClockDidChangeNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification posted whenever the system clock is changed.

## Declaration

```objectivec
extern NSNotificationName const NSSystemClockDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This can be initiated by a call to `settimeofday(_:_:)` or the user changing values in the Date and Time Preference panel.

The notification object is `null`. This notification does not contain a `userInfo` dictionary.
