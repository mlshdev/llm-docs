> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472747-textedit_version_selectors](https://developer.apple.com/documentation/coreservices/1472747-textedit_version_selectors)

# TextEdit Version Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify version information for TextEdit.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltTextEditVersion](1472747-textedit_version_selectors/gestalttexteditversion.md): The `Gestalt` selector you pass to determine what version of TextEdit is present.
- [gestaltTE1](1472747-textedit_version_selectors/gestaltte1.md): The version of TextEdit found in Mac IIci ROM.
- [gestaltTE2](1472747-textedit_version_selectors/gestaltte2.md): The version of TextEdit shipped with 6.0.4 Script Systems on Mac IIci (Script bug fixes for Mac IIci).
- [gestaltTE3](1472747-textedit_version_selectors/gestaltte3.md): The version of TextEdit shipped with 6.0.4 Script Systems (all but Mac IIci).
- [gestaltTE4](1472747-textedit_version_selectors/gestaltte4.md): The version of TextEdit shipped in System 7.0.
- [gestaltTE5](1472747-textedit_version_selectors/gestaltte5.md): `TextWidthHook` is available in TextEdit.
