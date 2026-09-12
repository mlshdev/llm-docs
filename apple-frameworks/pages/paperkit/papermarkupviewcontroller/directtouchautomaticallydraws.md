> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/directtouchautomaticallydraws](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/directtouchautomaticallydraws)

# directTouchAutomaticallyDraws

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

A Boolean value that indicates whether direct touches automatically draw based on system state.

## Declaration

```swift
@MainActor @preconcurrency var directTouchAutomaticallyDraws: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Direct touches on the canvas behave as if `directTouchMode = .drawing` when `directTouchAutomaticallyDraws` is true, a `PKToolPicker` is visible, and the “Draw with Finger” system setting is on.

Default is `true`.

## See Also

### Controlling touch input

- [directTouchMode](directtouchmode.md): The interaction mode for direct touches on the canvas.
- [indirectPointerTouchMode](indirectpointertouchmode.md): The interaction mode for indirect pointer touches on the canvas.
- [PaperMarkupViewController.TouchMode](touchmode.md): The canvas behavior for touches.
