> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/viewdiddisappear(_:)

# viewDidDisappear(\_:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

Performs some action after the view disappears.

## Declaration

```swift
@MainActor override dynamic func viewDidDisappear(_ animated: Bool)
```

## Parameters

- `animated`: A Boolean value that indicates whether the view disappears using an animation.

## See Also

### Responding to view controller events

- [loadView()](loadview%28%29.md): Creates the view that the controller manages.
- [viewDidLoad()](viewdidload%28%29.md): Performs some action after the system loads the view into memory.
- [viewWillAppear(\_:)](viewwillappear%28__%29.md): Performs some action before the view appears.
- [removeFromParent()](removefromparent%28%29.md): Removes the view controller from its parent.
