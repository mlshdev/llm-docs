> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgconfigureoption/permanently](https://developer.apple.com/documentation/coregraphics/cgconfigureoption/permanently)

# permanently (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
static var permanently: CGConfigureOption { get }
```

<a id="Discussion"></a>

## Discussion

Changes persist in future login sessions by the same user. If the requested changes cannot be supported by the Aqua UI (resolution and pixel depth constraints apply), the settings for the current login session are used instead, and any changes have session scope.

## See Also

### Type Properties

- [forAppOnly](forapponly.md): Changes persist for the lifetime of the current application. After the application terminates, the display configuration settings revert to the current login session.
- [forSession](forsession.md): Changes persist for the lifetime of the current login session. After the current session terminates, the displays revert to the last saved permanent configuration.

# kCGConfigurePermanently (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGConfigurePermanently
```

<a id="Discussion"></a>

## Discussion

Changes persist in future login sessions by the same user. If the requested changes cannot be supported by the Aqua UI (resolution and pixel depth constraints apply), the settings for the current login session are used instead, and any changes have session scope.

## See Also

### Type Properties

- [kCGConfigureForAppOnly](forapponly.md): Changes persist for the lifetime of the current application. After the application terminates, the display configuration settings revert to the current login session.
- [kCGConfigureForSession](forsession.md): Changes persist for the lifetime of the current login session. After the current session terminates, the displays revert to the last saved permanent configuration.
