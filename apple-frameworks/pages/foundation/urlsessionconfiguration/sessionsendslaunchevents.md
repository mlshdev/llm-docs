> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/sessionsendslaunchevents](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/sessionsendslaunchevents)

# sessionSendsLaunchEvents (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the app should be resumed or launched in the background when transfers finish.

## Declaration

```swift
var sessionSendsLaunchEvents: Bool { get set }
```

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

For configuration objects created using the [background(withIdentifier:)](background%28withidentifier_%29.md) method, you can use this property to control the launching behavior for an iOS app. This property is ignored for configuration objects created using other methods.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the system automatically wakes up or launches the iOS app in the background when the session’s tasks finish or require authentication. At that time, the system calls the app delegate’s [application(\_:handleEventsForBackgroundURLSession:completionHandler:)](../../uikit/uiapplicationdelegate/application%28__handleeventsforbackgroundurlsession_completionhandler_%29.md) method, providing it with the identifier of the session that needs attention. If your app had to be relaunched, you can use that identifier to create a new configuration and session object capable of servicing the tasks.

## See Also

### Supporting background transfers

- [isDiscretionary](isdiscretionary.md): A Boolean value that determines whether background tasks can be scheduled at the discretion of the system for optimal performance.
- [shouldUseExtendedBackgroundIdleMode](shoulduseextendedbackgroundidlemode.md): Deprecated. A Boolean value that indicates whether TCP connections should be kept open when the app moves to the background.

# sessionSendsLaunchEvents (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the app should be resumed or launched in the background when transfers finish.

## Declaration

```objectivec
@property BOOL sessionSendsLaunchEvents;
```

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

For configuration objects created using the [backgroundSessionConfigurationWithIdentifier:](background%28withidentifier_%29.md) method, you can use this property to control the launching behavior for an iOS app. This property is ignored for configuration objects created using other methods.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the system automatically wakes up or launches the iOS app in the background when the session’s tasks finish or require authentication. At that time, the system calls the app delegate’s [application:handleEventsForBackgroundURLSession:completionHandler:](../../uikit/uiapplicationdelegate/application%28__handleeventsforbackgroundurlsession_completionhandler_%29.md) method, providing it with the identifier of the session that needs attention. If your app had to be relaunched, you can use that identifier to create a new configuration and session object capable of servicing the tasks.

## See Also

### Supporting background transfers

- [discretionary](isdiscretionary.md): A Boolean value that determines whether background tasks can be scheduled at the discretion of the system for optimal performance.
- [shouldUseExtendedBackgroundIdleMode](shoulduseextendedbackgroundidlemode.md): Deprecated. A Boolean value that indicates whether TCP connections should be kept open when the app moves to the background.
