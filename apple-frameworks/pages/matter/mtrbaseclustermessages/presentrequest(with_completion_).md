> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermessages/presentrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustermessages/presentrequest(with:completion:))

# presentRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command PresentMessagesRequest

## Declaration

```swift
func presentRequest(with params: MTRMessagesClusterPresentMessagesRequestParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func presentRequest(with params: MTRMessagesClusterPresentMessagesRequestParams) async throws
```

<a id="discussion"></a>

## Discussion

Upon receipt, this SHALL cause the message in the passed fields to be appended to the Messages attribute.

# presentMessagesRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command PresentMessagesRequest

## Declaration

```objectivec
- (void) presentMessagesRequestWithParams:(MTRMessagesClusterPresentMessagesRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Upon receipt, this SHALL cause the message in the passed fields to be appended to the Messages attribute.
