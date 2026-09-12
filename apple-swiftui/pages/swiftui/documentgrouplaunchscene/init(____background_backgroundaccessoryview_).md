> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentgrouplaunchscene/init(_:_:background:backgroundaccessoryview:)](https://developer.apple.com/documentation/swiftui/documentgrouplaunchscene/init(_:_:background:backgroundaccessoryview:))

# init(\_:\_:background:backgroundAccessoryView:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Creates a launch scene for document-based applications with a title, a set of actions, a background, and a background accessory view.

## Declaration

```swift
@export(implementation) nonisolated init(_ title: LocalizedStringResource, @ContentBuilder _ actions: () -> Actions, @ContentBuilder background: () -> some View, @ContentBuilder backgroundAccessoryView: @escaping (DocumentLaunchGeometryProxy) -> some View)
```

## Parameters

- `title`: A resource to use for the view title.
- `actions`: A content builder for returning the view’s actions.
- `background`: The background of the scene.
- `backgroundAccessoryView`: A content builder for returning the view’s background accessory view.

<a id="discussion"></a>

## Discussion

Use a `DocumentGroupLaunchScene` alongside any [DocumentGroup](../documentgroup.md) scenes. If you don’t implement a `DocumentGroup` in the app declaration, you can get the same design by implementing a [DocumentLaunchView](../documentlaunchview.md).

## See Also

### Creating a launch scene with a background view

- [init(\_:\_:background:)](init%28____background_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a set of actions, and a background.
- [init(\_:\_:background:backgroundAccessoryView:overlayAccessoryView:)](init%28____background_backgroundaccessoryview_overlayaccessoryview_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a set of actions, and a background.
- [init(\_:\_:background:overlayAccessoryView:)](init%28____background_overlayaccessoryview_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a set of actions, a background, and an overlay accessory view.
