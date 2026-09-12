> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgconfigureoption/forsession](https://developer.apple.com/documentation/coregraphics/cgconfigureoption/forsession)

# forSession (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

Changes persist for the lifetime of the current login session. After the current session terminates, the displays revert to the last saved permanent configuration.

## Declaration

```swift
static var forSession: CGConfigureOption { get }
```

## See Also

### Type Properties

- [forAppOnly](forapponly.md): Changes persist for the lifetime of the current application. After the application terminates, the display configuration settings revert to the current login session.
- [permanently](permanently.md)

# kCGConfigureForSession (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

Changes persist for the lifetime of the current login session. After the current session terminates, the displays revert to the last saved permanent configuration.

## Declaration

```objectivec
kCGConfigureForSession
```

## See Also

### Type Properties

- [kCGConfigureForAppOnly](forapponly.md): Changes persist for the lifetime of the current application. After the application terminates, the display configuration settings revert to the current login session.
- [kCGConfigurePermanently](permanently.md)
