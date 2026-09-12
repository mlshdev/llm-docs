> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layout/depthalignment(_:)](https://developer.apple.com/documentation/swiftui/layout/depthalignment(_:))

# depthAlignment(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Sets the depth alignment for this layout.

## Declaration

```swift
func depthAlignment(_ alignment: DepthAlignment) -> some Layout

```

## Parameters

- `alignment`: A [DepthAlignment](../depthalignment.md) value to use for aligning layout’s subviews

<a id="discussion"></a>

## Discussion

Use `depthAlignment(_:)` to specify a depth guide for aligning subviews of this layout.

In the example below, the button to play the robot animation is aligned to the `.front` of the `HStack`.

```swift
   let depthStack = HStackLayout().depthAlignment(.front)
   depthStack {
       RobotModel()
       Button("Play animation") {
           playRobotAnimation()
       }
       .glassBackgroundEffect()
   }
```
