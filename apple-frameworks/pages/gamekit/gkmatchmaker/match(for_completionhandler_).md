> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/match(for:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/match(for:completionhandler:))

# match(for:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a match from an invitation that the local player accepts.

## Declaration

```swift
func match(for invite: GKInvite, completionHandler: (@Sendable (GKMatch?, (any Error)?) -> Void)? = nil)
```

```swift
func match(for invite: GKInvite) async throws -> GKMatch
```

## Parameters

- `invite`: The invitation that the local player accepts.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`match`**: The match that GameKit creates when the local player accepts the invitation. If unsuccessful, this parameter is `nil`.
  - **`error`**: Describes an error if one occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

Use this method when you implement your own interface to inform you when the local player joins a match.

# matchForInvite:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a match from an invitation that the local player accepts.

## Declaration

```objectivec
- (void) matchForInvite:(GKInvite *) invite completionHandler:(void (^)(GKMatch *match, NSError *error)) completionHandler;
```

## Parameters

- `invite`: The invitation that the local player accepts.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`match`**: The match that GameKit creates when the local player accepts the invitation. If unsuccessful, this parameter is `nil`.
  - **`error`**: Describes an error if one occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

Use this method when you implement your own interface to inform you when the local player joins a match.
