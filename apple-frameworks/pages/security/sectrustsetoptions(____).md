> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sectrustsetoptions(_:_:)

# SecTrustSetOptions(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Sets option flags for customizing evaluation of a trust object.

## Declaration

```swift
func SecTrustSetOptions(_ trustRef: SecTrust, _ options: SecTrustOptionFlags) -> OSStatus
```

## Parameters

- `trustRef`: The trust object to modify.
- `options`: The new set of option flags. For a list of options, see [SecTrustOptionFlags](sectrustoptionflags.md).

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecTrustSetOptions (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Sets option flags for customizing evaluation of a trust object.

## Declaration

```objectivec
OSStatus SecTrustSetOptions(SecTrustRef trustRef, SecTrustOptionFlags options);
```

## Parameters

- `trustRef`: The trust object to modify.
- `options`: The new set of option flags. For a list of options, see [SecTrustOptionFlags](sectrustoptionflags.md).

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
