> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeview](https://developer.apple.com/documentation/webkit/webframeview)

# WebFrameView (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebFrameView` objects and their subviews display the web content contained in a frame. You never create instances of `WebFrameView` directly—`WebView` objects create and manage a hierarchy of `WebFrameView` objects, one for each frame. `WebFrameView` objects use a scroll view whose document view conforms to the [WebDocumentView](webdocumentview.md) protocol.

## Declaration

```swift
class WebFrameView
```

## Topics

### Getting the Web Frame

- [webFrame](webframeview/webframe.md): Deprecated. The web frame.

### Getting Subviews

- [documentView](webframeview/documentview.md): Deprecated. The subview that displays the web content.

### Setting Scrolling Behavior

- [allowsScrolling](webframeview/allowsscrolling.md): Deprecated. A Boolean that indicates whether the frame view should allow users to scroll.

### Printing Views

- [canPrintHeadersAndFooters](webframeview/canprintheadersandfooters.md): Deprecated. A Boolean value indicating whether the receiver can print headers and footers.
- [printOperation(with:)](webframeview/printoperation%28with_%29.md): Deprecated. Returns a print operation object to print this frame.
- [documentViewShouldHandlePrint](webframeview/documentviewshouldhandleprint.md): Deprecated. A Boolean value indicating whether the document view should handle a print operation.
- [printDocumentView()](webframeview/printdocumentview%28%29.md): Deprecated. Prints the receiver.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with Frames (Legacy)

- [WebFrame](webframe.md): Deprecated. A `WebFrame` object encapsulates the data displayed in a `WebFrameView` object. There is one `WebFrame` object per frame displayed in a `WebView`. An entire webpage is represented by a hierarchy of `WebFrame` objects in which the root object is called the **main frame**.
- [WebDataSource](webdatasource.md): Deprecated. `WebDataSource` encapsulates the web content to be displayed in a web frame view. A `WebDataSource` object has a representation object, conforming to the `WebDocumentRepresentation` protocol, that holds the data in an appropriate format depending on the MIME type. You can extend WebKit to support new MIME types by implementing your own view and representation classes, and specifying the mapping between them using the [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) `WebView` class method.
- [WebFrameLoadDelegate](webframeloaddelegate.md): Deprecated.

# WebFrameView (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebFrameView` objects and their subviews display the web content contained in a frame. You never create instances of `WebFrameView` directly—`WebView` objects create and manage a hierarchy of `WebFrameView` objects, one for each frame. `WebFrameView` objects use a scroll view whose document view conforms to the [WebDocumentView](webdocumentview.md) protocol.

## Declaration

```objectivec
@interface WebFrameView : NSView
```

## Topics

### Getting the Web Frame

- [webFrame](webframeview/webframe.md): Deprecated. The web frame.

### Getting Subviews

- [documentView](webframeview/documentview.md): Deprecated. The subview that displays the web content.

### Setting Scrolling Behavior

- [allowsScrolling](webframeview/allowsscrolling.md): Deprecated. A Boolean that indicates whether the frame view should allow users to scroll.

### Printing Views

- [canPrintHeadersAndFooters](webframeview/canprintheadersandfooters.md): Deprecated. A Boolean value indicating whether the receiver can print headers and footers.
- [printOperationWithPrintInfo:](webframeview/printoperation%28with_%29.md): Deprecated. Returns a print operation object to print this frame.
- [documentViewShouldHandlePrint](webframeview/documentviewshouldhandleprint.md): Deprecated. A Boolean value indicating whether the document view should handle a print operation.
- [printDocumentView](webframeview/printdocumentview%28%29.md): Deprecated. Prints the receiver.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

## See Also

### Working with Frames (Legacy)

- [WebFrame](webframe.md): Deprecated. A `WebFrame` object encapsulates the data displayed in a `WebFrameView` object. There is one `WebFrame` object per frame displayed in a `WebView`. An entire webpage is represented by a hierarchy of `WebFrame` objects in which the root object is called the **main frame**.
- [WebDataSource](webdatasource.md): Deprecated. `WebDataSource` encapsulates the web content to be displayed in a web frame view. A `WebDataSource` object has a representation object, conforming to the `WebDocumentRepresentation` protocol, that holds the data in an appropriate format depending on the MIME type. You can extend WebKit to support new MIME types by implementing your own view and representation classes, and specifying the mapping between them using the [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) `WebView` class method.
- [WebFrameLoadDelegate](webframeloaddelegate.md): Deprecated.
