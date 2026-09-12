> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:willencoderestorablestate:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:willencoderestorablestate:))

# application(\_:willEncodeRestorableState:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that the app is about to encode its restorable state.

## Declaration

```swift
@MainActor optional func application(_ app: NSApplication, willEncodeRestorableState coder: NSCoder)
```

## Parameters

- `app`: The application.
- `coder`: The coder extracting the archive.

## See Also

### Restoring Application State

- [applicationSupportsSecureRestorableState(\_:)](applicationsupportssecurerestorablestate%28__%29.md): Returns a Boolean value that indicates if the app supports secure state restoration.
- [applicationProtectedDataDidBecomeAvailable(\_:)](applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected data is now available.
- [applicationProtectedDataWillBecomeUnavailable(\_:)](applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that protected data is about to become unavailable.
- [application(\_:didDecodeRestorableState:)](application%28__diddecoderestorablestate_%29.md): Tells the delegate when the app finished decoding its restorable state.

# application:willEncodeRestorableState: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that the app is about to encode its restorable state.

## Declaration

```objectivec
- (void) application:(NSApplication *) app willEncodeRestorableState:(NSCoder *) coder;
```

## Parameters

- `app`: The application.
- `coder`: The coder extracting the archive.

## See Also

### Restoring Application State

- [applicationSupportsSecureRestorableState:](applicationsupportssecurerestorablestate%28__%29.md): Returns a Boolean value that indicates if the app supports secure state restoration.
- [applicationProtectedDataDidBecomeAvailable:](applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected data is now available.
- [applicationProtectedDataWillBecomeUnavailable:](applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that protected data is about to become unavailable.
- [application:didDecodeRestorableState:](application%28__diddecoderestorablestate_%29.md): Tells the delegate when the app finished decoding its restorable state.
