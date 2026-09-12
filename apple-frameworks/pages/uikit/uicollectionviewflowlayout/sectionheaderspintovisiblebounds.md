> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewflowlayout/sectionheaderspintovisiblebounds](https://developer.apple.com/documentation/uikit/uicollectionviewflowlayout/sectionheaderspintovisiblebounds)

# sectionHeadersPinToVisibleBounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether headers pin to the top of the collection view bounds during scrolling.

## Declaration

```swift
var sectionHeadersPinToVisibleBounds: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), section header views scroll with content until they reach the top of the screen, at which point they are pinned to the upper bounds of the collection view. Each new header view that scrolls to the top of the screen pushes the previously pinned header view offscreen.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Pinning headers and footers

- [sectionFootersPinToVisibleBounds](sectionfooterspintovisiblebounds.md): A Boolean value that indicates whether footers pin to the bottom of the collection view bounds during scrolling.

# sectionHeadersPinToVisibleBounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether headers pin to the top of the collection view bounds during scrolling.

## Declaration

```objectivec
@property (nonatomic) BOOL sectionHeadersPinToVisibleBounds;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), section header views scroll with content until they reach the top of the screen, at which point they are pinned to the upper bounds of the collection view. Each new header view that scrolls to the top of the screen pushes the previously pinned header view offscreen.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Pinning headers and footers

- [sectionFootersPinToVisibleBounds](sectionfooterspintovisiblebounds.md): A Boolean value that indicates whether footers pin to the bottom of the collection view bounds during scrolling.
