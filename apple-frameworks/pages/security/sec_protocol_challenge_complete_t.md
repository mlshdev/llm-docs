> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_challenge_complete_t](https://developer.apple.com/documentation/security/sec_protocol_challenge_complete_t)

# sec_protocol_challenge_complete_t (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
typealias sec_protocol_challenge_complete_t = (sec_identity_t?) -> Void
```

## Parameters

- `identity`: A `sec_identity_t` containing the identity to use for this challenge.

<a id="discussion"></a>

## Discussion

Block to be invoked when an identity (authentication) challenge is complete.

```
 Note: prior to macOS 10.15, iOS 13.0, watchOS 6.0, and tvOS 13.0, calling this
 block with a NULL `identity` argument was prohibited.
```

# sec_protocol_challenge_complete_t (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
typedef void (^)(NSObject<OS_sec_identity> *) sec_protocol_challenge_complete_t;
```

## Parameters

- `identity`: A `sec_identity_t` containing the identity to use for this challenge.

<a id="discussion"></a>

## Discussion

Block to be invoked when an identity (authentication) challenge is complete.

```
 Note: prior to macOS 10.15, iOS 13.0, watchOS 6.0, and tvOS 13.0, calling this
 block with a NULL `identity` argument was prohibited.
```
