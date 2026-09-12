> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/enablerelaunchonlogin()](https://developer.apple.com/documentation/appkit/nsapplication/enablerelaunchonlogin())

# enableRelaunchOnLogin() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Enables relaunching the app on login.

## Declaration

```swift
func enableRelaunchOnLogin()
```

<a id="Discussion"></a>

## Discussion

Invoking this method will cause the app to relaunch when the user next logs in to their account.

This methods is thread safe.

## See Also

### Managing relaunch on login

- [disableRelaunchOnLogin()](disablerelaunchonlogin%28%29.md): Disables relaunching the app on login.

# enableRelaunchOnLogin (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Enables relaunching the app on login.

## Declaration

```objectivec
- (void) enableRelaunchOnLogin;
```

<a id="Discussion"></a>

## Discussion

Invoking this method will cause the app to relaunch when the user next logs in to their account.

This methods is thread safe.

## See Also

### Managing relaunch on login

- [disableRelaunchOnLogin](disablerelaunchonlogin%28%29.md): Disables relaunching the app on login.
