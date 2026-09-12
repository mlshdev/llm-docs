> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagerscope/session](https://developer.apple.com/documentation/coretext/ctfontmanagerscope/session)

# CTFontManagerScope.session (Swift)

**Framework:** Core Text  
**Kind:** Case  
**Availability:** macOS 10.6+

The font is available to the current user session but won’t be available in subsequent sessions.

## Declaration

```swift
case session
```

## See Also

### Constants

- [CTFontManagerScope.none](none.md): No scope is defined.
- [CTFontManagerScope.process](process.md): The font is available to the current process for the duration of the process unless directly unregistered.
- [CTFontManagerScope.persistent](persistent.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.
- [user](user.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.

# kCTFontManagerScopeSession (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

The font is available to the current user session but won’t be available in subsequent sessions.

## Declaration

```objectivec
kCTFontManagerScopeSession
```

## See Also

### Constants

- [kCTFontManagerScopeNone](none.md): No scope is defined.
- [kCTFontManagerScopeProcess](process.md): The font is available to the current process for the duration of the process unless directly unregistered.
- [kCTFontManagerScopePersistent](persistent.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.
- [kCTFontManagerScopeUser](user.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.
