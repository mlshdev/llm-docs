> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicycreatebasicx509()](https://developer.apple.com/documentation/security/secpolicycreatebasicx509())

# SecPolicyCreateBasicX509() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a policy object for the default X.509 policy.

## Declaration

```swift
func SecPolicyCreateBasicX509() -> SecPolicy
```

<a id="return-value"></a>

## Return Value

The policy object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release the object when you are finished with it.

## Mentioned In

- [Creating a Trust Object](creating-a-trust-object.md)

# SecPolicyCreateBasicX509 (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a policy object for the default X.509 policy.

## Declaration

```objectivec
SecPolicyRefSecPolicyCreateBasicX509();
```

<a id="return-value"></a>

## Return Value

The policy object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release the object when you are finished with it.

## Mentioned In

- [Creating a Trust Object](creating-a-trust-object.md)
