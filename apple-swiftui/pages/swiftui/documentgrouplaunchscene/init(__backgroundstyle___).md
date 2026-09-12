> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentgrouplaunchscene/init(_:backgroundstyle:_:)](https://developer.apple.com/documentation/swiftui/documentgrouplaunchscene/init(_:backgroundstyle:_:))

# init(\_:backgroundStyle:\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Creates a launch scene for document-based applications with a title, a background style, and a set of actions.

## Declaration

```swift
@export(implementation) nonisolated init<B>(_ title: LocalizedStringResource, backgroundStyle: B = BackgroundStyle(), @ContentBuilder _ actions: () -> Actions = { DefaultDocumentGroupLaunchActions() }) where B : ShapeStyle
```

## Parameters

- `title`: A resource to use for the view title.
- `backgroundStyle`: A background style of the view.
- `actions`: A content builder for returning the view’s actions.

<a id="discussion"></a>

## Discussion

Use a `DocumentGroupLaunchScene` alongside any [DocumentGroup](../documentgroup.md) scenes. If you don’t implement a `DocumentGroup` in the app declaration, you can get the same design by implementing a [DocumentLaunchView](../documentlaunchview.md).

## See Also

### Creating a launch scene with a background style

- [init(\_:backgroundStyle:\_:backgroundAccessoryView:)](init%28__backgroundstyle___backgroundaccessoryview_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a background style, a set of actions, and a background accessory view.
- [init(\_:backgroundStyle:\_:backgroundAccessoryView:overlayAccessoryView:)](init%28__backgroundstyle___backgroundaccessoryview_overlayaccessoryview_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a background style, a set of actions, and background and overlay accessory views.
- [init(\_:backgroundStyle:\_:overlayAccessoryView:)](init%28__backgroundstyle___overlayaccessoryview_%29.md): Conforms when `Actions` conforms to `View`. Creates a launch scene for document-based applications with a title, a background style, a set of actions, and an overlay accessory view.
