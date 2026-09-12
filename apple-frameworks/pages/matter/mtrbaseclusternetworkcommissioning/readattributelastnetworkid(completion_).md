> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusternetworkcommissioning/readattributelastnetworkid(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusternetworkcommissioning/readattributelastnetworkid(completion:))

# readAttributeLastNetworkID(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeLastNetworkID(completion: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func readAttributeLastNetworkID() async throws -> Data
```

# readAttributeLastNetworkIDWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeLastNetworkIDWithCompletion:(void (^)(NSData *value, NSError *error)) completion;
```
