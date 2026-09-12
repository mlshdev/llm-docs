> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_challenge_t](https://developer.apple.com/documentation/security/sec_protocol_challenge_t)

# sec_protocol_challenge_t (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
typealias sec_protocol_challenge_t = (sec_protocol_metadata_t, @escaping sec_protocol_challenge_complete_t) -> Void
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `complete`: A `sec_protocol_challenge_complete_t` to be invoked when the challenge is complete.

<a id="discussion"></a>

## Discussion

Block to be invoked when the protocol instance is issued a challenge (e.g., a TLS certificate request).

# sec_protocol_challenge_t (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
typedef void (^)(NSObject<OS_sec_protocol_metadata> *, void (^)(NSObject<OS_sec_identity> *)) sec_protocol_challenge_t;
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `complete`: A `sec_protocol_challenge_complete_t` to be invoked when the challenge is complete.

<a id="discussion"></a>

## Discussion

Block to be invoked when the protocol instance is issued a challenge (e.g., a TLS certificate request).
