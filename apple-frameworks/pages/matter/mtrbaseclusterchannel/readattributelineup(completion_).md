> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterchannel/readattributelineup(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterchannel/readattributelineup(completion:))

# readAttributeLineup(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeLineup(completion: @escaping @Sendable (MTRChannelClusterLineupInfoStruct?, (any Error)?) -> Void)
```

```swift
func readAttributeLineup() async throws -> MTRChannelClusterLineupInfoStruct
```

# readAttributeLineupWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeLineupWithCompletion:(void (^)(MTRChannelClusterLineupInfoStruct *value, NSError *error)) completion;
```
