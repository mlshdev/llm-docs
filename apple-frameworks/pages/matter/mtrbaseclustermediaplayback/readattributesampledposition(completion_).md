> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermediaplayback/readattributesampledposition(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustermediaplayback/readattributesampledposition(completion:))

# readAttributeSampledPosition(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeSampledPosition(completion: @escaping @Sendable (MTRMediaPlaybackClusterPlaybackPositionStruct?, (any Error)?) -> Void)
```

```swift
func readAttributeSampledPosition() async throws -> MTRMediaPlaybackClusterPlaybackPositionStruct
```

# readAttributeSampledPositionWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeSampledPositionWithCompletion:(void (^)(MTRMediaPlaybackClusterPlaybackPositionStruct *value, NSError *error)) completion;
```
