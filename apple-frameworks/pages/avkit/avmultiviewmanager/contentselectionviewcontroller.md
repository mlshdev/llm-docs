> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avmultiviewmanager/contentselectionviewcontroller](https://developer.apple.com/documentation/avkit/avmultiviewmanager/contentselectionviewcontroller)

# contentSelectionViewController

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

A view controller that presents a user interface to select additional video content to display.

## Declaration

```swift
@MainActor final var contentSelectionViewController: AVContentSelectionViewController? { get set }
```

<a id="Discussion"></a>

## Discussion

Implement this property to add custom user interface elements. The primary role of this interface is to provide a way for people to add videos.

## See Also

### Providing additional UI

- [AVContentSelectionViewController](../avcontentselectionviewcontroller.md): A view controller for providing additional UI to the multiview experience.
