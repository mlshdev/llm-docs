> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsessiondelegate/session(_:didnotfindmatchfor:error:)](https://developer.apple.com/documentation/shazamkit/shsessiondelegate/session(_:didnotfindmatchfor:error:))

# session(\_:didNotFindMatchFor:error:) (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Tells the delegate that the query signature doesn’t match an item in the catalog, or that there’s an error.

## Declaration

```swift
optional func session(_ session: SHSession, didNotFindMatchFor signature: SHSignature, error: (any Error)?)
```

## Parameters

- `session`: The session object that performs the match.
- `signature`: The query signature to use for the match.
- `error`: The error that occurs; otherwise, `nil`, which indicates that there’s no match.

## Mentioned In

- [Matching audio using the built-in microphone](../matching-audio-using-the-built-in-microphone.md)

<a id="Discussion"></a>

## Discussion

You can retry the match if the error indicates an issue in communicating with the catalog server, such as [SHError.Code.matchAttemptFailed](../sherror/code/matchattemptfailed.md).

## See Also

### Handling matches

- [session(\_:didFind:)](session%28__didfind_%29.md): Tells the delegate that the query signature matches an item in the catalog.

# session:didNotFindMatchForSignature:error: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Tells the delegate that the query signature doesn’t match an item in the catalog, or that there’s an error.

## Declaration

```objectivec
- (void) session:(SHSession *) session didNotFindMatchForSignature:(SHSignature *) signature error:(NSError *) error;
```

## Parameters

- `session`: The session object that performs the match.
- `signature`: The query signature to use for the match.
- `error`: The error that occurs; otherwise, `nil`, which indicates that there’s no match.

## Mentioned In

- [Matching audio using the built-in microphone](../matching-audio-using-the-built-in-microphone.md)

<a id="Discussion"></a>

## Discussion

You can retry the match if the error indicates an issue in communicating with the catalog server, such as [SHErrorCodeMatchAttemptFailed](../sherror/code/matchattemptfailed.md).

## See Also

### Handling matches

- [session:didFindMatch:](session%28__didfind_%29.md): Tells the delegate that the query signature matches an item in the catalog.
