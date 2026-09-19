> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/kseccsbasicvalidateonly

# kSecCSBasicValidateOnly (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Do not validate either the main executable or the bundle resources, if any.

## Declaration

```swift
var kSecCSBasicValidateOnly: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

This flag is the bitwise OR of the [kSecCSDoNotValidateExecutable](kseccsdonotvalidateexecutable.md) and [kSecCSDoNotValidateResources](kseccsdonotvalidateresources.md) flags.

# kSecCSBasicValidateOnly (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Do not validate either the main executable or the bundle resources, if any.

## Declaration

```objectivec
kSecCSBasicValidateOnly
```

<a id="Discussion"></a>

## Discussion

This flag is the bitwise OR of the [kSecCSDoNotValidateExecutable](kseccsdonotvalidateexecutable.md) and [kSecCSDoNotValidateResources](kseccsdonotvalidateresources.md) flags.
