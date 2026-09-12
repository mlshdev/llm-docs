> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/setcontentoffset(_:animated:)](https://developer.apple.com/documentation/uikit/uiscrollview/setcontentoffset(_:animated:))

# setContentOffset(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the point at which the origin of the content view is offset from the origin of the scroll view.

## Declaration

```swift
func setContentOffset(_ contentOffset: CGPoint, animated: Bool)
```

## Parameters

- `contentOffset`: A point (expressed in points) that’s offset from the content view’s origin.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition at a constant velocity to the new offset, [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

## See Also

### Managing the content size and offset

- [contentSize](contentsize.md): The size of the content view.
- [contentOffset](contentoffset.md): The point at which the origin of the content view is offset from the origin of the scroll view.

# setContentOffset:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the point at which the origin of the content view is offset from the origin of the scroll view.

## Declaration

```objectivec
- (void) setContentOffset:(CGPoint) contentOffset animated:(BOOL) animated;
```

## Parameters

- `contentOffset`: A point (expressed in points) that’s offset from the content view’s origin.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition at a constant velocity to the new offset, [false](https://developer.apple.com/documentation/swift/false) to make the transition immediate.

## See Also

### Managing the content size and offset

- [contentSize](contentsize.md): The size of the content view.
- [contentOffset](contentoffset.md): The point at which the origin of the content view is offset from the origin of the scroll view.
