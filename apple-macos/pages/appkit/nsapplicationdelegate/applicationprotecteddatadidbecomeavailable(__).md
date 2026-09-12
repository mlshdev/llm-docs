> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationprotecteddatadidbecomeavailable(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationprotecteddatadidbecomeavailable(_:))

# applicationProtectedDataDidBecomeAvailable(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Tells the delegate that protected data is now available.

## Declaration

```swift
@MainActor optional func applicationProtectedDataDidBecomeAvailable(_ notification: Notification)
```

## See Also

### Restoring Application State

- [applicationSupportsSecureRestorableState(\_:)](applicationsupportssecurerestorablestate%28__%29.md): Returns a Boolean value that indicates if the app supports secure state restoration.
- [applicationProtectedDataWillBecomeUnavailable(\_:)](applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that protected data is about to become unavailable.
- [application(\_:willEncodeRestorableState:)](application%28__willencoderestorablestate_%29.md): Tells the delegate that the app is about to encode its restorable state.
- [application(\_:didDecodeRestorableState:)](application%28__diddecoderestorablestate_%29.md): Tells the delegate when the app finished decoding its restorable state.

# applicationProtectedDataDidBecomeAvailable: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Tells the delegate that protected data is now available.

## Declaration

```objectivec
- (void) applicationProtectedDataDidBecomeAvailable:(NSNotification *) notification;
```

## Topics

### Related notification

- [NSApplicationProtectedDataDidBecomeAvailableNotification](../nsapplicationprotecteddatadidbecomeavailablenotification.md): Posted when protected data becomes available.

## See Also

### Restoring Application State

- [applicationSupportsSecureRestorableState:](applicationsupportssecurerestorablestate%28__%29.md): Returns a Boolean value that indicates if the app supports secure state restoration.
- [applicationProtectedDataWillBecomeUnavailable:](applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that protected data is about to become unavailable.
- [application:willEncodeRestorableState:](application%28__willencoderestorablestate_%29.md): Tells the delegate that the app is about to encode its restorable state.
- [application:didDecodeRestorableState:](application%28__diddecoderestorablestate_%29.md): Tells the delegate when the app finished decoding its restorable state.
