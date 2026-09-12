> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/warninglevel](https://developer.apple.com/documentation/packagedescription/warninglevel)

# WarningLevel

**Framework:** PackageDescription  
**Kind:** Enumeration  
**Availability:** SwiftPM 6.2+

The level at which a compiler warning should be treated.

## Declaration

```swift
enum WarningLevel
```

<a id="overview"></a>

## Overview

This enum is used with the `SwiftSetting.treatAllWarnings(as:_:)` and `SwiftSetting.treatWarning(name:as:_:)` methods to control how warnings are handled during compilation.

## Topics

### Enumeration Cases

- [WarningLevel.error](warninglevel/error.md): Treat as an error.
- [WarningLevel.warning](warninglevel/warning.md): Treat as a warning.

## Relationships

### Conforms To

- [Copyable](../swift/copyable.md)
- [Equatable](../swift/equatable.md)
- [Escapable](../swift/escapable.md)
- [Hashable](../swift/hashable.md)
- [RawRepresentable](../swift/rawrepresentable.md)
