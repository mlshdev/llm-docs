> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagementmode/readattributeacceptedcommandlist(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagementmode/readattributeacceptedcommandlist(completion:))

# readAttributeAcceptedCommandList(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeAcceptedCommandList(completion: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeAcceptedCommandList() async throws -> [Any]
```

# readAttributeAcceptedCommandListWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeAcceptedCommandListWithCompletion:(void (^)(NSArray *value, NSError *error)) completion;
```
