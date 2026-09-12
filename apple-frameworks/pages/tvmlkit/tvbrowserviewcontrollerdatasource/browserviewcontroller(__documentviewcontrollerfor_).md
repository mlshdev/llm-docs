> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvbrowserviewcontrollerdatasource/browserviewcontroller(_:documentviewcontrollerfor:)](https://developer.apple.com/documentation/tvmlkit/tvbrowserviewcontrollerdatasource/browserviewcontroller(_:documentviewcontrollerfor:))

# browserViewController(\_:documentViewControllerFor:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Provides the document view controller to be used for a particular child of the full-screen browser.

## Declaration

```swift
func browserViewController(_ browserViewController: TVBrowserViewController, documentViewControllerFor viewElement: TVViewElement) -> TVDocumentViewController?
```

# browserViewController:documentViewControllerForElement: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Provides the document view controller to be used for a particular child of the full-screen browser.

## Declaration

```objectivec
- (TVDocumentViewController *) browserViewController:(TVBrowserViewController *) browserViewController documentViewControllerForElement:(TVViewElement *) viewElement;
```
