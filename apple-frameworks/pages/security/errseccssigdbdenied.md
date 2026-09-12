> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/errseccssigdbdenied](https://developer.apple.com/documentation/security/errseccssigdbdenied)

# errSecCSSigDBDenied (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Access to signature database denied.

## Declaration

```swift
var errSecCSSigDBDenied: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

This error is returned when the system is attempting to sign unsigned code ad-hoc and couldn’t write to the signature database because of a permission problem.

# errSecCSSigDBDenied (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Access to signature database denied.

## Declaration

```objectivec
errSecCSSigDBDenied
```

<a id="Discussion"></a>

## Discussion

This error is returned when the system is attempting to sign unsigned code ad-hoc and couldn’t write to the signature database because of a permission problem.
