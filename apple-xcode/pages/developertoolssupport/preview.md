> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/preview](https://developer.apple.com/documentation/developertoolssupport/preview)

# Preview

**Framework:** DeveloperToolsSupport  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A base type that preview macros use to create previews.

## Declaration

```swift
@MainActor struct Preview
```

<a id="overview"></a>

## Overview

Frameworks like SwiftUI and WidgetKit define initializers for this type, along with framework-specific preview macros that rely on this type. You don’t use this type directly. Instead, use one of the preview macros, like [Preview(\_:body:)](https://developer.apple.com/documentation/swiftui/preview%28_:body:%29).

## Topics

### Creating a SwiftUI preview

- [init(\_:traits:body:)](preview/init%28__traits_body_%29-8pemr.md): Creates a preview of a SwiftUI view.
- [init(\_:traits:body:cameras:)](preview/init%28__traits_body_cameras_%29.md): Creates a preview of a SwiftUI view using the specified traits and custom viewpoints.
- [init(\_:immersionStyle:traits:body:cameras:)](preview/init%28__immersionstyle_traits_body_cameras_%29.md): Creates a preview of a SwiftUI view in an immersive space with custom viewpoints.
- [init(\_:windowStyle:traits:body:cameras:)](preview/init%28__windowstyle_traits_body_cameras_%29.md): Creates a preview of a SwiftUI view in a window with custom viewpoints.

### Creating a preview of a widget

- [init(\_:as:using:widget:contentStates:)](preview/init%28__as_using_widget_contentstates_%29.md): Creates a preview of a live activity widget.
- [init(\_:as:using:widget:timelineProvider:)](preview/init%28__as_using_widget_timelineprovider_%29-1if5u.md): Creates a preview of a widget with an `AppIntent` configuration.
- [init(\_:as:using:widget:timelineProvider:)](preview/init%28__as_using_widget_timelineprovider_%29-5335n.md): Creates a preview of a widget with an `INIntent` configuration.
- [init(\_:as:widget:timeline:)](preview/init%28__as_widget_timeline_%29.md): Creates a preview of a timeline-style widget.
- [init(\_:as:widget:timelineProvider:)](preview/init%28__as_widget_timelineprovider_%29.md): Creates a preview of a widget with a static configuration.

### Creating an AppKit preview

- [init(\_:traits:body:)](preview/init%28__traits_body_%29-158mk.md): Creates a preview of an NSView.
- [init(\_:traits:body:)](preview/init%28__traits_body_%29-2viaf.md): Creates a preview of an NSViewController.

### Getting preview traits

- [Preview.ViewTraits](preview/viewtraits.md): Traits that apply to previews of views and view controllers.

### Initializers

- [init(\_:traits:arguments:body:)](preview/init%28__traits_arguments_body_%29-1xqo1.md): Creates a group of previews of a SwiftUI view.
- [init(\_:traits:arguments:body:)](preview/init%28__traits_arguments_body_%29-287km.md)
- [init(\_:traits:arguments:body:)](preview/init%28__traits_arguments_body_%29-3q0i9.md)
- [init(\_:traits:arguments:body:)](preview/init%28__traits_arguments_body_%29-4ieth.md): Creates a group of previews of an NSViewController.
- [init(\_:traits:arguments:body:)](preview/init%28__traits_arguments_body_%29-5cb4o.md): Creates a group of previews of an NSView.
- [init(\_:traits:body:)](preview/init%28__traits_body_%29-3i54d.md)
- [init(\_:traits:body:)](preview/init%28__traits_body_%29-941vb.md)
- [init(\_:widget:relevanceEntries:)](preview/init%28__widget_relevanceentries_%29.md): Creates a preview of a relevance-driven widget.
- [init(\_:widget:relevanceProvider:)](preview/init%28__widget_relevanceprovider_%29.md): Creates a preview of a relevance-driven widget.
- [init(\_:widget:relevanceProvider:relevance:)](preview/init%28__widget_relevanceprovider_relevance_%29.md): Creates a preview of a relevance-driven widget.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Preview definition

- [PreviewLayout](previewlayout.md): A size constraint for a preview.
- [PreviewTrait](previewtrait.md): Customizations that you can apply to a preview.
- [PreviewRegistry](previewregistry.md): A protocol that the system uses to locate previews at runtime.
