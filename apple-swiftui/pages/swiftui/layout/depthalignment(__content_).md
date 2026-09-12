> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layout/depthalignment(_:content:)](https://developer.apple.com/documentation/swiftui/layout/depthalignment(_:content:))

# depthAlignment(\_:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Creates a layout view with the specified depth alignment.

## Declaration

```swift
nonisolated func depthAlignment<Content>(_ alignment: DepthAlignment, @ContentBuilder content: () -> Content) -> some View where Content : View

```

## Parameters

- `alignment`: A [DepthAlignment](../depthalignment.md) value to use for aligning layout’s subviews

<a id="discussion"></a>

## Discussion

Use `depthAlignment(_:content:)` to specify a depth guide for aligning subviews of this layout.

In the example below, the button to play the robot animation is aligned to the `.front` of the `HStack`.

```swift
   HStackLayout().depthAlignment(.front) {
       RobotModel()
       Button("Play animation") {
           playRobotAnimation()
       }
       .glassBackgroundEffect()
   }
```
