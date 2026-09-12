> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterpowersource/readattributedescription(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterpowersource/readattributedescription(completion:))

# readAttributeDescription(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeDescription(completion: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func readAttributeDescription() async throws -> String
```

# readAttributeDescriptionWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeDescriptionWithCompletion:(void (^)(NSString *value, NSError *error)) completion;
```
