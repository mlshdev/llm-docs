> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyimportexportflags/noaccesscontrol](https://developer.apple.com/documentation/security/seckeyimportexportflags/noaccesscontrol)

# noAccessControl (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** macOS 10.0+

A flag that indicates imported private keys have no access object attached to them.

## Declaration

```swift
static var noAccessControl: SecKeyImportExportFlags { get }
```

<a id="Discussion"></a>

## Discussion

In the absence of both this bit and the [accessRef](../secitemimportexportkeyparameters/accessref.md) field in the [SecItemImportExportKeyParameters](../secitemimportexportkeyparameters.md) structure, imported private keys receive default access controls.

# kSecKeyNoAccessControl (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

A flag that indicates imported private keys have no access object attached to them.

## Declaration

```objectivec
kSecKeyNoAccessControl
```

<a id="Discussion"></a>

## Discussion

In the absence of both this bit and the [accessRef](../secitemimportexportkeyparameters/accessref.md) field in the [SecItemImportExportKeyParameters](../secitemimportexportkeyparameters.md) structure, imported private keys receive default access controls.
