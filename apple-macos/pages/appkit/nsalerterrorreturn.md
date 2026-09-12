> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalerterrorreturn](https://developer.apple.com/documentation/appkit/nsalerterrorreturn)

# NSAlertErrorReturn (Swift)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.10)

The alert cannot identify the reason it was closed; it may have been closed by an external source or by a button other than those listed above.

> Use NSAlertFirstButtonReturn and other NSModalResponses with an NSAlert presentation instead

## Declaration

```swift
var NSAlertErrorReturn: Int { get }
```

## See Also

### Constants

- [NSAlertDefaultReturn](nsalertdefaultreturn.md): Deprecated. The user pressed the default button.
- [NSAlertAlternateReturn](nsalertalternatereturn.md): Deprecated. The user pressed the alternate button.
- [NSAlertOtherReturn](nsalertotherreturn.md): Deprecated. The user pressed a second alternate button.

# NSAlertErrorReturn (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 10.10)

The alert cannot identify the reason it was closed; it may have been closed by an external source or by a button other than those listed above.

> Use NSAlertFirstButtonReturn and other NSModalResponses with an NSAlert presentation instead

## Declaration

```objectivec
NSAlertErrorReturn
```

## See Also

### Constants

- [NSAlertDefaultReturn](nsalertdefaultreturn.md): Deprecated. The user pressed the default button.
- [NSAlertAlternateReturn](nsalertalternatereturn.md): Deprecated. The user pressed the alternate button.
- [NSAlertOtherReturn](nsalertotherreturn.md): Deprecated. The user pressed a second alternate button.
