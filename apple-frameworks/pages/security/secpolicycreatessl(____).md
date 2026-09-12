> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicycreatessl(_:_:)](https://developer.apple.com/documentation/security/secpolicycreatessl(_:_:))

# SecPolicyCreateSSL(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a policy object for evaluating SSL certificate chains.

## Declaration

```swift
func SecPolicyCreateSSL(_ server: Bool, _ hostname: CFString?) -> SecPolicy
```

## Parameters

- `server`: Specify `true` on the client side to return a policy for SSL server certificates.
- `hostname`: If you specify a value for this parameter, the policy will require the specified value to match the host name in the leaf certificate.

<a id="return-value"></a>

## Return Value

The policy object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release the object when you are finished with it.

## Mentioned In

- [Creating a Trust Object](creating-a-trust-object.md)

# SecPolicyCreateSSL (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a policy object for evaluating SSL certificate chains.

## Declaration

```objectivec
SecPolicyRefSecPolicyCreateSSL(Boolean server, CFStringRef hostname);
```

## Parameters

- `server`: Specify `true` on the client side to return a policy for SSL server certificates.
- `hostname`: If you specify a value for this parameter, the policy will require the specified value to match the host name in the leaf certificate.

<a id="return-value"></a>

## Return Value

The policy object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release the object when you are finished with it.

## Mentioned In

- [Creating a Trust Object](creating-a-trust-object.md)
