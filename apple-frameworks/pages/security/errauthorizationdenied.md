> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/errauthorizationdenied](https://developer.apple.com/documentation/security/errauthorizationdenied)

# errAuthorizationDenied (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The Security Server denied authorization for one or more requested rights.

## Declaration

```swift
var errAuthorizationDenied: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

This error is also returned if there was no definition found in the policy database, or a definition could not be created.

# errAuthorizationDenied (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The Security Server denied authorization for one or more requested rights.

## Declaration

```objectivec
errAuthorizationDenied
```

<a id="Discussion"></a>

## Discussion

This error is also returned if there was no definition found in the policy database, or a definition could not be created.
