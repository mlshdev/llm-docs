> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccsdonotvalidateresources](https://developer.apple.com/documentation/security/kseccsdonotvalidateresources)

# kSecCSDoNotValidateResources (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Do not validate the presence and contents of all bundle resources (if any).

## Declaration

```swift
var kSecCSDoNotValidateResources: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

By default, a mismatch in any bundle resource causes validation to fail.

# kSecCSDoNotValidateResources (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Do not validate the presence and contents of all bundle resources (if any).

## Declaration

```objectivec
kSecCSDoNotValidateResources
```

<a id="Discussion"></a>

## Discussion

By default, a mismatch in any bundle resource causes validation to fail.
