> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/didreceivememorywarningnotification](https://developer.apple.com/documentation/uikit/uiapplication/didreceivememorywarningnotification)

# didReceiveMemoryWarningNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts when the app receives a warning from the operating system about low memory availability.

## Declaration

```swift
nonisolated class let didReceiveMemoryWarningNotification: NSNotification.Name
```

## Mentioned In

- [Responding to memory warnings](../responding-to-memory-warnings.md)

<a id="Discussion"></a>

## Discussion

This notification does not contain a `userInfo` dictionary.

## See Also

### Responding to environment changes

- [applicationProtectedDataDidBecomeAvailable(\_:)](../uiapplicationdelegate/applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected files are available now.
- [applicationProtectedDataWillBecomeUnavailable(\_:)](../uiapplicationdelegate/applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that the protected files are about to become unavailable.
- [applicationDidReceiveMemoryWarning(\_:)](../uiapplicationdelegate/applicationdidreceivememorywarning%28__%29.md): Tells the delegate when the app receives a memory warning from the system.
- [applicationSignificantTimeChange(\_:)](../uiapplicationdelegate/applicationsignificanttimechange%28__%29.md): Tells the delegate when there is a significant change in the time.
- [protectedDataDidBecomeAvailableNotification](protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [protectedDataWillBecomeUnavailableNotification](protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
- [significantTimeChangeNotification](significanttimechangenotification.md): A notification that posts when there’s a significant change in time.

# UIApplicationDidReceiveMemoryWarningNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts when the app receives a warning from the operating system about low memory availability.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationDidReceiveMemoryWarningNotification;
```

## Mentioned In

- [Responding to memory warnings](../responding-to-memory-warnings.md)

<a id="Discussion"></a>

## Discussion

This notification does not contain a `userInfo` dictionary.

## See Also

### Responding to environment changes

- [applicationProtectedDataDidBecomeAvailable:](../uiapplicationdelegate/applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected files are available now.
- [applicationProtectedDataWillBecomeUnavailable:](../uiapplicationdelegate/applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that the protected files are about to become unavailable.
- [applicationDidReceiveMemoryWarning:](../uiapplicationdelegate/applicationdidreceivememorywarning%28__%29.md): Tells the delegate when the app receives a memory warning from the system.
- [applicationSignificantTimeChange:](../uiapplicationdelegate/applicationsignificanttimechange%28__%29.md): Tells the delegate when there is a significant change in the time.
- [UIApplicationProtectedDataDidBecomeAvailable](protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [UIApplicationProtectedDataWillBecomeUnavailable](protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
- [UIApplicationSignificantTimeChangeNotification](significanttimechangenotification.md): A notification that posts when there’s a significant change in time.
