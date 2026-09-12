> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicycopyproperties(_:)](https://developer.apple.com/documentation/security/secpolicycopyproperties(_:))

# SecPolicyCopyProperties(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary containing a policy’s properties.

## Declaration

```swift
func SecPolicyCopyProperties(_ policyRef: SecPolicy) -> CFDictionary?
```

## Parameters

- `policyRef`: The policy from which properties should be copied.

<a id="return-value"></a>

## Return Value

A dictionary with the policy’s properties. See [Security Policy Keys](security-policy-keys.md) for a list of valid keys. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the dictionary’s memory when you are done with it.

# SecPolicyCopyProperties (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary containing a policy’s properties.

## Declaration

```objectivec
CFDictionaryRefSecPolicyCopyProperties(SecPolicyRef policyRef);
```

## Parameters

- `policyRef`: The policy from which properties should be copied.

<a id="return-value"></a>

## Return Value

A dictionary with the policy’s properties. See [Security Policy Keys](security-policy-keys.md) for a list of valid keys. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the dictionary’s memory when you are done with it.
