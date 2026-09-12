> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicycreaterevocation(_:)](https://developer.apple.com/documentation/security/secpolicycreaterevocation(_:))

# SecPolicyCreateRevocation(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a policy object for checking revocation of certificates.

## Declaration

```swift
func SecPolicyCreateRevocation(_ revocationFlags: CFOptionFlags) -> SecPolicy?
```

## Parameters

- `revocationFlags`: Flags that specify revocation checking options. See [Revocation Policy Constants](revocation-policy-constants.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

A policy object or `nil` on failure.

<a id="Discussion"></a>

## Discussion

It’s usually not necessary to create a revocation policy yourself unless you wish to override default system behavior, for example to force a particular method, or to disable revocation checking entirely.

# SecPolicyCreateRevocation (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a policy object for checking revocation of certificates.

## Declaration

```objectivec
SecPolicyRefSecPolicyCreateRevocation(CFOptionFlags revocationFlags);
```

## Parameters

- `revocationFlags`: Flags that specify revocation checking options. See [Revocation Policy Constants](revocation-policy-constants.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

A policy object or `nil` on failure.

<a id="Discussion"></a>

## Discussion

It’s usually not necessary to create a revocation policy yourself unless you wish to override default system behavior, for example to force a particular method, or to disable revocation checking entirely.
