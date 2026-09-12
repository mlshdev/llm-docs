> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axanimatedimagesenabled()](https://developer.apple.com/documentation/accessibility/axanimatedimagesenabled())

# AXAnimatedImagesEnabled()

**Framework:** Accessibility  
**Kind:** Function  
**Availability:** iOS 17.0+ (deprecated in 18.0) · iPadOS 17.0+ (deprecated in 18.0) · Mac Catalyst 17.0+ (deprecated in 18.0) · macOS 14.0+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ · watchOS 10.0+ (deprecated in 11.0)

Returns a Boolean value that indicates whether the system setting for Animated Images is on.

> Use [animatedImagesEnabled](accessibilitysettings/animatedimagesenabled.md) instead.

## Declaration

```swift
@backDeployed(before: macOS 15.0, iOS 18.0, tvOS 18.0, watchOS 11.0, visionOS 2.0)
func AXAnimatedImagesEnabled() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system setting for Animated Images is on; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [AXPrefersHeadAnchorAlternative()](axprefersheadanchoralternative%28%29.md): Deprecated. Returns a Boolean value that indicates the person’s preference for content that follows their head position.
- [AXPrefersHorizontalTextLayout()](axprefershorizontaltextlayout%28%29.md): Deprecated. Returns a Boolean value that indicates whether the system setting for Prefer Horizontal Text is on.
