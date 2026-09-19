> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sec_trust_create(_:)

# sec_trust_create(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_trust_create(_ trust: SecTrust) -> sec_trust_t?
```

## Parameters

- `trust`: A `SecTrustRef` instance.

<a id="return-value"></a>

## Return Value

A `sec_trust_t` instance.

<a id="discussion"></a>

## Discussion

Create an ARC-able `sec_trust_t` instance from a `SecTrustRef`.

# sec_trust_create (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
sec_trust_tsec_trust_create(SecTrustRef trust);
```

## Parameters

- `trust`: A `SecTrustRef` instance.

<a id="return-value"></a>

## Return Value

A `sec_trust_t` instance.

<a id="discussion"></a>

## Discussion

Create an ARC-able `sec_trust_t` instance from a `SecTrustRef`.
