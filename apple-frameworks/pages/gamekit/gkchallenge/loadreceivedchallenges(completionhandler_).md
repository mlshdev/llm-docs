> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallenge/loadreceivedchallenges(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkchallenge/loadreceivedchallenges(completionhandler:))

# loadReceivedChallenges(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Loads the list of outstanding challenges.

## Declaration

```swift
class func loadReceivedChallenges(completionHandler: (@Sendable ([GKChallenge]?, (any Error)?) -> Void)? = nil)
```

```swift
class func loadReceivedChallenges() async throws -> [GKChallenge]
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **`challenges`**: The challenges the local player issued.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes successfully.

# loadReceivedChallengesWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Loads the list of outstanding challenges.

## Declaration

```objectivec
+ (void) loadReceivedChallengesWithCompletionHandler:(void (^)(NSArray<GKChallenge *> *challenges, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **`challenges`**: The challenges the local player issued.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes successfully.
