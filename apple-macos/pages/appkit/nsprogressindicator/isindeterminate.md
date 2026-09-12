> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/isindeterminate](https://developer.apple.com/documentation/appkit/nsprogressindicator/isindeterminate)

# isIndeterminate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the progress indicator is indeterminate.

## Declaration

```swift
var isIndeterminate: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A determinate indicator displays how much of the task has been completed. An indeterminate indicator shows simply that the app is busy.

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the progress indicator is indeterminate; otherwise, it is determinate.

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [isBezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit()](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).
- [isDisplayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.

# indeterminate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the progress indicator is indeterminate.

## Declaration

```objectivec
@property (getter=isIndeterminate) BOOL indeterminate;
```

<a id="Discussion"></a>

## Discussion

A determinate indicator displays how much of the task has been completed. An indeterminate indicator shows simply that the app is busy.

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the progress indicator is indeterminate; otherwise, it is determinate.

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [bezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).
- [displayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.
