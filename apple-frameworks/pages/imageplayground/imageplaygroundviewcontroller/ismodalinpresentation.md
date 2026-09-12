> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/ismodalinpresentation](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/ismodalinpresentation)

# isModalInPresentation

**Framework:** Image Playground  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · visionOS 2.4+

A Boolean value indicating whether the view controller enforces a modal behavior.

## Declaration

```swift
@MainActor @preconcurrency override dynamic var isModalInPresentation: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The view controller prevents swiping or tapping away its interface if there are active changes.
