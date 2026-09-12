> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterrvcoperationalstate/readattributeoperationalstatelist(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterrvcoperationalstate/readattributeoperationalstatelist(completion:))

# readAttributeOperationalStateList(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
func readAttributeOperationalStateList(completion: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeOperationalStateList() async throws -> [Any]
```

# readAttributeOperationalStateListWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
- (void) readAttributeOperationalStateListWithCompletion:(void (^)(NSArray *value, NSError *error)) completion;
```
