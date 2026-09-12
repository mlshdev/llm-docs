> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/allowswindowactivationevents(_:)](https://developer.apple.com/documentation/swiftui/view/allowswindowactivationevents(_:))

# allowsWindowActivationEvents(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Configures whether gestures in this view hierarchy can handle events that activate the containing window.

## Declaration

```swift
nonisolated func allowsWindowActivationEvents(_ value: Bool?) -> some View

```

## Parameters

- `value`: A Boolean value that indicates whether gestures in this view hierarchy can handle events that activate the containing window. If `nil`, or if the modifier is not present, the behavior will be inherited from the view’s ancestors.

<a id="discussion"></a>

## Discussion

Views higher in the hierarchy can override the value you set on this view. In the following example, the tap gesture on the `Rectangle` won’t handle events that activate the containing window because the outer `allowsWindowActivationEvents(_:)` view modifier overrides the inner one:

```swift
HStack {
    Rectangle()
        .onTapGesture { ... }
        .allowsWindowActivationEvents()
}
.allowsWindowActivationEvents(false)
```

> **Note**

> It’s only possible to disallow handling events that activate the containing window for views that allow it by default or that inherit this behavior from their ancestors. Views that explicitly already disallow this functionality can’t have it turned on.

> **Note**

> Prefer using [allowsWindowActivationEvents()](allowswindowactivationevents%28%29.md) if the parameter is always `true` and it never changes.
