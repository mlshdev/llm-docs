> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/transitiongroup](https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitiongroup)

# AVExperienceController.TransitionGroup

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** visionOS 27.0+

A group of experience transitions that prepare concurrently and run simultaneously as a single visual transition.

## Declaration

```swift
struct TransitionGroup<ChildTransitionResult> where ChildTransitionResult : Sendable
```

<a id="overview"></a>

## Overview

Use [withTransitionGroup(body:)](withtransitiongroup%28body_%29.md) to create a transition group. Add transitions using [addTransition(operation:)](transitiongroup/addtransition%28operation_%29.md), and they perform together once all have been added and prepared.

Transitions in a group prepare concurrently, then perform their animations simultaneously, creating a single cohesive visual transition. Each transition completes with its own result, allowing you to handle individual successes and failures.

<a id="Handle-Failures"></a>

## Handle Failures

Individual transitions may fail during preparation or execution without affecting other transitions in the group.

## Topics

### Adding transitions

- [addTransition(operation:)](transitiongroup/addtransition%28operation_%29.md): Adds a transition to the group, suspending it until all transitions are ready to run together.

## See Also

### Transitioning experiences

- [withTransitionGroup(body:)](withtransitiongroup%28body_%29.md): Coordinates multiple experience transitions to perform together as a single visual transition.
- [transition(to:)](transition%28to_%29.md): Transitions the video to a different experience.
