> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/preferredcontentsize

# preferredContentSize

**Framework:** Image Playground  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · visionOS 2.4+

The preferred size for the view controller’s view.

## Declaration

```swift
@MainActor @preconcurrency override dynamic var preferredContentSize: CGSize { get set }
```

<a id="discussion"></a>

## Discussion

The view controller overrides this method to establish its preferred content size in visionOS. Changing the value of this property has no effect in visionOS.
