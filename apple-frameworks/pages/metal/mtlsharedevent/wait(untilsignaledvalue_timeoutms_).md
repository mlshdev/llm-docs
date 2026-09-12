> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsharedevent/wait(untilsignaledvalue:timeoutms:)](https://developer.apple.com/documentation/metal/mtlsharedevent/wait(untilsignaledvalue:timeoutms:))

# wait(untilSignaledValue:timeoutMS:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

## Declaration

```swift
func wait(untilSignaledValue value: UInt64, timeoutMS milliseconds: UInt64) -> Bool
```

# waitUntilSignaledValue:timeoutMS: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

## Declaration

```objectivec
- (BOOL) waitUntilSignaledValue:(uint64_t) value timeoutMS:(uint64_t) milliseconds;
```
