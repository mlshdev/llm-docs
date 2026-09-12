> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterpm1concentrationmeasurement/readattributegeneratedcommandlist(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterpm1concentrationmeasurement/readattributegeneratedcommandlist(completion:))

# readAttributeGeneratedCommandList(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func readAttributeGeneratedCommandList(completion: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeGeneratedCommandList() async throws -> [Any]
```

# readAttributeGeneratedCommandListWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) readAttributeGeneratedCommandListWithCompletion:(void (^)(NSArray *value, NSError *error)) completion;
```
