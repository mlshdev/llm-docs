> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgconfigureoption/forapponly

# forAppOnly (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

Changes persist for the lifetime of the current application. After the application terminates, the display configuration settings revert to the current login session.

## Declaration

```swift
static var forAppOnly: CGConfigureOption { get }
```

## See Also

### Type Properties

- [forSession](forsession.md): Changes persist for the lifetime of the current login session. After the current session terminates, the displays revert to the last saved permanent configuration.
- [permanently](permanently.md)

# kCGConfigureForAppOnly (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

Changes persist for the lifetime of the current application. After the application terminates, the display configuration settings revert to the current login session.

## Declaration

```objectivec
kCGConfigureForAppOnly
```

## See Also

### Type Properties

- [kCGConfigureForSession](forsession.md): Changes persist for the lifetime of the current login session. After the current session terminates, the displays revert to the last saved permanent configuration.
- [kCGConfigurePermanently](permanently.md)
