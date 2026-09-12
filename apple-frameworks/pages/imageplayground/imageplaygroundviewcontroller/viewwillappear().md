> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/viewwillappear()](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/viewwillappear())

# viewWillAppear()

**Framework:** Image Playground  
**Kind:** Instance Method  
**Availability:** macOS 15.1+

Notifies the view controller that its view is about to be added to a view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func viewWillAppear()
```

<a id="discussion"></a>

## Discussion

The view controller uses this method to configure its interface.

## See Also

### Managing the view

- [viewDidLoad()](viewdidload%28%29.md): Called after the controller’s view is loaded into memory.
- [viewDidDisappear()](viewdiddisappear%28%29.md): Notifies the view controller that its view is about to be removed from a view hierarchy.
