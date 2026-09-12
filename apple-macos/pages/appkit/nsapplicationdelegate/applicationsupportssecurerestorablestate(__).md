> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationsupportssecurerestorablestate(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationsupportssecurerestorablestate(_:))

# applicationSupportsSecureRestorableState(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a Boolean value that indicates if the app supports secure state restoration.

## Declaration

```swift
@MainActor optional func applicationSupportsSecureRestorableState(_ app: NSApplication) -> Bool
```

## Parameters

- `app`: The app object associated with the delegate.

<a id="return-value"></a>

## Return Value

`true` when the app supports secure state restoration; otherwise, `false`.

## See Also

### Restoring Application State

- [applicationProtectedDataDidBecomeAvailable(\_:)](applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected data is now available.
- [applicationProtectedDataWillBecomeUnavailable(\_:)](applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that protected data is about to become unavailable.
- [application(\_:willEncodeRestorableState:)](application%28__willencoderestorablestate_%29.md): Tells the delegate that the app is about to encode its restorable state.
- [application(\_:didDecodeRestorableState:)](application%28__diddecoderestorablestate_%29.md): Tells the delegate when the app finished decoding its restorable state.

# applicationSupportsSecureRestorableState: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a Boolean value that indicates if the app supports secure state restoration.

## Declaration

```objectivec
- (BOOL) applicationSupportsSecureRestorableState:(NSApplication *) app;
```

## Parameters

- `app`: The app object associated with the delegate.

<a id="return-value"></a>

## Return Value

`true` when the app supports secure state restoration; otherwise, `false`.

## See Also

### Restoring Application State

- [applicationProtectedDataDidBecomeAvailable:](applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected data is now available.
- [applicationProtectedDataWillBecomeUnavailable:](applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that protected data is about to become unavailable.
- [application:willEncodeRestorableState:](application%28__willencoderestorablestate_%29.md): Tells the delegate that the app is about to encode its restorable state.
- [application:didDecodeRestorableState:](application%28__diddecoderestorablestate_%29.md): Tells the delegate when the app finished decoding its restorable state.
