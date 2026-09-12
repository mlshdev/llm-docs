> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/productview/init(_:)](https://developer.apple.com/documentation/storekit/productview/init(_:))

# init(\_:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to merchandise an individual product using a configuration for product view style.

## Declaration

```swift
nonisolated init(_ configuration: ProductViewStyleConfiguration) where Icon == ProductViewStyleConfiguration.Icon, PlaceholderIcon == ProductViewStyleConfiguration.Icon
```

## Parameters

- `configuration`: A configuration for a product view style.

<a id="Discussion"></a>

## Discussion

Use this initializer within the [makeBody(configuration:)](../productviewstyle/makebody%28configuration_%29.md) method of a [ProductViewStyle](../productviewstyle.md) to create an instance of the product view you want to style. This is useful for custom product view styles that modify the current style, rather than implementing a new style.

The following code example shows how to create and use custom styles by composing standard styles:

```swift
struct SpinnerWhenLoadingStyle: ProductViewStyle {
    public func makeBody(configuration: Configuration) -> some View {
        switch configuration.state {
        case .loading:
            ProgressView()
                .progressView(.circular)
        default:
            ProductView(configuration)
        }
    }
}
// Use the following elsewhere in the code.
ProductView(id: "com.example.product")
    .productViewStyle(SpinnerWhenLoadingStyle())
```
