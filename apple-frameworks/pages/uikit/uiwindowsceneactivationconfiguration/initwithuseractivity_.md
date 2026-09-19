> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwindowsceneactivationconfiguration/initwithuseractivity:

# initWithUserActivity:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates an activation configuration.

## Declaration

```objectivec
- (instancetype) initWithUserActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `userActivity`: The user activity used to request a scene.

<a id="return-value"></a>

## Return Value

A newly initialized activation configuration object.
