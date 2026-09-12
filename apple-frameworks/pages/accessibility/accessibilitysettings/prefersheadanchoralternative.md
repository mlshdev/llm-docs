> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/accessibilitysettings/prefersheadanchoralternative](https://developer.apple.com/documentation/accessibility/accessibilitysettings/prefersheadanchoralternative)

# prefersHeadAnchorAlternative

**Framework:** Accessibility  
**Kind:** Type Property  
**Availability:** visionOS 2.0+

A Boolean value that indicates the person’s preference for content that follows their head position.

## Declaration

```swift
static var prefersHeadAnchorAlternative: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` if the person doesn’t want content anchored to their head position, or `false` if anchoring content to the head position is acceptable.

On Apple Vision Pro, apps can create a heads-up display effect by setting up content to follow the person’s head position. This effect allows the content to remain in the same position, no matter where the person looks. However, some assistive technologies are incompatible with this type of content. For example, a technology might use the person’s head movements to control the current selection. Anchoring content to the head position prevents affected technologies from interacting with that content.

If your app contains head-anchored content, call this function before you display that content. If the function returns `true`, find alternate ways to display your content. For example, display it in a regular window.

## See Also

### Head-anchored content

- [prefersHeadAnchorAlternativeDidChangeNotification](prefersheadanchoralternativedidchangenotification.md): A notification that posts when the system setting for head-anchored content changes.
