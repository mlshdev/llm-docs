> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvdocumentviewcontrollerdelegate](https://developer.apple.com/documentation/tvmlkit/tvdocumentviewcontrollerdelegate)

# TVDocumentViewControllerDelegate (Swift)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

Methods to manage updates, events, and errors from the document view controller.

> Please use SwiftUI or UIKit

## Declaration

```swift
protocol TVDocumentViewControllerDelegate : NSObjectProtocol
```

## Topics

### Managing Document Updates

- [documentViewControllerWillUpdate(\_:)](tvdocumentviewcontrollerdelegate/documentviewcontrollerwillupdate%28__%29.md): Deprecated. Tells the delegate that the document will be updated.
- [documentViewControllerDidUpdate(\_:)](tvdocumentviewcontrollerdelegate/documentviewcontrollerdidupdate%28__%29.md): Deprecated. Tells the delegate that the document has been updated.
- [documentViewController(\_:didUpdateWithContext:)](tvdocumentviewcontrollerdelegate/documentviewcontroller%28__didupdatewithcontext_%29.md): Deprecated. Tells the delegate that the document has been updated with a specified context.

### Responding to Errors

- [documentViewController(\_:didFailUpdateWithError:)](tvdocumentviewcontrollerdelegate/documentviewcontroller%28__didfailupdatewitherror_%29.md): Deprecated. Tells the delegate that the document failed to update.

### Handling Events

- [documentViewController(\_:handleEvent:with:)](tvdocumentviewcontrollerdelegate/documentviewcontroller%28__handleevent_with_%29.md): Deprecated. Handles events natively from document view controllers.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Interactions with the Document

- [delegate](tvdocumentviewcontroller/delegate.md): Deprecated. The delegate for handling events in the document view controller.

# TVDocumentViewControllerDelegate (Objective-C)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

Methods to manage updates, events, and errors from the document view controller.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@protocol TVDocumentViewControllerDelegate <NSObject>
```

## Topics

### Managing Document Updates

- [documentViewControllerWillUpdate:](tvdocumentviewcontrollerdelegate/documentviewcontrollerwillupdate%28__%29.md): Deprecated. Tells the delegate that the document will be updated.
- [documentViewControllerDidUpdate:](tvdocumentviewcontrollerdelegate/documentviewcontrollerdidupdate%28__%29.md): Deprecated. Tells the delegate that the document has been updated.
- [documentViewController:didUpdateWithContext:](tvdocumentviewcontrollerdelegate/documentviewcontroller%28__didupdatewithcontext_%29.md): Deprecated. Tells the delegate that the document has been updated with a specified context.

### Responding to Errors

- [documentViewController:didFailUpdateWithError:](tvdocumentviewcontrollerdelegate/documentviewcontroller%28__didfailupdatewitherror_%29.md): Deprecated. Tells the delegate that the document failed to update.

### Handling Events

- [documentViewController:handleEvent:withElement:](tvdocumentviewcontrollerdelegate/documentviewcontroller%28__handleevent_with_%29.md): Deprecated. Handles events natively from document view controllers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Interactions with the Document

- [delegate](tvdocumentviewcontroller/delegate.md): Deprecated. The delegate for handling events in the document view controller.
