> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentlaunchview/init(_:for:backgroundstyle:_:ondocumentopen:overlayaccessoryview:)](https://developer.apple.com/documentation/swiftui/documentlaunchview/init(_:for:backgroundstyle:_:ondocumentopen:overlayaccessoryview:))

# init(\_:for:backgroundStyle:\_:onDocumentOpen:overlayAccessoryView:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background style, and an overlay accessory view.

## Declaration

```swift
@export(implementation) nonisolated init<B>(_ title: LocalizedStringResource, for contentTypes: [UTType], backgroundStyle: B, @ContentBuilder _ actions: () -> Actions, @ContentBuilder onDocumentOpen: @escaping (URL) -> DocumentView, @ContentBuilder overlayAccessoryView: @escaping (DocumentLaunchGeometryProxy) -> some View) where B : ShapeStyle
```

## Parameters

- `title`: A title resource to use for the view title.
- `contentTypes`: Content types that the view can open.
- `backgroundStyle`: An optional background style of the view.
- `actions`: A content builder returning the view’s actions
- `onDocumentOpen`: A closure that handles an open file.
- `overlayAccessoryView`: A content builder for returning the view’s overlay accessory view.

<a id="discussion"></a>

## Discussion

> **Note**

>  An alternative to `DocumentLaunchView` is a scene variant of this API: [DocumentGroupLaunchScene](../documentgrouplaunchscene.md). If the app definition contains `DocumentGroup` scenes, consider using a `DocumentGroupLaunchScene` instead of this view.

## See Also

### Creating a launch view with a background style

- [init(\_:for:backgroundStyle:\_:onDocumentOpen:)](init%28__for_backgroundstyle___ondocumentopen_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, and a background style.
- [init(\_:for:backgroundStyle:\_:onDocumentOpen:backgroundAccessoryView:)](init%28__for_backgroundstyle___ondocumentopen_backgroundaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background style, and a background accessory view.
- [init(\_:for:backgroundStyle:\_:onDocumentOpen:backgroundAccessoryView:overlayAccessoryView:)](init%28__for_backgroundstyle___ondocumentopen_backgroundaccessoryview_overlayaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background style, and accessory views.
