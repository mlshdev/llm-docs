> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvdocumentviewcontrollerdelegate/documentviewcontroller(_:handleevent:with:)](https://developer.apple.com/documentation/tvmlkit/tvdocumentviewcontrollerdelegate/documentviewcontroller(_:handleevent:with:))

# documentViewController(\_:handleEvent:with:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

Handles events natively from document view controllers.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func documentViewController(_ documentViewController: TVDocumentViewController, handleEvent event: TVDocumentViewController.Event, with element: TVViewElement) -> Bool
```

<a id="Discussion"></a>

## Discussion

By default, event handling can happen in either `TVMLKit` or `TVMLKit JS`. To defer event handling exclusively to `TVMLKit JS`, return `false` and don’t handle the event in this `TVMLKit` method. To assign event handling to `TVMLKit`, handle the event in this method and return `true`.

# documentViewController:handleEvent:withElement: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

Handles events natively from document view controllers.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (BOOL) documentViewController:(TVDocumentViewController *) documentViewController handleEvent:(TVDocumentEvent) event withElement:(TVViewElement *) element;
```

<a id="Discussion"></a>

## Discussion

By default, event handling can happen in either `TVMLKit` or `TVMLKit JS`. To defer event handling exclusively to `TVMLKit JS`, return `false` and don’t handle the event in this `TVMLKit` method. To assign event handling to `TVMLKit`, handle the event in this method and return `true`.
