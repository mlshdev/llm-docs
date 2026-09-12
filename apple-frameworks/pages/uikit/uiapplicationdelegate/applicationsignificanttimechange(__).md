> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/applicationsignificanttimechange(_:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/applicationsignificanttimechange(_:))

# applicationSignificantTimeChange(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when there is a significant change in the time.

## Declaration

```swift
optional func applicationSignificantTimeChange(_ application: UIApplication)
```

## Parameters

- `application`: Your singleton app object.

<a id="Discussion"></a>

## Discussion

Examples of significant time changes include the arrival of midnight, an update of the time by a carrier, and the change to daylight savings time. The delegate can implement this method to adjust any object of the app that displays time or is sensitive to time changes.

Prior to calling this method, the app also posts a [significantTimeChangeNotification](../uiapplication/significanttimechangenotification.md) notification to give interested objects a chance to respond to the change.

If your app is currently suspended, this message is queued until your app returns to the foreground, at which point it is delivered. If multiple time changes occur, only the most recent one is delivered.

## See Also

### Responding to environment changes

- [applicationProtectedDataDidBecomeAvailable(\_:)](applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected files are available now.
- [applicationProtectedDataWillBecomeUnavailable(\_:)](applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that the protected files are about to become unavailable.
- [applicationDidReceiveMemoryWarning(\_:)](applicationdidreceivememorywarning%28__%29.md): Tells the delegate when the app receives a memory warning from the system.
- [protectedDataDidBecomeAvailableNotification](../uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [protectedDataWillBecomeUnavailableNotification](../uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
- [didReceiveMemoryWarningNotification](../uiapplication/didreceivememorywarningnotification.md): A notification that posts when the app receives a warning from the operating system about low memory availability.
- [significantTimeChangeNotification](../uiapplication/significanttimechangenotification.md): A notification that posts when there’s a significant change in time.

# applicationSignificantTimeChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when there is a significant change in the time.

## Declaration

```objectivec
- (void) applicationSignificantTimeChange:(UIApplication *) application;
```

## Parameters

- `application`: Your singleton app object.

<a id="Discussion"></a>

## Discussion

Examples of significant time changes include the arrival of midnight, an update of the time by a carrier, and the change to daylight savings time. The delegate can implement this method to adjust any object of the app that displays time or is sensitive to time changes.

Prior to calling this method, the app also posts a [UIApplicationSignificantTimeChangeNotification](../uiapplication/significanttimechangenotification.md) notification to give interested objects a chance to respond to the change.

If your app is currently suspended, this message is queued until your app returns to the foreground, at which point it is delivered. If multiple time changes occur, only the most recent one is delivered.

## See Also

### Responding to environment changes

- [applicationProtectedDataDidBecomeAvailable:](applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected files are available now.
- [applicationProtectedDataWillBecomeUnavailable:](applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that the protected files are about to become unavailable.
- [applicationDidReceiveMemoryWarning:](applicationdidreceivememorywarning%28__%29.md): Tells the delegate when the app receives a memory warning from the system.
- [UIApplicationProtectedDataDidBecomeAvailable](../uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [UIApplicationProtectedDataWillBecomeUnavailable](../uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
- [UIApplicationDidReceiveMemoryWarningNotification](../uiapplication/didreceivememorywarningnotification.md): A notification that posts when the app receives a warning from the operating system about low memory availability.
- [UIApplicationSignificantTimeChangeNotification](../uiapplication/significanttimechangenotification.md): A notification that posts when there’s a significant change in time.
