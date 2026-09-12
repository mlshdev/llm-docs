> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/isbezeled](https://developer.apple.com/documentation/appkit/nsprogressindicator/isbezeled)

# isBezeled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 14.0)

A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.

> The bezeled property is not respected on 10.15 and later

## Declaration

```swift
var isBezeled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the progress indicator is bezeled.

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [isIndeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit()](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).
- [isDisplayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.

# bezeled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 14.0)

A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.

> The bezeled property is not respected on 10.15 and later

## Declaration

```objectivec
@property (getter=isBezeled) BOOL bezeled;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the progress indicator is bezeled.

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [indeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).
- [displayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.
