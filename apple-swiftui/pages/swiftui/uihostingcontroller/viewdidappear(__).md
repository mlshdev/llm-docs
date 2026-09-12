> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingcontroller/viewdidappear(_:)](https://developer.apple.com/documentation/swiftui/uihostingcontroller/viewdidappear(_:))

# viewDidAppear(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

Notifies the view controller that its view has been added to a view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func viewDidAppear(_ animated: Bool)
```

## Parameters

- `animated`: If `true`, the view is being added using an animation.

<a id="discussion"></a>

## Discussion

SwiftUI calls this method after adding the hosting controller’s root view to the view hierarchy. You can override this method to perform custom tasks associated with the appearance of the view. If you override this method, you must call `super` at some point in your implementation.

## See Also

### Responding to view-related events

- [loadView()](loadview%28%29.md)
- [viewWillAppear(\_:)](viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewWillDisappear(\_:)](viewwilldisappear%28__%29.md): Notifies the view controller that its view will be removed from a view hierarchy.
- [viewDidDisappear(\_:)](viewdiddisappear%28__%29.md)
- [willMove(toParent:)](willmove%28toparent_%29.md)
- [didMove(toParent:)](didmove%28toparent_%29.md)
- [viewWillTransition(to:with:)](viewwilltransition%28to_with_%29.md)
- [viewWillLayoutSubviews()](viewwilllayoutsubviews%28%29.md)
- [target(forAction:withSender:)](target%28foraction_withsender_%29.md)
- [rootView](rootview.md): The root view of the SwiftUI view hierarchy managed by this view controller.
