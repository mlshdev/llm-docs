> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwindowcovering/readattributecurrentpositiontilt(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterwindowcovering/readattributecurrentpositiontilt(completion:))

# readAttributeCurrentPositionTilt(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeCurrentPositionTilt(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeCurrentPositionTilt() async throws -> NSNumber
```

# readAttributeCurrentPositionTiltWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeCurrentPositionTiltWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
