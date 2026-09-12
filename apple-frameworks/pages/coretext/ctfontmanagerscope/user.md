> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagerscope/user](https://developer.apple.com/documentation/coretext/ctfontmanagerscope/user)

# user (Swift)

**Framework:** Core Text  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.

## Declaration

```swift
static var user: CTFontManagerScope { get }
```

## See Also

### Constants

- [CTFontManagerScope.none](none.md): No scope is defined.
- [CTFontManagerScope.process](process.md): The font is available to the current process for the duration of the process unless directly unregistered.
- [CTFontManagerScope.persistent](persistent.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.
- [CTFontManagerScope.session](session.md): The font is available to the current user session but won’t be available in subsequent sessions.

# kCTFontManagerScopeUser (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.

## Declaration

```objectivec
kCTFontManagerScopeUser
```

## See Also

### Constants

- [kCTFontManagerScopeNone](none.md): No scope is defined.
- [kCTFontManagerScopeProcess](process.md): The font is available to the current process for the duration of the process unless directly unregistered.
- [kCTFontManagerScopePersistent](persistent.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.
- [kCTFontManagerScopeSession](session.md): The font is available to the current user session but won’t be available in subsequent sessions.
