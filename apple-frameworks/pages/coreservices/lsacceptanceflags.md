> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lsacceptanceflags](https://developer.apple.com/documentation/coreservices/lsacceptanceflags)

# LSAcceptanceFlags (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The specification that determines whether an app can accept (open) an item.

## Declaration

```swift
struct LSAcceptanceFlags
```

<a id="overview"></a>

## Overview

These flags are passed to the functions `LSCanRefAcceptItem` and `LSCanURLAcceptURL`.

## Topics

### Creating Acceptance Flags

- [init(rawValue:)](lsacceptanceflags/1443753-init.md): Creates a new acceptance flag from the given raw value.

### Constants

- [acceptDefault](lsacceptanceflags/1447965-acceptdefault.md): Requests the default behavior that does not require the user interface to log in be presented.
- [acceptAllowLoginUI](lsacceptanceflags/1443098-acceptallowloginui.md): Requests that the user interface to log in be presented.

## Relationships

### Conforms To

- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# LSAcceptanceFlags (Objective-C)

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The specification that determines whether an app can accept (open) an item.

## Declaration

```objectivec
typedef enum LSAcceptanceFlags : OptionBits {
    ...
} LSAcceptanceFlags;
```

<a id="overview"></a>

## Overview

These flags are passed to the functions `LSCanRefAcceptItem` and `LSCanURLAcceptURL`.

## Topics

### Constants

- [kLSAcceptDefault](lsacceptanceflags/klsacceptdefault.md): Requests the default behavior that does not require the user interface to log in be presented.
- [kLSAcceptAllowLoginUI](lsacceptanceflags/klsacceptallowloginui.md): Requests that the user interface to log in be presented.
