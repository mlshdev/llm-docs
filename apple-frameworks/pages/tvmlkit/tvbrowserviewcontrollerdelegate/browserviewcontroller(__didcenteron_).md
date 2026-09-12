> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvbrowserviewcontrollerdelegate/browserviewcontroller(_:didcenteron:)](https://developer.apple.com/documentation/tvmlkit/tvbrowserviewcontrollerdelegate/browserviewcontroller(_:didcenteron:))

# browserViewController(\_:didCenterOn:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Tells the delegate how to respond when the specified view element completes the transition to becoming centered upon.

## Declaration

```swift
optional func browserViewController(_ browserViewController: TVBrowserViewController, didCenterOn viewElement: TVViewElement)
```

## See Also

### Managing Focus

- [browserViewController(\_:willCenterOn:)](browserviewcontroller%28__willcenteron_%29.md): Tells the delegate when the specified view element is to be centered on the page.

# browserViewController:didCenterOnViewElement: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Tells the delegate how to respond when the specified view element completes the transition to becoming centered upon.

## Declaration

```objectivec
- (void) browserViewController:(TVBrowserViewController *) browserViewController didCenterOnViewElement:(TVViewElement *) viewElement;
```

## See Also

### Managing Focus

- [browserViewController:willCenterOnViewElement:](browserviewcontroller%28__willcenteron_%29.md): Tells the delegate when the specified view element is to be centered on the page.
