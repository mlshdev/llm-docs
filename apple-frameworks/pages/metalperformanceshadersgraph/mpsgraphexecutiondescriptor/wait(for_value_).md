> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutiondescriptor/wait(for:value:)

# wait(for:value:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Executable waits on these shared events before scheduling execution on the HW, this does not include encoding which can still continue.

## Declaration

```swift
func wait(for event: any MTLSharedEvent, value: UInt64)
```

## Parameters

- `event`: Shared event graph waits on.
- `value`: Value of shared event graph waits on.

# waitForEvent:value: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Executable waits on these shared events before scheduling execution on the HW, this does not include encoding which can still continue.

## Declaration

```objectivec
- (void) waitForEvent:(id<MTLSharedEvent>) event value:(uint64_t) value;
```

## Parameters

- `event`: Shared event graph waits on.
- `value`: Value of shared event graph waits on.
