> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sectrustresulttype/deny

# SecTrustResultType.deny (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user specified that the certificate should not be trusted.

## Declaration

```swift
case deny
```

<a id="Discussion"></a>

## Discussion

This value indicates that the user explicitly chose to not trust a certificate in the chain, usually by clicking the appropriate button in a certificate trust panel. Your app should *not* trust the chain. The Keychain Access utility refers to this value as “Never Trust.”

# kSecTrustResultDeny (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user specified that the certificate should not be trusted.

## Declaration

```objectivec
kSecTrustResultDeny
```

<a id="Discussion"></a>

## Discussion

This value indicates that the user explicitly chose to not trust a certificate in the chain, usually by clicking the appropriate button in a certificate trust panel. Your app should *not* trust the chain. The Keychain Access utility refers to this value as “Never Trust.”
