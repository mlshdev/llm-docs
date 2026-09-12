> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axprefersheadanchoralternative()](https://developer.apple.com/documentation/accessibility/axprefersheadanchoralternative())

# AXPrefersHeadAnchorAlternative()

**Framework:** Accessibility  
**Kind:** Function  
**Availability:** visionOS 1.0+ (deprecated in 2.0)

Returns a Boolean value that indicates the person’s preference for content that follows their head position.

> Use [prefersHeadAnchorAlternative](accessibilitysettings/prefersheadanchoralternative.md) instead.

## Declaration

```swift
@backDeployed(before: visionOS 2.0)
func AXPrefersHeadAnchorAlternative() -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if the person doesn’t want content anchored to their head position, or `false` if anchoring content to the head position is acceptable.

<a id="discussion"></a>

## Discussion

On Apple Vision Pro, apps can create a heads-up display effect by setting up content to follow the person’s head position. This effect allows the content to remain in the same position, no matter where the person looks. However, some assistive technologies are incompatible with this type of content. For example, a technology might use the person’s head movements to control the current selection. Anchoring content to the head position prevents affected technologies from interacting with that content.

If your app contains head-anchored content, call this function before you display that content. If the function returns `true`, find alternate ways to display your content. For example, display it in a regular window.

## See Also

### Deprecated

- [AXAnimatedImagesEnabled()](axanimatedimagesenabled%28%29.md): Deprecated. Returns a Boolean value that indicates whether the system setting for Animated Images is on.
- [AXPrefersHorizontalTextLayout()](axprefershorizontaltextlayout%28%29.md): Deprecated. Returns a Boolean value that indicates whether the system setting for Prefer Horizontal Text is on.
