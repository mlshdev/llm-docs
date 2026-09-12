> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvbrowserviewcontrollerdelegate](https://developer.apple.com/documentation/tvmlkit/tvbrowserviewcontrollerdelegate)

# TVBrowserViewControllerDelegate (Swift)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 13.0+

Methods for detecting events and performing actions on the browser view.

## Declaration

```swift
protocol TVBrowserViewControllerDelegate : NSObjectProtocol
```

## Topics

### Managing Focus

- [browserViewController(\_:didCenterOn:)](tvbrowserviewcontrollerdelegate/browserviewcontroller%28__didcenteron_%29.md): Tells the delegate how to respond when the specified view element completes the transition to becoming centered upon.
- [browserViewController(\_:willCenterOn:)](tvbrowserviewcontrollerdelegate/browserviewcontroller%28__willcenteron_%29.md): Tells the delegate when the specified view element is to be centered on the page.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Interactions with the Browser

- [delegate](tvbrowserviewcontroller/delegate.md): The object that acts as the delegate and handles callbacks for the browser view.

# TVBrowserViewControllerDelegate (Objective-C)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 13.0+

Methods for detecting events and performing actions on the browser view.

## Declaration

```objectivec
@protocol TVBrowserViewControllerDelegate <NSObject>
```

## Topics

### Managing Focus

- [browserViewController:didCenterOnViewElement:](tvbrowserviewcontrollerdelegate/browserviewcontroller%28__didcenteron_%29.md): Tells the delegate how to respond when the specified view element completes the transition to becoming centered upon.
- [browserViewController:willCenterOnViewElement:](tvbrowserviewcontrollerdelegate/browserviewcontroller%28__willcenteron_%29.md): Tells the delegate when the specified view element is to be centered on the page.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Interactions with the Browser

- [delegate](tvbrowserviewcontroller/delegate.md): The object that acts as the delegate and handles callbacks for the browser view.
