> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecrevocationrequirepositiveresponse](https://developer.apple.com/documentation/security/ksecrevocationrequirepositiveresponse)

# kSecRevocationRequirePositiveResponse (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Require a positive response to pass the policy.

## Declaration

```swift
var kSecRevocationRequirePositiveResponse: CFOptionFlags { get }
```

<a id="Discussion"></a>

## Discussion

If the flag is not set, revocation checking is done on a “best attempt” basis, where failure to reach the server is not considered fatal.

# kSecRevocationRequirePositiveResponse (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Require a positive response to pass the policy.

## Declaration

```objectivec
kSecRevocationRequirePositiveResponse
```

<a id="Discussion"></a>

## Discussion

If the flag is not set, revocation checking is done on a “best attempt” basis, where failure to reach the server is not considered fatal.
