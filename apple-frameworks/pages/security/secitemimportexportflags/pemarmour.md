> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemimportexportflags/pemarmour](https://developer.apple.com/documentation/security/secitemimportexportflags/pemarmour)

# pemArmour (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** macOS 10.0+

A flag that indicates the exported data should have PEM armor.

## Declaration

```swift
static var pemArmour: SecItemImportExportFlags { get }
```

<a id="Discussion"></a>

## Discussion

PEM armor refers to a way of expressing binary data as an ASCII string so that it can be transferred over text-only channels such as email. (PEM stands for an Internet standard, Privacy Enhanced Mail.)

# kSecItemPemArmour (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

A flag that indicates the exported data should have PEM armor.

## Declaration

```objectivec
kSecItemPemArmour
```

<a id="Discussion"></a>

## Discussion

PEM armor refers to a way of expressing binary data as an ASCII string so that it can be transferred over text-only channels such as email. (PEM stands for an Internet standard, Privacy Enhanced Mail.)
