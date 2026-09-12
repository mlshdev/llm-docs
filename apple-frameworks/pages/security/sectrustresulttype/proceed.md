> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustresulttype/proceed](https://developer.apple.com/documentation/security/sectrustresulttype/proceed)

# SecTrustResultType.proceed (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user granted permission to trust the certificate for the purposes designated in the specified policies.

## Declaration

```swift
case proceed
```

<a id="Discussion"></a>

## Discussion

This value indicates that the user explicitly chose to trust a certificate in the chain, usually by clicking a button in a certificate trust panel. Your app should trust the chain. The Keychain Access utility refers to this value as “Always Trust.”

# kSecTrustResultProceed (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user granted permission to trust the certificate for the purposes designated in the specified policies.

## Declaration

```objectivec
kSecTrustResultProceed
```

<a id="Discussion"></a>

## Discussion

This value indicates that the user explicitly chose to trust a certificate in the chain, usually by clicking a button in a certificate trust panel. Your app should trust the chain. The Keychain Access utility refers to this value as “Always Trust.”
