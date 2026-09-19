> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sec_identity_copy_ref(_:)

# sec_identity_copy_ref(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_identity_copy_ref(_ identity: sec_identity_t) -> Unmanaged<SecIdentity>?
```

## Parameters

- `identity`: A `sec_identity_t` instance.

<a id="return-value"></a>

## Return Value

The underlying `SecIdentityRef` instance.

<a id="discussion"></a>

## Discussion

Copy a retained reference to the underlying `SecIdentityRef` instance.

# sec_identity_copy_ref (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
SecIdentityRefsec_identity_copy_ref(sec_identity_t identity);
```

## Parameters

- `identity`: A `sec_identity_t` instance.

<a id="return-value"></a>

## Return Value

The underlying `SecIdentityRef` instance.

<a id="discussion"></a>

## Discussion

Copy a retained reference to the underlying `SecIdentityRef` instance.
