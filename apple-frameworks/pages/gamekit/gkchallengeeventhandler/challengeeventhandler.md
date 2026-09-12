> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengeeventhandler/challengeeventhandler](https://developer.apple.com/documentation/gamekit/gkchallengeeventhandler/challengeeventhandler)

# challengeEventHandler

**Interface language:** Objective-C

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Returns the shared instance of the event handler

## Declaration

```objectivec
+ (GKChallengeEventHandler *) challengeEventHandler;
```

<a id="return-value"></a>

## Return Value

An event handler object.

<a id="Discussion"></a>

## Discussion

Your game never directly creates a [GKChallengeEventHandler](../gkchallengeeventhandler.md) object. Instead, retrieve the shared instance using this class method.
