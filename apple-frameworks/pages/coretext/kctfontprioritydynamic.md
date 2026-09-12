> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctfontprioritydynamic](https://developer.apple.com/documentation/coretext/kctfontprioritydynamic)

# kCTFontPriorityDynamic (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Priority of fonts registered dynamically, not located in a standard location.

## Declaration

```swift
var kCTFontPriorityDynamic: Int { get }
```

<a id="Discussion"></a>

## Discussion

Dynamic fonts are either in [user](ctfontmanagerscope/user.md) or [CTFontManagerScope.session](ctfontmanagerscope/session.md).

## See Also

### Font Priority

- [kCTFontPrioritySystem](kctfontprioritysystem.md): Priority of system fonts.
- [kCTFontPriorityNetwork](kctfontprioritynetwork.md): Priority of network fonts.
- [kCTFontPriorityComputer](kctfontprioritycomputer.md): Priority of computer local fonts.
- [kCTFontPriorityUser](kctfontpriorityuser.md): Priority of local fonts.
- [kCTFontPriorityProcess](kctfontpriorityprocess.md): Priority of fonts registered for the process.

# kCTFontPriorityDynamic (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Priority of fonts registered dynamically, not located in a standard location.

## Declaration

```objectivec
kCTFontPriorityDynamic
```

<a id="Discussion"></a>

## Discussion

Dynamic fonts are either in [kCTFontManagerScopeUser](ctfontmanagerscope/user.md) or [kCTFontManagerScopeSession](ctfontmanagerscope/session.md).

## See Also

### Font Priority

- [kCTFontPrioritySystem](kctfontprioritysystem.md): Priority of system fonts.
- [kCTFontPriorityNetwork](kctfontprioritynetwork.md): Priority of network fonts.
- [kCTFontPriorityComputer](kctfontprioritycomputer.md): Priority of computer local fonts.
- [kCTFontPriorityUser](kctfontpriorityuser.md): Priority of local fonts.
- [kCTFontPriorityProcess](kctfontpriorityprocess.md): Priority of fonts registered for the process.
