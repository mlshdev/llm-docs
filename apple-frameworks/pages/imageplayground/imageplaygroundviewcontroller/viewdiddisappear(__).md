> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/viewdiddisappear(_:)](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/viewdiddisappear(_:))

# viewDidDisappear(\_:)

**Framework:** Image Playground  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · visionOS 2.4+

Notifies the view controller that its view is about to be removed from a view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func viewDidDisappear(_ animated: Bool)
```

<a id="discussion"></a>

## Discussion

The view controller uses this method to remove its interface configurations.
