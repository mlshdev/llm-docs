> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermessages/cancelrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustermessages/cancelrequest(with:completion:))

# cancelRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CancelMessagesRequest

## Declaration

```swift
func cancelRequest(with params: MTRMessagesClusterCancelMessagesRequestParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func cancelRequest(with params: MTRMessagesClusterCancelMessagesRequestParams) async throws
```

<a id="discussion"></a>

## Discussion

This command will cancel the message IDs specified.

# cancelMessagesRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CancelMessagesRequest

## Declaration

```objectivec
- (void) cancelMessagesRequestWithParams:(MTRMessagesClusterCancelMessagesRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command will cancel the message IDs specified.
