> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/compositorcontent](https://developer.apple.com/documentation/swiftui/compositorcontent)

# CompositorContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
@MainActor protocol CompositorContent
```

## Topics

### Associated Types

- [Body](compositorcontent/body-swift.associatedtype.md)

### Instance Properties

- [body](compositorcontent/body-swift.property.md)

### Instance Methods

- [contentCaptureProtected(\_:)](compositorcontent/contentcaptureprotected%28__%29.md): Marks the view as a view that activates content protection during scene capture events, such as screenshots, screen recordings, screensharing, etc.
- [onAppear(perform:)](compositorcontent/onappear%28perform_%29.md): Adds an action to perform before this content appears.
- [onChange(of:initial:\_:)](compositorcontent/onchange%28of_initial___%29.md)
- [onDisappear(perform:)](compositorcontent/ondisappear%28perform_%29.md): Adds an action to perform after this content disappears.
- [onImmersionChange(initial:\_:)](compositorcontent/onimmersionchange%28initial___%29.md): Performs an action when the immersion state of your app changes.
- [onWorldRecenter(action:)](compositorcontent/onworldrecenter%28action_%29.md): Adds an action to perform when recentering the view with the digital crown.
- [persistentSystemOverlays(\_:)](compositorcontent/persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
- [preferredSurroundingsEffect(\_:)](compositorcontent/preferredsurroundingseffect%28__%29.md): Applies an effect to passthrough video.
- [upperLimbVisibility(\_:)](compositorcontent/upperlimbvisibility%28__%29.md): Sets the preferred visibility of the user’s upper limbs, while an [ImmersiveSpace](immersivespace.md) scene is presented.

## Relationships

### Conforming Types

- [AnyCompositorContent](anycompositorcontent.md)
- [CompositorContentBuilder.Content](compositorcontentbuilder/content.md)

## See Also

### Compositing views

- [blendMode(\_:)](view/blendmode%28__%29.md): Sets the blend mode for compositing this view with overlapping views.
- [compositingGroup()](view/compositinggroup%28%29.md): Wraps this view in a compositing group.
- [drawingGroup(opaque:colorMode:)](view/drawinggroup%28opaque_colormode_%29.md): Composites this view’s contents into an offscreen image before final display.
- [BlendMode](blendmode.md): Modes for compositing a view with overlapping content.
- [ColorRenderingMode](colorrenderingmode.md): The set of possible working color spaces for color-compositing operations.
- [CompositorContentBuilder](compositorcontentbuilder.md): A result builder for composing a collection of [CompositorContent](compositorcontent.md) elements.
- [AnyCompositorContent](anycompositorcontent.md): Type erased compositor content.
