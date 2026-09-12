> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_verify_complete_t](https://developer.apple.com/documentation/security/sec_protocol_verify_complete_t)

# sec_protocol_verify_complete_t (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
typealias sec_protocol_verify_complete_t = (Bool) -> Void
```

## Parameters

- `result`: A `bool` indicating if verification succeeded or failed.

<a id="discussion"></a>

## Discussion

Block to be invoked when verification is complete.

# sec_protocol_verify_complete_t (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
typedef void (^)(_Bool) sec_protocol_verify_complete_t;
```

## Parameters

- `result`: A `bool` indicating if verification succeeded or failed.

<a id="discussion"></a>

## Discussion

Block to be invoked when verification is complete.
