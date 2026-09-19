> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sec_identity_access_certificates(_:_:)

# sec_identity_access_certificates(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func sec_identity_access_certificates(_ identity: sec_identity_t, _ handler: @escaping (sec_certificate_t) -> Void) -> Bool
```

## Parameters

- `identity`: A `sec_identity_t` instance.
- `handler`: A block to invoke one or more times with `sec_certificate_t` instances.

<a id="return-value"></a>

## Return Value

Returns true if the peer certificates were accessible, false otherwise.

<a id="discussion"></a>

## Discussion

Access the certificates associated with the `sec_identity_t` instance.

# sec_identity_access_certificates (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
bool sec_identity_access_certificates(sec_identity_t identity, void (^handler)(sec_certificate_t certificate));
```

## Parameters

- `identity`: A `sec_identity_t` instance.
- `handler`: A block to invoke one or more times with `sec_certificate_t` instances.

<a id="return-value"></a>

## Return Value

Returns true if the peer certificates were accessible, false otherwise.

<a id="discussion"></a>

## Discussion

Access the certificates associated with the `sec_identity_t` instance.
