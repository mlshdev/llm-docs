> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amactionerrorkey](https://developer.apple.com/documentation/automator/amactionerrorkey)

# AMActionErrorKey (Swift)

**Framework:** Automator  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A key to retrieve the action that caused an error.

## Declaration

```swift
var AMActionErrorKey: String { get }
```

<a id="Discussion"></a>

## Discussion

Use this key to obtain, from the [userInfo](https://developer.apple.com/documentation/foundation/nserror/userinfo) dictionary of an instance of [NSError](https://developer.apple.com/documentation/foundation/nserror), a reference to the action ([AMAction](amaction.md)) that caused the error.

## See Also

### Errors

- [AMAutomatorErrorDomain](amautomatorerrordomain.md): A string that identifies the Automator error domain.
- [AMError](amerror.md): An Automator error.
- [AMError.Code](amerror/code.md): Automator error codes.

# AMActionErrorKey (Objective-C)

**Framework:** Automator  
**Kind:** Macro  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A key to retrieve the action that caused an error.

## Declaration

```objectivec
#define AMActionErrorKey
```

<a id="Discussion"></a>

## Discussion

Use this key to obtain, from the [userInfo](https://developer.apple.com/documentation/foundation/nserror/userinfo) dictionary of an instance of [NSError](https://developer.apple.com/documentation/foundation/nserror), a reference to the action ([AMAction](amaction.md)) that caused the error.

## See Also

### Errors

- [AMAutomatorErrorDomain](amautomatorerrordomain.md): A string that identifies the Automator error domain.
- [AMErrorCode](amerror/code.md): Automator error codes.
