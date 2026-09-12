> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicycreatewithproperties(_:_:)](https://developer.apple.com/documentation/security/secpolicycreatewithproperties(_:_:))

# SecPolicyCreateWithProperties(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a policy object based on an object identifier for the policy type.

## Declaration

```swift
func SecPolicyCreateWithProperties(_ policyIdentifier: CFTypeRef, _ properties: CFDictionary?) -> SecPolicy?
```

## Parameters

- `policyIdentifier`: The identifier for the desired policy type.
- `properties`: A properties dictionary. See [Security Policy Keys](security-policy-keys.md) for a list of valid property names to use as keys in this dictionary.

<a id="return-value"></a>

## Return Value

A new policy, or `NULL` if the policy could not be created.

## Mentioned In

- [Creating a Trust Object](creating-a-trust-object.md)

# SecPolicyCreateWithProperties (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a policy object based on an object identifier for the policy type.

## Declaration

```objectivec
SecPolicyRefSecPolicyCreateWithProperties(CFTypeRef policyIdentifier, CFDictionaryRef properties);
```

## Parameters

- `policyIdentifier`: The identifier for the desired policy type.
- `properties`: A properties dictionary. See [Security Policy Keys](security-policy-keys.md) for a list of valid property names to use as keys in this dictionary.

<a id="return-value"></a>

## Return Value

A new policy, or `NULL` if the policy could not be created.

## Mentioned In

- [Creating a Trust Object](creating-a-trust-object.md)
