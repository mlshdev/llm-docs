> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemimportexportflags](https://developer.apple.com/documentation/security/secitemimportexportflags)

# SecItemImportExportFlags (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

The import and export function flags.

## Declaration

```swift
struct SecItemImportExportFlags
```

<a id="overview"></a>

## Overview

Use an instance of this structure a the flags input to the [SecItemImport(\_:\_:\_:\_:\_:\_:\_:\_:)](secitemimport%28________________%29.md) and [SecItemExport(\_:\_:\_:\_:\_:)](secitemexport%28__________%29.md) functions.

## Topics

### Initializers

- [init(rawValue:)](secitemimportexportflags/init%28rawvalue_%29.md): Initialize an item import/export flag structure.

### Constants

- [pemArmour](secitemimportexportflags/pemarmour.md): A flag that indicates the exported data should have PEM armor.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SecItemImportExportFlags (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The import and export function flags.

## Declaration

```objectivec
enum SecItemImportExportFlags : uint32_t;
```

<a id="overview"></a>

## Overview

Use an instance of this structure a the flags input to the [SecItemImport](secitemimport%28________________%29.md) and [SecItemExport](secitemexport%28__________%29.md) functions.

## Topics

### Constants

- [kSecItemPemArmour](secitemimportexportflags/pemarmour.md): A flag that indicates the exported data should have PEM armor.
