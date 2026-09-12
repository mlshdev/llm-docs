> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_start_result_will_mark_ready](https://developer.apple.com/documentation/network/nw_framer_start_result_will_mark_ready)

# nw_framer_start_result_will_mark_ready (Swift)

**Framework:** Network  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The protocol will perform a handshake, preventing the overall connection from becoming ready until [nw_framer_mark_ready(\_:)](nw_framer_mark_ready%28__%29.md) is called.

## Declaration

```swift
var nw_framer_start_result_will_mark_ready: nw_framer_start_result_t { get }
```

## See Also

### Start Results

- [nw_framer_start_result_ready](nw_framer_start_result_ready.md): The protocol is immediately ready to send and receive data.

# nw_framer_start_result_will_mark_ready (Objective-C)

**Framework:** Network  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The protocol will perform a handshake, preventing the overall connection from becoming ready until [nw_framer_mark_ready](nw_framer_mark_ready%28__%29.md) is called.

## Declaration

```objectivec
nw_framer_start_result_will_mark_ready
```

## See Also

### Start Results

- [nw_framer_start_result_ready](nw_framer_start_result_ready.md): The protocol is immediately ready to send and receive data.
