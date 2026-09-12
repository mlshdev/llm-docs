> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustercontentappobserver/contentappmessage(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustercontentappobserver/contentappmessage(with:completion:))

# contentAppMessage(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ContentAppMessage

## Declaration

```swift
func contentAppMessage(with params: MTRContentAppObserverClusterContentAppMessageParams, completion: @escaping @Sendable (MTRContentAppObserverClusterContentAppMessageResponseParams?, (any Error)?) -> Void)
```

```swift
func contentAppMessage(with params: MTRContentAppObserverClusterContentAppMessageParams) async throws -> MTRContentAppObserverClusterContentAppMessageResponseParams
```

<a id="discussion"></a>

## Discussion

Upon receipt, the data field MAY be parsed and interpreted.

# contentAppMessageWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ContentAppMessage

## Declaration

```objectivec
- (void) contentAppMessageWithParams:(MTRContentAppObserverClusterContentAppMessageParams *) params completion:(void (^)(MTRContentAppObserverClusterContentAppMessageResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

Upon receipt, the data field MAY be parsed and interpreted.
