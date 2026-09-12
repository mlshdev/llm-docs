> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterbasicinformation/readattributelocalconfigdisabled(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterbasicinformation/readattributelocalconfigdisabled(completion:))

# readAttributeLocalConfigDisabled(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeLocalConfigDisabled(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeLocalConfigDisabled() async throws -> NSNumber
```

# readAttributeLocalConfigDisabledWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeLocalConfigDisabledWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
