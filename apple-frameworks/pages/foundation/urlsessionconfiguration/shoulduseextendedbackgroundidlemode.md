> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/shoulduseextendedbackgroundidlemode](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/shoulduseextendedbackgroundidlemode)

# shouldUseExtendedBackgroundIdleMode (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.4) · iPadOS 9.0+ (deprecated in 18.4) · Mac Catalyst 13.1+ (deprecated in 18.4) · macOS 10.11+ (deprecated in 15.4) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 2.0+ (deprecated in 11.4)

A Boolean value that indicates whether TCP connections should be kept open when the app moves to the background.

> Not supported

## Declaration

```swift
var shouldUseExtendedBackgroundIdleMode: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

In addition to requesting that the connection be kept open, setting this value to [true](https://developer.apple.com/documentation/swift/true) asks the system to delay reclaiming the connection when the app moves to the background.

## See Also

### Related Documentation

- [Networking and Multitasking](https://developer.apple.com/library/archive/technotes/tn2277/_index.html#//apple_ref/doc/uid/DTS40010841)

### Supporting background transfers

- [sessionSendsLaunchEvents](sessionsendslaunchevents.md): A Boolean value that indicates whether the app should be resumed or launched in the background when transfers finish.
- [isDiscretionary](isdiscretionary.md): A Boolean value that determines whether background tasks can be scheduled at the discretion of the system for optimal performance.

# shouldUseExtendedBackgroundIdleMode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.4) · iPadOS 9.0+ (deprecated in 18.4) · Mac Catalyst 13.1+ (deprecated in 18.4) · macOS 10.11+ (deprecated in 15.4) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 2.0+ (deprecated in 11.4)

A Boolean value that indicates whether TCP connections should be kept open when the app moves to the background.

> Not supported

## Declaration

```objectivec
@property BOOL shouldUseExtendedBackgroundIdleMode;
```

<a id="Discussion"></a>

## Discussion

In addition to requesting that the connection be kept open, setting this value to [true](https://developer.apple.com/documentation/swift/true) asks the system to delay reclaiming the connection when the app moves to the background.

## See Also

### Related Documentation

- [Networking and Multitasking](https://developer.apple.com/library/archive/technotes/tn2277/_index.html#//apple_ref/doc/uid/DTS40010841)

### Supporting background transfers

- [sessionSendsLaunchEvents](sessionsendslaunchevents.md): A Boolean value that indicates whether the app should be resumed or launched in the background when transfers finish.
- [discretionary](isdiscretionary.md): A Boolean value that determines whether background tasks can be scheduled at the discretion of the system for optimal performance.
