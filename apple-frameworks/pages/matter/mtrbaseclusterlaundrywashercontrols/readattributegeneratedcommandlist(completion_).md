> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlaundrywashercontrols/readattributegeneratedcommandlist(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterlaundrywashercontrols/readattributegeneratedcommandlist(completion:))

# readAttributeGeneratedCommandList(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

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
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeGeneratedCommandListWithCompletion:(void (^)(NSArray *value, NSError *error)) completion;
```
