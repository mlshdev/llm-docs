> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sec_protocol_key_update_complete_t

# sec_protocol_key_update_complete_t (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
typealias sec_protocol_key_update_complete_t = () -> Void
```

<a id="discussion"></a>

## Discussion

Block to be invoked when a key update event is handled.

# sec_protocol_key_update_complete_t (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
typedef void (^)(void) sec_protocol_key_update_complete_t;
```

<a id="discussion"></a>

## Discussion

Block to be invoked when a key update event is handled.
