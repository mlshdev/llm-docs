> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/viewdiddisappear()](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/viewdiddisappear())

# viewDidDisappear()

**Framework:** Image Playground  
**Kind:** Instance Method  
**Availability:** macOS 15.1+

Notifies the view controller that its view is about to be removed from a view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func viewDidDisappear()
```

<a id="discussion"></a>

## Discussion

The view controller uses this method to remove its interface configurations.

## See Also

### Managing the view

- [viewDidLoad()](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [viewWillAppear()](viewwillappear%28%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
