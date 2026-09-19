> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmlkit/tvdocumentviewcontroller/delegate

# delegate (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

The delegate for handling events in the document view controller.

> Please use SwiftUI or UIKit

## Declaration

```swift
weak var delegate: (any TVDocumentViewControllerDelegate)? { get set }
```

## See Also

### Managing Interactions with the Document

- [TVDocumentViewControllerDelegate](../tvdocumentviewcontrollerdelegate.md): Deprecated. Methods to manage updates, events, and errors from the document view controller.

# delegate (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

The delegate for handling events in the document view controller.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, weak) id<TVDocumentViewControllerDelegate> delegate;
```

## See Also

### Managing Interactions with the Document

- [TVDocumentViewControllerDelegate](../tvdocumentviewcontrollerdelegate.md): Deprecated. Methods to manage updates, events, and errors from the document view controller.
