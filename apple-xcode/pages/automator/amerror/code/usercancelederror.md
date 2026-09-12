> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amerror/code/usercancelederror](https://developer.apple.com/documentation/automator/amerror/code/usercancelederror)

# AMError.Code.userCanceledError (Swift)

**Framework:** Automator  
**Kind:** Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An error that indicates the user cancelled.

## Declaration

```swift
case userCanceledError
```

<a id="Discussion"></a>

## Discussion

This error is the same as the AppleScript error [userCanceledErr](https://developer.apple.com/documentation/kernel/1645157-anonymous/usercancelederr). When an Apple Event is canceled by the user, a running action may return this error. Automator ignores the error and stops the workflow gracefully, without displaying the error to the user.

# AMUserCanceledError (Objective-C)

**Framework:** Automator  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An error that indicates the user cancelled.

## Declaration

```objectivec
AMUserCanceledError
```

<a id="Discussion"></a>

## Discussion

This error is the same as the AppleScript error [userCanceledErr](https://developer.apple.com/documentation/kernel/1645157-anonymous/usercancelederr). When an Apple Event is canceled by the user, a running action may return this error. Automator ignores the error and stops the workflow gracefully, without displaying the error to the user.
