> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagement/readattributeoptoutstate(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagement/readattributeoptoutstate(completion:))

# readAttributeOptOutState(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeOptOutState(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeOptOutState() async throws -> NSNumber
```

# readAttributeOptOutStateWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeOptOutStateWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
