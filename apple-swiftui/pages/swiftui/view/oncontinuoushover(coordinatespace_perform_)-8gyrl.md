> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/oncontinuoushover(coordinatespace:perform:)-8gyrl](https://developer.apple.com/documentation/swiftui/view/oncontinuoushover(coordinatespace:perform:)-8gyrl)

# onContinuousHover(coordinateSpace:perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · tvOS 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.

> Use [onContinuousHover(coordinateSpace:perform:)](https://developer.apple.com/documentation/swiftui/view/oncontinuoushover%28coordinatespace:perform:%29-4ehfq) instead.

## Declaration

```swift
nonisolated func onContinuousHover(coordinateSpace: CoordinateSpace = .local, perform action: @escaping (HoverPhase) -> Void) -> some View

```

## Parameters

- `coordinateSpace`: The coordinate space for the location values. Defaults to [CoordinateSpace.local](../coordinatespace/local.md).
- `action`: The action to perform whenever the pointer enters, moves within, or exits the view’s bounds. The `action` closure passes the [HoverPhase.active(\_:)](../hoverphase/active%28__%29.md) phase with the pointer’s coordinates if the pointer is in the view’s bounds; otherwise, it passes [HoverPhase.ended](../hoverphase/ended.md).

<a id="return-value"></a>

## Return Value

A view that calls `action` when the pointer enters, moves within, or exits the view’s bounds.

<a id="discussion"></a>

## Discussion

Call this method to define a region for detecting pointer movement with the size and position of this view. The following example updates `hoverLocation` and `isHovering` to be based on the phase provided to the closure:

```swift
@State private var hoverLocation: CGPoint = .zero
@State private var isHovering = false

var body: some View {
    VStack {
        Color.red
            .frame(width: 400, height: 400)
            .onContinuousHover { phase in
                switch phase {
                case .active(let location):
                    hoverLocation = location
                    isHovering = true
                case .ended:
                    isHovering = false
                }
            }
            .overlay {
                Rectangle()
                    .frame(width: 50, height: 50)
                    .foregroundColor(isHovering ? .green : .blue)
                    .offset(x: hoverLocation.x, y: hoverLocation.y)
            }
    }
}
```
