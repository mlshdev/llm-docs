> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterpowertopology/readattributeavailableendpoints(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterpowertopology/readattributeavailableendpoints(completion:))

# readAttributeAvailableEndpoints(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeAvailableEndpoints(completion: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeAvailableEndpoints() async throws -> [Any]
```

# readAttributeAvailableEndpointsWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeAvailableEndpointsWithCompletion:(void (^)(NSArray *value, NSError *error)) completion;
```
