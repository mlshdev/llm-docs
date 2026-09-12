> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/kgssicapplesourceappaudittoken](https://developer.apple.com/documentation/gss/kgssicapplesourceappaudittoken)

# kGSSICAppleSourceAppAuditToken (Swift)

**Framework:** GSS  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The audit token of the app’s process.

## Declaration

```swift
var kGSSICAppleSourceAppAuditToken: String { get }
```

<a id="Discussion"></a>

## Discussion

The value is an `audit_token_t` value wrapped in a `CFDataRef`.

## See Also

### Apple Source App Keys

- [kGSSICAppleSourceAppPID](kgssicapplesourceapppid.md): A number that indicates the process ID of the app.
- [kGSSICAppleSourceAppSigningIdentity](kgssicapplesourceappsigningidentity.md): The bundle signing identity of the app.

# kGSSICAppleSourceAppAuditToken (Objective-C)

**Framework:** GSS  
**Kind:** Macro  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The audit token of the app’s process.

## Declaration

```objectivec
#define kGSSICAppleSourceAppAuditToken
```

<a id="Discussion"></a>

## Discussion

The value is an `audit_token_t` value wrapped in a `CFDataRef`.

## See Also

### Apple Source App Keys

- [kGSSICAppleSourceAppPID](kgssicapplesourceapppid.md): A number that indicates the process ID of the app.
- [kGSSICAppleSourceAppSigningIdentity](kgssicapplesourceappsigningidentity.md): The bundle signing identity of the app.
