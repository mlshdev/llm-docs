> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagerscope/persistent](https://developer.apple.com/documentation/coretext/ctfontmanagerscope/persistent)

# CTFontManagerScope.persistent (Swift)

**Framework:** Core Text  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.

## Declaration

```swift
case persistent
```

## See Also

### Constants

- [CTFontManagerScope.none](none.md): No scope is defined.
- [CTFontManagerScope.process](process.md): The font is available to the current process for the duration of the process unless directly unregistered.
- [CTFontManagerScope.session](session.md): The font is available to the current user session but won’t be available in subsequent sessions.
- [user](user.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.

# kCTFontManagerScopePersistent (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.

## Declaration

```objectivec
kCTFontManagerScopePersistent
```

## See Also

### Constants

- [kCTFontManagerScopeNone](none.md): No scope is defined.
- [kCTFontManagerScopeProcess](process.md): The font is available to the current process for the duration of the process unless directly unregistered.
- [kCTFontManagerScopeSession](session.md): The font is available to the current user session but won’t be available in subsequent sessions.
- [kCTFontManagerScopeUser](user.md): The font is available to all processes for the current user session and will be available in subsequent sessions unless unregistered.
