> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/sizethatfits(_:)](https://developer.apple.com/documentation/uikit/uiview/sizethatfits(_:))

# sizeThatFits(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the view to calculate and return the size that best fits the specified size.

## Declaration

```swift
func sizeThatFits(_ size: CGSize) -> CGSize
```

## Parameters

- `size`: The size for which the view should calculate its best-fitting size.

<a id="return-value"></a>

## Return Value

A new size that fits the receiver’s subviews.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the existing size of the view. Subclasses can override this method to return a custom value based on the desired layout of any subviews. For example, a [UISwitch](../uiswitch.md) object returns a fixed size value that represents the standard size of a switch view, and a [UIImageView](../uiimageview.md) object returns the size of the image it is currently displaying.

This method does not resize the receiver.

## See Also

### Related Documentation

- [frame](frame.md): The frame rectangle, which describes the view’s location and size in its superview’s coordinate system.
- [bounds](bounds.md): The bounds rectangle, which describes the view’s location and size in its own coordinate system.

### Configuring the resizing behavior

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.
- [UIView.ContentMode](contentmode-swift.enum.md): Options to specify how a view adjusts its content when its size changes.
- [sizeToFit()](sizetofit%28%29.md): Resizes and moves the receiver view so it just encloses its subviews.
- [autoresizesSubviews](autoresizessubviews.md): A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.
- [autoresizingMask](autoresizingmask-swift.property.md): An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.

# sizeThatFits: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Asks the view to calculate and return the size that best fits the specified size.

## Declaration

```objectivec
- (CGSize) sizeThatFits:(CGSize) size;
```

## Parameters

- `size`: The size for which the view should calculate its best-fitting size.

<a id="return-value"></a>

## Return Value

A new size that fits the receiver’s subviews.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the existing size of the view. Subclasses can override this method to return a custom value based on the desired layout of any subviews. For example, a [UISwitch](../uiswitch.md) object returns a fixed size value that represents the standard size of a switch view, and a [UIImageView](../uiimageview.md) object returns the size of the image it is currently displaying.

This method does not resize the receiver.

## See Also

### Related Documentation

- [frame](frame.md): The frame rectangle, which describes the view’s location and size in its superview’s coordinate system.
- [bounds](bounds.md): The bounds rectangle, which describes the view’s location and size in its own coordinate system.

### Configuring the resizing behavior

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.
- [UIViewContentMode](contentmode-swift.enum.md): Options to specify how a view adjusts its content when its size changes.
- [sizeToFit](sizetofit%28%29.md): Resizes and moves the receiver view so it just encloses its subviews.
- [autoresizesSubviews](autoresizessubviews.md): A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.
- [autoresizingMask](autoresizingmask-swift.property.md): An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.
