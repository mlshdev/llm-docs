> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uiviewcontrollerrepresentable/sizethatfits(_:uiviewcontroller:context:)](https://developer.apple.com/documentation/swiftui/uiviewcontrollerrepresentable/sizethatfits(_:uiviewcontroller:context:))

# sizeThatFits(\_:uiViewController:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Given a proposed size, returns the preferred size of the composite view.

## Declaration

```swift
@MainActor @preconcurrency func sizeThatFits(_ proposal: ProposedViewSize, uiViewController: Self.UIViewControllerType, context: Self.Context) -> CGSize?
```

## Parameters

- `proposal`: The proposed size for the view controller.
- `uiViewController`: Your custom view controller object.
- `context`: A context structure containing information about the current state of the system.

<a id="return-value"></a>

## Return Value

The composite size of the represented view controller. Returning a value of `nil` indicates that the system should use the default sizing algorithm.

<a id="discussion"></a>

## Discussion

This method may be called more than once with different proposed sizes during the same layout pass. SwiftUI views choose their own size, so one of the values returned from this function will always be used as the actual size of the composite view.

## Default Implementations

### UIViewControllerRepresentable Implementations

- [sizeThatFits(\_:uiViewController:context:)](sizethatfits%28__uiviewcontroller_context_%29-7x9zd.md): Given a proposed size, returns the preferred size of the composite view.
