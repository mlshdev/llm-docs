> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/autoresizessubviews](https://developer.apple.com/documentation/uikit/uiview/autoresizessubviews)

# autoresizesSubviews (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.

## Declaration

```swift
var autoresizesSubviews: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the receiver adjusts the size of its subviews when its bounds change. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the resizing behavior

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.
- [UIView.ContentMode](contentmode-swift.enum.md): Options to specify how a view adjusts its content when its size changes.
- [sizeThatFits(\_:)](sizethatfits%28__%29.md): Asks the view to calculate and return the size that best fits the specified size.
- [sizeToFit()](sizetofit%28%29.md): Resizes and moves the receiver view so it just encloses its subviews.
- [autoresizingMask](autoresizingmask-swift.property.md): An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.

# autoresizesSubviews (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.

## Declaration

```objectivec
@property (nonatomic) BOOL autoresizesSubviews;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the receiver adjusts the size of its subviews when its bounds change. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the resizing behavior

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.
- [UIViewContentMode](contentmode-swift.enum.md): Options to specify how a view adjusts its content when its size changes.
- [sizeThatFits:](sizethatfits%28__%29.md): Asks the view to calculate and return the size that best fits the specified size.
- [sizeToFit](sizetofit%28%29.md): Resizes and moves the receiver view so it just encloses its subviews.
- [autoresizingMask](autoresizingmask-swift.property.md): An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.
