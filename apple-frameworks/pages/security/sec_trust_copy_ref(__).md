> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_trust_copy_ref(_:)](https://developer.apple.com/documentation/security/sec_trust_copy_ref(_:))

# sec_trust_copy_ref(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_trust_copy_ref(_ trust: sec_trust_t) -> Unmanaged<SecTrust>
```

## Parameters

- `trust`: A `sec_trust_t` instance.

<a id="return-value"></a>

## Return Value

The underlying `SecTrustRef` instance.

<a id="discussion"></a>

## Discussion

Copy a retained reference to the underlying `SecTrustRef` instance.

# sec_trust_copy_ref (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
SecTrustRefsec_trust_copy_ref(sec_trust_t trust);
```

## Parameters

- `trust`: A `sec_trust_t` instance.

<a id="return-value"></a>

## Return Value

The underlying `SecTrustRef` instance.

<a id="discussion"></a>

## Discussion

Copy a retained reference to the underlying `SecTrustRef` instance.
