> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/physicalmetrics](https://developer.apple.com/documentation/swiftui/environmentvalues/physicalmetrics)

# physicalMetrics

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The physical metrics associated with a scene.

## Declaration

```swift
var physicalMetrics: PhysicalMetricsConverter { get set }
```

<a id="discussion"></a>

## Discussion

Reading this value returns a `PhysicalMetricsConverter` corresponding to the window scene associated with the environment’s reader. The converter can convert point sizes into physical measurements of length, and vice versa.

Reading this value is only supported in the body of a [View](../view.md) or of a type that inherits a [View](../view.md)’s environment.

## See Also

### View attributes

- [allowedDynamicRange](alloweddynamicrange.md): The allowed dynamic range for the view, or nil.
- [backgroundMaterial](backgroundmaterial.md): The material underneath the current view.
- [backgroundProminence](backgroundprominence.md): The prominence of the background underneath views associated with this environment.
- [backgroundStyle](backgroundstyle.md): An optional style that overrides the default system background style when set.
- [badgeProminence](badgeprominence.md): The prominence to apply to badges associated with this environment.
- [contentTransition](contenttransition.md): The current method of animating the contents of views.
- [contentTransitionAddsDrawingGroup](contenttransitionaddsdrawinggroup.md): A Boolean value that controls whether views that render content transitions use GPU-accelerated rendering.
- [defaultMinListHeaderHeight](defaultminlistheaderheight.md): The default minimum height of a header in a list.
- [defaultMinListRowHeight](defaultminlistrowheight.md): The default minimum height of rows in a list.
- [headerProminence](headerprominence.md): The prominence to apply to section headers within a view.
- [realityKitScene](realitykitscene.md)
- [realityViewCameraControls](realityviewcameracontrols.md): The camera controls for the reality view.
- [redactionReasons](redactionreasons.md): The current redaction reasons applied to the view hierarchy.
- [springLoadingBehavior](springloadingbehavior.md): The behavior of spring loaded interactions for the views associated with this environment.
- [symbolRenderingMode](symbolrenderingmode.md): The current symbol rendering mode, or `nil` denoting that the mode is picked automatically using the current image and foreground style as parameters.
