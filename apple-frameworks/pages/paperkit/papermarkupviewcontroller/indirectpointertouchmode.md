> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/indirectpointertouchmode

# indirectPointerTouchMode

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The interaction mode for indirect pointer touches on the canvas.

## Declaration

```swift
@MainActor @preconcurrency var indirectPointerTouchMode: PaperMarkupViewController.TouchMode { get set }
```

<a id="discussion"></a>

## Discussion

Default is `.selection`.

## See Also

### Controlling touch input

- [directTouchMode](directtouchmode.md): The interaction mode for direct touches on the canvas.
- [directTouchAutomaticallyDraws](directtouchautomaticallydraws.md): A Boolean value that indicates whether direct touches automatically draw based on system state.
- [PaperMarkupViewController.TouchMode](touchmode.md): The canvas behavior for touches.
