> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/isdisplayedwhenstopped](https://developer.apple.com/documentation/appkit/nsprogressindicator/isdisplayedwhenstopped)

# isDisplayedWhenStopped (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.

## Declaration

```swift
var isDisplayedWhenStopped: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the progress indicator is hidden when it isn’t animating. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [isBezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [isIndeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit()](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).

# displayedWhenStopped (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.

## Declaration

```objectivec
@property (getter=isDisplayedWhenStopped) BOOL displayedWhenStopped;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the progress indicator is hidden when it isn’t animating. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [bezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [indeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).
