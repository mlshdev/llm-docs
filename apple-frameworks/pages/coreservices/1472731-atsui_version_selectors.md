> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472731-atsui_version_selectors](https://developer.apple.com/documentation/coreservices/1472731-atsui_version_selectors)

# ATSUI Version Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify version information for Apple Type Service for Unicode Imaging.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltATSUVersion](1472731-atsui_version_selectors/gestaltatsuversion.md): Specifies the version of ATSUI installed on the user’s system. You pass this selector to the `Gestalt` function. On return, the `Gestalt` function passes back a value that represents the version of ATSUI installed on the user’s system.
- [gestaltOriginalATSUVersion](1472731-atsui_version_selectors/gestaltoriginalatsuversion.md): Indicates that version 1.0 of ATSUI is installed on the user’s system.
- [gestaltATSUUpdate1](1472731-atsui_version_selectors/gestaltatsuupdate1.md): Indicates that version 1.1 of ATSUI is installed on the user’s system.
- [gestaltATSUUpdate2](1472731-atsui_version_selectors/gestaltatsuupdate2.md): Indicates that version 1.2 of ATSUI is installed on the user’s system.
- [gestaltATSUUpdate3](1472731-atsui_version_selectors/gestaltatsuupdate3.md): Indicates that version 2.0 of ATSUI is installed on the user’s system.
- [gestaltATSUUpdate4](1472731-atsui_version_selectors/gestaltatsuupdate4.md): Indicates that ATSUI for a version of macOS from 10.0.1 through 10.0.4 is installed on the user’s system.
- [gestaltATSUUpdate5](1472731-atsui_version_selectors/gestaltatsuupdate5.md): Indicates that version 2.3 of ATSUI is installed on the user’s system. Available beginning with ATSUI 2.3, in OS X version 10.1.
- [gestaltATSUUpdate6](1472731-atsui_version_selectors/gestaltatsuupdate6.md): Indicates that version 2.4 of ATSUI is installed on the user’s system. Available beginning with ATSUI 2.4, in OS X version 10.2.
- [gestaltATSUUpdate7](1472731-atsui_version_selectors/gestaltatsuupdate7.md): Indicates that version 2.5 of ATSUI is installed on the user’s system. Available beginning with ATSUI 2.5, in OS X version 10.3.
