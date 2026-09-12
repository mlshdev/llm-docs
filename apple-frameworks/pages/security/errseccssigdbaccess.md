> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/errseccssigdbaccess](https://developer.apple.com/documentation/security/errseccssigdbaccess)

# errSecCSSigDBAccess (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Can’t access signature database.

## Declaration

```swift
var errSecCSSigDBAccess: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

This error is returned when the system is attempting to sign unsigned code ad-hoc and couldn’t write to the signature database because of some problem other than a permission problem. For example, the signature database might be missing or corrupted.

# errSecCSSigDBAccess (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Can’t access signature database.

## Declaration

```objectivec
errSecCSSigDBAccess
```

<a id="Discussion"></a>

## Discussion

This error is returned when the system is attempting to sign unsigned code ad-hoc and couldn’t write to the signature database because of some problem other than a permission problem. For example, the signature database might be missing or corrupted.
