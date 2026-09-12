> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/fillbuffer:range:value:](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/fillbuffer:range:value:)

# fillBuffer:range:value:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a command that fills a buffer with a constant value for each byte.

## Declaration

```objectivec
- (void) fillBuffer:(id<MTLBuffer>) buffer range:(NSRange) range value:(uint8_t) value;
```

## Parameters

- `buffer`: A buffer instance the command assigns each byte in `range` to `value`.
- `range`: A range of bytes within the `buffer` the command assigns `value` to. The range’s [count](https://developer.apple.com/documentation/swift/collection/count) property needs to be greater than `0`. The range’s [count](https://developer.apple.com/documentation/swift/collection/count), [lowerBound](https://developer.apple.com/documentation/swift/range/lowerbound), and [upperBound](https://developer.apple.com/documentation/swift/range/upperbound) properties need to be a multiple of `4` in macOS, but can be any value in iOS and tvOS.
- `value`: The value to write to each byte.

## Default Implementations

### MTLBlitCommandEncoder Implementations

- [fill(buffer:range:value:)](fill%28buffer_range_value_%29.md): Encodes a command that fills a buffer with a constant value for each byte.
