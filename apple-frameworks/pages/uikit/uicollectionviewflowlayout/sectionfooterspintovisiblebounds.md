> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayout/sectionfooterspintovisiblebounds](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout/sectionfooterspintovisiblebounds)

# sectionFootersPinToVisibleBounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether footers pin to the bottom of the collection view bounds during scrolling.

## Declaration

```swift
var sectionFootersPinToVisibleBounds: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), section footer views scroll with content until they reach the bottom of the screen, at which point they are pinned to the lower bounds of the collection view. Each new footer view that scrolls to the bottom of the screen pushes the previously pinned footer view offscreen.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Pinning headers and footers

- [sectionHeadersPinToVisibleBounds](sectionheaderspintovisiblebounds.md): A Boolean value that indicates whether headers pin to the top of the collection view bounds during scrolling.

# sectionFootersPinToVisibleBounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether footers pin to the bottom of the collection view bounds during scrolling.

## Declaration

```objectivec
@property (nonatomic) BOOL sectionFootersPinToVisibleBounds;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), section footer views scroll with content until they reach the bottom of the screen, at which point they are pinned to the lower bounds of the collection view. Each new footer view that scrolls to the bottom of the screen pushes the previously pinned footer view offscreen.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Pinning headers and footers

- [sectionHeadersPinToVisibleBounds](sectionheaderspintovisiblebounds.md): A Boolean value that indicates whether headers pin to the top of the collection view bounds during scrolling.
