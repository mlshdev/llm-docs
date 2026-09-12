> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentlaunchview/init(_:for:_:ondocumentopen:background:overlayaccessoryview:)](https://developer.apple.com/documentation/swiftui/documentlaunchview/init(_:for:_:ondocumentopen:background:overlayaccessoryview:))

# init(\_:for:\_:onDocumentOpen:background:overlayAccessoryView:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background view, and an overlay accessory view.

## Declaration

```swift
@export(implementation) nonisolated init(_ title: LocalizedStringResource, for contentTypes: [UTType], @ContentBuilder _ actions: () -> Actions, @ContentBuilder onDocumentOpen: @escaping (URL) -> DocumentView, @ContentBuilder background: () -> some View, @ContentBuilder overlayAccessoryView: @escaping (DocumentLaunchGeometryProxy) -> some View)
```

## Parameters

- `title`: A title resource to use for the view title.
- `contentTypes`: Content types that the view can open.
- `actions`: A content builder returning the view’s actions
- `onDocumentOpen`: A closure that handles an open file.
- `background`: A background of the view.
- `overlayAccessoryView`: A content builder for returning the view’s overlay accessory view.

<a id="discussion"></a>

## Discussion

> **Note**

>  An alternative to `DocumentLaunchView` is a scene variant of this API: [DocumentGroupLaunchScene](../documentgrouplaunchscene.md). If the app definition contains `DocumentGroup` scenes, consider using a `DocumentGroupLaunchScene` instead of this view.

## See Also

### Creating a launch view with a background view

- [init(\_:for:\_:onDocumentOpen:)](init%28__for___ondocumentopen_%29.md): Creates a view to present when launching document-related user experiences using a localized title and custom actions.
- [init(\_:for:\_:onDocumentOpen:background:)](init%28__for___ondocumentopen_background_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, and a background view.
- [init(\_:for:\_:onDocumentOpen:background:backgroundAccessoryView:)](init%28__for___ondocumentopen_background_backgroundaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background view, and a background accessory view.
- [init(\_:for:\_:onDocumentOpen:background:backgroundAccessoryView:overlayAccessoryView:)](init%28__for___ondocumentopen_background_backgroundaccessoryview_overlayaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, a background view, and accessory views.
- [init(\_:for:\_:onDocumentOpen:backgroundAccessoryView:)](init%28__for___ondocumentopen_backgroundaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, and a background accessory view.
- [init(\_:for:\_:onDocumentOpen:backgroundAccessoryView:overlayAccessoryView:)](init%28__for___ondocumentopen_backgroundaccessoryview_overlayaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, and accessory views.
- [init(\_:for:\_:onDocumentOpen:overlayAccessoryView:)](init%28__for___ondocumentopen_overlayaccessoryview_%29.md): Creates a view to present when launching document-related user experiences using a localized title, custom actions, and an overlay accessory view.
