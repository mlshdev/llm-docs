> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/applicationdidreceivememorywarning(_:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/applicationdidreceivememorywarning(_:))

# applicationDidReceiveMemoryWarning(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when the app receives a memory warning from the system.

## Declaration

```swift
optional func applicationDidReceiveMemoryWarning(_ application: UIApplication)
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [Responding to memory warnings](../responding-to-memory-warnings.md)

<a id="Discussion"></a>

## Discussion

Your implementation of this method should free up as much memory as possible by purging cached data objects that can be recreated (or reloaded from disk) later. You use this method in conjunction with the [didReceiveMemoryWarning()](../uiviewcontroller/didreceivememorywarning%28%29.md) of the [UIViewController](../uiviewcontroller.md) class and the [didReceiveMemoryWarningNotification](../uiapplication/didreceivememorywarningnotification.md) notification to release memory throughout your app.

It is strongly recommended that you implement this method. If your app does not release enough memory during low-memory conditions, the system may terminate it outright.

## See Also

### Related Documentation

- [didReceiveMemoryWarning()](../uiviewcontroller/didreceivememorywarning%28%29.md): Sent to the view controller when the app receives a memory warning.

### Responding to environment changes

- [applicationProtectedDataDidBecomeAvailable(\_:)](applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected files are available now.
- [applicationProtectedDataWillBecomeUnavailable(\_:)](applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that the protected files are about to become unavailable.
- [applicationSignificantTimeChange(\_:)](applicationsignificanttimechange%28__%29.md): Tells the delegate when there is a significant change in the time.
- [protectedDataDidBecomeAvailableNotification](../uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [protectedDataWillBecomeUnavailableNotification](../uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
- [didReceiveMemoryWarningNotification](../uiapplication/didreceivememorywarningnotification.md): A notification that posts when the app receives a warning from the operating system about low memory availability.
- [significantTimeChangeNotification](../uiapplication/significanttimechangenotification.md): A notification that posts when there’s a significant change in time.

# applicationDidReceiveMemoryWarning: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when the app receives a memory warning from the system.

## Declaration

```objectivec
- (void) applicationDidReceiveMemoryWarning:(UIApplication *) application;
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [Responding to memory warnings](../responding-to-memory-warnings.md)

<a id="Discussion"></a>

## Discussion

Your implementation of this method should free up as much memory as possible by purging cached data objects that can be recreated (or reloaded from disk) later. You use this method in conjunction with the [didReceiveMemoryWarning](../uiviewcontroller/didreceivememorywarning%28%29.md) of the [UIViewController](../uiviewcontroller.md) class and the [UIApplicationDidReceiveMemoryWarningNotification](../uiapplication/didreceivememorywarningnotification.md) notification to release memory throughout your app.

It is strongly recommended that you implement this method. If your app does not release enough memory during low-memory conditions, the system may terminate it outright.

## See Also

### Related Documentation

- [didReceiveMemoryWarning](../uiviewcontroller/didreceivememorywarning%28%29.md): Sent to the view controller when the app receives a memory warning.

### Responding to environment changes

- [applicationProtectedDataDidBecomeAvailable:](applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected files are available now.
- [applicationProtectedDataWillBecomeUnavailable:](applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that the protected files are about to become unavailable.
- [applicationSignificantTimeChange:](applicationsignificanttimechange%28__%29.md): Tells the delegate when there is a significant change in the time.
- [UIApplicationProtectedDataDidBecomeAvailable](../uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [UIApplicationProtectedDataWillBecomeUnavailable](../uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
- [UIApplicationDidReceiveMemoryWarningNotification](../uiapplication/didreceivememorywarningnotification.md): A notification that posts when the app receives a warning from the operating system about low memory availability.
- [UIApplicationSignificantTimeChangeNotification](../uiapplication/significanttimechangenotification.md): A notification that posts when there’s a significant change in time.
