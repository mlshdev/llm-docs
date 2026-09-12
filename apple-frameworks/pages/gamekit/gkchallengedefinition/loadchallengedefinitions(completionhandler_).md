> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengedefinition/loadchallengedefinitions(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkchallengedefinition/loadchallengedefinitions(completionhandler:))

# loadChallengeDefinitions(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Loads all the challenge definitions for the current game, returns an empty array if none exist.

## Declaration

```swift
class func loadChallengeDefinitions(completionHandler: @escaping @Sendable ([GKChallengeDefinition]?, (any Error)?) -> Void)
```

```swift
class var all: [GKChallengeDefinition] { get async throws }
```

<a id="discussion"></a>

## Discussion

> **Important**

> Archived challenge definitions are excluded.

# loadChallengeDefinitionsWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Loads all the challenge definitions for the current game, returns an empty array if none exist.

## Declaration

```objectivec
+ (void) loadChallengeDefinitionsWithCompletionHandler:(void (^)(NSArray<GKChallengeDefinition *> *challengeDefinitions, NSError *error)) completionHandler;
```

<a id="discussion"></a>

## Discussion

> **Important**

> Archived challenge definitions are excluded.
