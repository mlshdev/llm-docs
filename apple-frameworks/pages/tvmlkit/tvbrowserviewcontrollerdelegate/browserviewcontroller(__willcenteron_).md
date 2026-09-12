> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvbrowserviewcontrollerdelegate/browserviewcontroller(_:willcenteron:)](https://developer.apple.com/documentation/tvmlkit/tvbrowserviewcontrollerdelegate/browserviewcontroller(_:willcenteron:))

# browserViewController(\_:willCenterOn:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Tells the delegate when the specified view element is to be centered on the page.

## Declaration

```swift
optional func browserViewController(_ browserViewController: TVBrowserViewController, willCenterOn viewElement: TVViewElement)
```

## See Also

### Managing Focus

- [browserViewController(\_:didCenterOn:)](browserviewcontroller%28__didcenteron_%29.md): Tells the delegate how to respond when the specified view element completes the transition to becoming centered upon.

# browserViewController:willCenterOnViewElement: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Tells the delegate when the specified view element is to be centered on the page.

## Declaration

```objectivec
- (void) browserViewController:(TVBrowserViewController *) browserViewController willCenterOnViewElement:(TVViewElement *) viewElement;
```

## See Also

### Managing Focus

- [browserViewController:didCenterOnViewElement:](browserviewcontroller%28__didcenteron_%29.md): Tells the delegate how to respond when the specified view element completes the transition to becoming centered upon.
