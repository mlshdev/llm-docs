> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagerscope/process](https://developer.apple.com/documentation/coretext/ctfontmanagerscope/process)

# CTFontManagerScope.process (Swift)

**Framework:** Core Text  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The font is available to the current process for the duration of the process unless directly unregistered.

## Declaration

```swift
case process
```

## See Also

### Constants

- [CTFontManagerScope.none](none.md): No scope is defined.
- [CTFontManagerScope.persistent](persistent.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.
- [CTFontManagerScope.session](session.md): The font is available to the current user session but won’t be available in subsequent sessions.
- [user](user.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.

# kCTFontManagerScopeProcess (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The font is available to the current process for the duration of the process unless directly unregistered.

## Declaration

```objectivec
kCTFontManagerScopeProcess
```

## See Also

### Constants

- [kCTFontManagerScopeNone](none.md): No scope is defined.
- [kCTFontManagerScopePersistent](persistent.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.
- [kCTFontManagerScopeSession](session.md): The font is available to the current user session but won’t be available in subsequent sessions.
- [kCTFontManagerScopeUser](user.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.
