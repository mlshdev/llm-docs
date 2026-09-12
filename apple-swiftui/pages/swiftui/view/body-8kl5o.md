> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/body-8kl5o](https://developer.apple.com/documentation/swiftui/view/body-8kl5o)

# body

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The content and behavior of the view.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency var body: Self.Body { get }
```

## Mentioned In

- [Declaring a custom view](../declaring-a-custom-view.md)

<a id="discussion"></a>

## Discussion

When you implement a custom view, you must implement a computed `body` property to provide the content for your view. Return a view that’s composed of built-in views that SwiftUI provides, plus other composite views that you’ve already defined:

```swift
struct MyView: View {
    var body: some View {
        Text("Hello, World!")
    }
}
```

For more information about composing views and a view hierarchy, see [Declaring a custom view](../declaring-a-custom-view.md).

## Default Implementations

### NSViewControllerRepresentable Implementations

- [body](../nsviewcontrollerrepresentable/body.md): Declares the content and behavior of this view.

### NSViewRepresentable Implementations

- [body](../nsviewrepresentable/body.md): Declares the content and behavior of this view.

### UIViewControllerRepresentable Implementations

- [body](../uiviewcontrollerrepresentable/body.md): Declares the content and behavior of this view.

### UIViewRepresentable Implementations

- [body](../uiviewrepresentable/body.md): Declares the content and behavior of this view.

### View Implementations

- [body](body-44706.md)

### WKInterfaceObjectRepresentable Implementations

- [body](../wkinterfaceobjectrepresentable/body.md): Declares the content and behavior of this view.

## See Also

### Implementing a custom view

- [Body](body-swift.associatedtype.md): The type of view representing the body of this view.
- [modifier(\_:)](modifier%28__%29.md): Applies a modifier to a view and returns a new view.
- [Previews in Xcode](../previews-in-xcode.md): Generate dynamic, interactive previews of your custom views.
