> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewcontrollerrepresentablecontext/animate(changes:completion:)](https://developer.apple.com/documentation/swiftui/nsviewcontrollerrepresentablecontext/animate(changes:completion:))

# animate(changes:completion:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Animates changes using the animation in the current transaction.

## Declaration

```swift
@backDeployed(before: macOS 15.4)
@MainActor @preconcurrency func animate(changes: () -> Void, completion: (() -> Void)? = nil)
```

## Parameters

- `changes`: A closure that changes animatable properties.
- `completion`: A closure to execute after the animation completes.

<a id="discussion"></a>

## Discussion

This combines doc://com.apple.documentation/documentation/appkit/nsanimationcontext/4433144-animate with the current transaction’s animation. When you start a SwiftUI animation using [withAnimation(\_:\_:)](../withanimation%28____%29.md) and have a mutated SwiftUI state that causes the representable object to update, use this method to animate changes in the representable object using the same `Animation` timing.

```swift
struct ContentView: View {
    @State private var isCollapsed = false
    var body: some View {
        ZStack {
            MyDetailView(isCollapsed: isCollapsed)
            MyRepresentable(isCollapsed: $isCollapsed)
            Button("Collapse Content") {
                withAnimation(.bouncy) {
                    isCollapsed = true
                }
            }
        }
    }
}

struct MyRepresentable: NSViewControllerRepresentable {
    @Binding var isCollapsed: Bool

    func updateNSViewController(_ nsViewController: NSViewControllerType, context: Context) {
        if isCollapsed && !nsViewController.view.isCollapsed {
            context.animate {
                nsViewController.view.collapseSubview()
                nsViewController.view.layoutSubtreeIfNeeded()
            }
        }
    }
}
```
