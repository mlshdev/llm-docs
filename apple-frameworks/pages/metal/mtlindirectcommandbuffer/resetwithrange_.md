> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbuffer/resetwithrange:](https://developer.apple.com/documentation/metal/mtlindirectcommandbuffer/resetwithrange:)

# resetWithRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Resets a range of commands to their default state.

## Declaration

```objectivec
- (void) resetWithRange:(NSRange) range;
```

## Parameters

- `range`: The range of commands to reset. The range needs to fit inside the indirect command buffer’s extents.
