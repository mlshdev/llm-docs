> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avexperiencecontroller/transitioncontext/status-swift.property

# status

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The status of the transition.

## Declaration

```swift
let status: AVExperienceController.TransitionContext.Status
```

<a id="Discussion"></a>

## Discussion

Use this to update your application state based on the current state of the transition.

## See Also

### Inspecting the transition

- [fromExperience](fromexperience.md): The experience of the `AVExperienceController` before the transition was initiated.
- [toExperience](toexperience.md): The experience to which the `AVExperienceController` has been requested to transition to.
