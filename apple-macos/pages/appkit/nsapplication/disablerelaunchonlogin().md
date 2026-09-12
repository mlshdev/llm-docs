> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/disablerelaunchonlogin()](https://developer.apple.com/documentation/appkit/nsapplication/disablerelaunchonlogin())

# disableRelaunchOnLogin() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Disables relaunching the app on login.

## Declaration

```swift
func disableRelaunchOnLogin()
```

<a id="Discussion"></a>

## Discussion

Invoking this method will prevent the app from relaunching when the user next logs in to their account.

If your app shouldn’t be relaunched because it launches via some other mechanism (for example, `launchd`), then the recommended usage is to call this method once, and never pair it with an [enableRelaunchOnLogin()](enablerelaunchonlogin%28%29.md) method.

If your app shouldn’t be relaunched because it triggers a restart, for example an installer, then the recommended usage is to invoke this method immediately before you attempt to trigger a restart, and [enableRelaunchOnLogin()](enablerelaunchonlogin%28%29.md) immediately after. This is because the user may cancel restarting; if the user later restarts for another reason, then your app should be brought back.

This methods is thread safe.

## See Also

### Managing relaunch on login

- [enableRelaunchOnLogin()](enablerelaunchonlogin%28%29.md): Enables relaunching the app on login.

# disableRelaunchOnLogin (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Disables relaunching the app on login.

## Declaration

```objectivec
- (void) disableRelaunchOnLogin;
```

<a id="Discussion"></a>

## Discussion

Invoking this method will prevent the app from relaunching when the user next logs in to their account.

If your app shouldn’t be relaunched because it launches via some other mechanism (for example, `launchd`), then the recommended usage is to call this method once, and never pair it with an [enableRelaunchOnLogin](enablerelaunchonlogin%28%29.md) method.

If your app shouldn’t be relaunched because it triggers a restart, for example an installer, then the recommended usage is to invoke this method immediately before you attempt to trigger a restart, and [enableRelaunchOnLogin](enablerelaunchonlogin%28%29.md) immediately after. This is because the user may cancel restarting; if the user later restarts for another reason, then your app should be brought back.

This methods is thread safe.

## See Also

### Managing relaunch on login

- [enableRelaunchOnLogin](enablerelaunchonlogin%28%29.md): Enables relaunching the app on login.
