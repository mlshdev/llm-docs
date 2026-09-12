> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/applicationprotecteddatawillbecomeunavailable(_:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/applicationprotecteddatawillbecomeunavailable(_:))

# applicationProtectedDataWillBecomeUnavailable(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the protected files are about to become unavailable.

## Declaration

```swift
optional func applicationProtectedDataWillBecomeUnavailable(_ application: UIApplication)
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [Encrypting Your App’s Files](../encrypting-your-app-s-files.md)

<a id="Discussion"></a>

## Discussion

On a device that uses content protection, protected files are stored in an encrypted form and made available only at certain times, usually when the device is unlocked. This notification lets your app know that the device is about to be locked and that any protected files it is currently accessing might become unavailable shortly.

If your app is currently accessing a protected file, you can use this method to release any references to that file. Although it is not an error to access the file while the device is locked, any attempts to do so will fail. Therefore, if your app depends on the file, you might want to take steps to avoid using that file while the device is locked.

## See Also

### Responding to environment changes

- [applicationProtectedDataDidBecomeAvailable(\_:)](applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected files are available now.
- [applicationDidReceiveMemoryWarning(\_:)](applicationdidreceivememorywarning%28__%29.md): Tells the delegate when the app receives a memory warning from the system.
- [applicationSignificantTimeChange(\_:)](applicationsignificanttimechange%28__%29.md): Tells the delegate when there is a significant change in the time.
- [protectedDataDidBecomeAvailableNotification](../uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [protectedDataWillBecomeUnavailableNotification](../uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
- [didReceiveMemoryWarningNotification](../uiapplication/didreceivememorywarningnotification.md): A notification that posts when the app receives a warning from the operating system about low memory availability.
- [significantTimeChangeNotification](../uiapplication/significanttimechangenotification.md): A notification that posts when there’s a significant change in time.

# applicationProtectedDataWillBecomeUnavailable: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the protected files are about to become unavailable.

## Declaration

```objectivec
- (void) applicationProtectedDataWillBecomeUnavailable:(UIApplication *) application;
```

## Parameters

- `application`: Your singleton app object.

## Mentioned In

- [Encrypting Your App’s Files](../encrypting-your-app-s-files.md)

<a id="Discussion"></a>

## Discussion

On a device that uses content protection, protected files are stored in an encrypted form and made available only at certain times, usually when the device is unlocked. This notification lets your app know that the device is about to be locked and that any protected files it is currently accessing might become unavailable shortly.

If your app is currently accessing a protected file, you can use this method to release any references to that file. Although it is not an error to access the file while the device is locked, any attempts to do so will fail. Therefore, if your app depends on the file, you might want to take steps to avoid using that file while the device is locked.

## See Also

### Responding to environment changes

- [applicationProtectedDataDidBecomeAvailable:](applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected files are available now.
- [applicationDidReceiveMemoryWarning:](applicationdidreceivememorywarning%28__%29.md): Tells the delegate when the app receives a memory warning from the system.
- [applicationSignificantTimeChange:](applicationsignificanttimechange%28__%29.md): Tells the delegate when there is a significant change in the time.
- [UIApplicationProtectedDataDidBecomeAvailable](../uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [UIApplicationProtectedDataWillBecomeUnavailable](../uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
- [UIApplicationDidReceiveMemoryWarningNotification](../uiapplication/didreceivememorywarningnotification.md): A notification that posts when the app receives a warning from the operating system about low memory availability.
- [UIApplicationSignificantTimeChangeNotification](../uiapplication/significanttimechangenotification.md): A notification that posts when there’s a significant change in time.
