> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvdocumentviewcontrollerdelegate/documentviewcontroller(_:didupdatewithcontext:)](https://developer.apple.com/documentation/tvmlkit/tvdocumentviewcontrollerdelegate/documentviewcontroller(_:didupdatewithcontext:))

# documentViewController(\_:didUpdateWithContext:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

Tells the delegate that the document has been updated with a specified context.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func documentViewController(_ documentViewController: TVDocumentViewController, didUpdateWithContext context: [String : Any])
```

## See Also

### Managing Document Updates

- [documentViewControllerWillUpdate(\_:)](documentviewcontrollerwillupdate%28__%29.md): Deprecated. Tells the delegate that the document will be updated.
- [documentViewControllerDidUpdate(\_:)](documentviewcontrollerdidupdate%28__%29.md): Deprecated. Tells the delegate that the document has been updated.

# documentViewController:didUpdateWithContext: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

Tells the delegate that the document has been updated with a specified context.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (void) documentViewController:(TVDocumentViewController *) documentViewController didUpdateWithContext:(NSDictionary<NSString *,id> *) context;
```

## See Also

### Managing Document Updates

- [documentViewControllerWillUpdate:](documentviewcontrollerwillupdate%28__%29.md): Deprecated. Tells the delegate that the document will be updated.
- [documentViewControllerDidUpdate:](documentviewcontrollerdidupdate%28__%29.md): Deprecated. Tells the delegate that the document has been updated.
