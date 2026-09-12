> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterchannel/changebynumber(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterchannel/changebynumber(with:completion:))

# changeByNumber(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func changeByNumber(with params: MTRChannelClusterChangeChannelByNumberParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func changeByNumber(with params: MTRChannelClusterChangeChannelByNumberParams) async throws
```

# changeChannelByNumberWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) changeChannelByNumberWithParams:(MTRChannelClusterChangeChannelByNumberParams *) params completion:(MTRStatusCompletion) completion;
```
