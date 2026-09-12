> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/containerbackgroundplacement](https://developer.apple.com/documentation/swiftui/containerbackgroundplacement)

# ContainerBackgroundPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The placement of a container background.

## Declaration

```swift
struct ContainerBackgroundPlacement
```

<a id="overview"></a>

## Overview

This method controls where to place a background that you specify with the [containerBackground(\_:for:)](view/containerbackground%28__for_%29.md) or [containerBackground(for:alignment:content:)](view/containerbackground%28for_alignment_content_%29.md) modifier.

## Topics

### Getting placements

- [navigation](containerbackgroundplacement/navigation.md): A background placement inside a [NavigationStack](navigationstack.md) or [NavigationSplitView](navigationsplitview.md).
- [tabView](containerbackgroundplacement/tabview.md): A background placement inside a [TabView](tabview.md).
- [widget](containerbackgroundplacement/widget.md): The container background placement for a widget.

### Getting StoreKit placements

- [subscriptionStore](containerbackgroundplacement/subscriptionstore.md): An automatic placement within a subscription store view, based on the view’s context.
- [subscriptionStoreFullHeight](containerbackgroundplacement/subscriptionstorefullheight.md): A background placement that spans the full height of a subscription store view.
- [subscriptionStoreHeader](containerbackgroundplacement/subscriptionstoreheader.md): A background placement behind the marketing content of a subscription store view.

### Type Properties

- [navigationSplitView](containerbackgroundplacement/navigationsplitview.md): A background placement behind the content of a [NavigationSplitView](navigationsplitview.md).
- [window](containerbackgroundplacement/window.md): A background placement inside a [Window](window.md) or [WindowGroup](windowgroup.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Layering views

- [Adding a background to your view](adding-a-background-to-your-view.md): Compose a background behind your view and extend it beyond the safe area insets.
- [ZStack](zstack.md): A view that overlays its subviews, aligning them in both axes.
- [zIndex(\_:)](view/zindex%28__%29.md): Controls the display order of overlapping views.
- [background(alignment:content:)](view/background%28alignment_content_%29.md): Layers the views that you specify behind this view.
- [background(\_:ignoresSafeAreaEdges:)](view/background%28__ignoressafeareaedges_%29.md): Sets the view’s background to a style.
- [background(ignoresSafeAreaEdges:)](view/background%28ignoressafeareaedges_%29.md): Sets the view’s background to the default background style.
- [background(\_:in:fillStyle:)](view/background%28__in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with a style.
- [background(in:fillStyle:)](view/background%28in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with the default background style.
- [overlay(alignment:content:)](view/overlay%28alignment_content_%29.md): Layers the views that you specify in front of this view.
- [overlay(\_:ignoresSafeAreaEdges:)](view/overlay%28__ignoressafeareaedges_%29.md): Layers the specified style in front of this view.
- [overlay(\_:in:fillStyle:)](view/overlay%28__in_fillstyle_%29.md): Layers a shape that you specify in front of this view.
- [backgroundMaterial](environmentvalues/backgroundmaterial.md): The material underneath the current view.
- [containerBackground(\_:for:)](view/containerbackground%28__for_%29.md): Sets the container background of the enclosing container using a view.
- [containerBackground(for:alignment:content:)](view/containerbackground%28for_alignment_content_%29.md): Sets the container background of the enclosing container using a view.
