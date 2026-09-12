> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollview](https://developer.apple.com/documentation/swiftui/scrollview)

# ScrollView

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A scrollable view.

## Declaration

```swift
nonisolated struct ScrollView<Content> where Content : View
```

## Mentioned In

- [Picking container views for your content](picking-container-views-for-your-content.md)
- [Creating performant scrollable stacks](creating-performant-scrollable-stacks.md)
- [Grouping data with lazy stack views](grouping-data-with-lazy-stack-views.md)

<a id="overview"></a>

## Overview

The scroll view displays its content within the scrollable content region. As the user performs platform-appropriate scroll gestures, the scroll view adjusts what portion of the underlying content is visible. `ScrollView` can scroll horizontally, vertically, or both, but does not provide zooming functionality.

In the following example, a `ScrollView` allows the user to scroll through a [VStack](vstack.md) containing 100 [Text](text.md) views. The image after the listing shows the scroll view’s temporarily visible scrollbar at the right; you can disable it with the `showsIndicators` parameter of the `ScrollView` initializer.

```swift
var body: some View {
    ScrollView {
        VStack(alignment: .leading) {
            ForEach(0..<100) {
                Text("Row \($0)")
            }
        }
    }
}
```

![A scroll view with a series of vertically arranged rows, reading](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-ScrollView-rows-with-indicator@2x.png)

<a id="Controlling-Scroll-Position"></a>

### Controlling Scroll Position

You can influence where a scroll view is initially scrolled by using the [defaultScrollAnchor(\_:)](view/defaultscrollanchor%28__%29.md) view modifier.

Provide a value of [center](unitpoint/center.md) to have the scroll view start in the center of its content when a scroll view is scrollable in both axes.

```swift
ScrollView([.horizontal, .vertical]) {
    // initially centered content
}
.defaultScrollAnchor(.center)
```

Or provide an alignment of [bottom](unitpoint/bottom.md) to have the scroll view start at the bottom of its content when a scroll view is scrollable in its vertical axes.

```swift
ScrollView {
    // initially bottom aligned content
}
.defaultScrollAnchor(.bottom)
```

After the scroll view initially renders, the user may scroll the content of the scroll view.

To perform programmatic scrolling, wrap one or more scroll views with a [ScrollViewReader](scrollviewreader.md).

## Topics

### Creating a scroll view

- [init(\_:showsIndicators:content:)](scrollview/init%28__showsindicators_content_%29.md): Deprecated. Creates a new instance that’s scrollable in the direction of the given axis and can show indicators while scrolling.
- [init(\_:content:)](scrollview/init%28__content_%29.md): Conforms when `Content` conforms to `View`. Creates a new instance that’s scrollable in the direction of the given axis and can show indicators while scrolling.

### Configuring a scroll view

- [content](scrollview/content.md): The scroll view’s content.
- [axes](scrollview/axes.md): The scrollable axes of the scroll view.
- [showsIndicators](scrollview/showsindicators.md): A value that indicates whether the scroll view displays the scrollable component of the content offset, in a way that’s suitable for the platform.

### Supporting types

- [body](scrollview/body.md): The content and behavior of the scroll view.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Creating a scroll view

- [ScrollViewReader](scrollviewreader.md): A view that provides programmatic scrolling, by working with a proxy to scroll to known child views.
- [ScrollViewProxy](scrollviewproxy.md): A proxy value that supports programmatic scrolling of the scrollable views within a view hierarchy.
