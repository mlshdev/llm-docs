> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/viewdidload()](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/viewdidload())

# viewDidLoad()

**Framework:** Image Playground  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

Called after the controller’s view is loaded into memory.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func viewDidLoad()
```

<a id="discussion"></a>

## Discussion

The view controller uses this method to configure its interface.

## See Also

### Managing the view

- [viewDidDisappear()](viewdiddisappear%28%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
- [viewWillAppear()](viewwillappear%28%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
