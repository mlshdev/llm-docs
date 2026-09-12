> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollviewproxy](https://developer.apple.com/documentation/swiftui/scrollviewproxy)

# ScrollViewProxy

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A proxy value that supports programmatic scrolling of the scrollable views within a view hierarchy.

## Declaration

```swift
struct ScrollViewProxy
```

<a id="overview"></a>

## Overview

You don’t create instances of `ScrollViewProxy` directly. Instead, your [ScrollViewReader](scrollviewreader.md) receives an instance of `ScrollViewProxy` in its `content` content builder. You use actions within this content builder, such as button and gesture handlers or the [onChange(of:perform:)](view/onchange%28of_perform_%29.md) method, to call the proxy’s [scrollTo(\_:anchor:)](scrollviewproxy/scrollto%28__anchor_%29.md) method.

## Topics

### Performing scrolling

- [scrollTo(\_:anchor:)](scrollviewproxy/scrollto%28__anchor_%29.md): Scans all scroll views contained by the proxy for the first with a child view with identifier `id`, and then scrolls to that view.

## See Also

### Creating a scroll view

- [ScrollView](scrollview.md): A scrollable view.
- [ScrollViewReader](scrollviewreader.md): A view that provides programmatic scrolling, by working with a proxy to scroll to known child views.
