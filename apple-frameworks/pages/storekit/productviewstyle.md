> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/productviewstyle](https://developer.apple.com/documentation/storekit/productviewstyle)

# ProductViewStyle

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that specifies the appearance and interaction of In-App Purchase products within the view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency protocol ProductViewStyle
```

<a id="overview"></a>

## Overview

To configure the in-app purchase product style for a view hierarchy, use the [productViewStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/productviewstyle%28_:%29) modifier.

To create a custom style, declare a type that conforms to the `ProductViewStyle` protocol. Implement the [makeBody(configuration:)](productviewstyle/makebody%28configuration_%29.md) method to return a view that composes the elements of the configuration that the system provides to your method. The following code example shows how to create a custom product view style:

```swift
struct CustomProductViewStyle: ProductViewStyle {
    func makeBody(configuration: Configuration) -> some View {
        switch configuration.state {
        // Add other cases here.
        case .success(let product):
            VStack(alignment: .center) {
                configuration.icon
                Text(product.displayName)
                Button(product.displayPrice) {}
            }
        }
    }
}

ProductView(id: "com.example.product")
    .productViewStyle(CustomProductViewStyle())
    // Add your code here.
```

## Topics

### Getting built-in product view styles

- [automatic](productviewstyle/automatic.md): Conforms when `Self` is `AutomaticProductViewStyle`.
- [compact](productviewstyle/compact.md): Conforms when `Self` is `CompactProductViewStyle`. An product view style suitable for layouts where less space is available, or for displaying more items in a small amount of space.
- [large](productviewstyle/large.md): Conforms when `Self` is `LargeProductViewStyle`. A product view style suitable for layouts where the in-app purchase content is prominent.
- [regular](productviewstyle/regular.md): Conforms when `Self` is `RegularProductViewStyle`. A product view style that uses a standard, platform-appropriate layout.

### Creating custom product views

- [makeBody(configuration:)](productviewstyle/makebody%28configuration_%29.md): Creates a view that represents the body of a product view.
- [ProductViewStyle.Configuration](productviewstyle/configuration.md): A type that represents the properties of a product view style.
- [Body](productviewstyle/body.md): A view that represents the body of a product view.

### Supporting types

- [AutomaticProductViewStyle](automaticproductviewstyle.md)
- [CompactProductViewStyle](compactproductviewstyle.md): A style for a product view that’s suitable for layouts with less available space, or for displaying more items in a small amount of space.
- [RegularProductViewStyle](regularproductviewstyle.md): A style for a product view that uses a standard, platform-appropriate layout.
- [LargeProductViewStyle](largeproductviewstyle.md): A style for a product view that’s suitable for layouts where the in-app purchase content is prominent.

## Relationships

### Conforming Types

- [AutomaticProductViewStyle](automaticproductviewstyle.md)
- [CompactProductViewStyle](compactproductviewstyle.md)
- [LargeProductViewStyle](largeproductviewstyle.md)
- [RegularProductViewStyle](regularproductviewstyle.md)

## See Also

### Styling product views

- [productViewStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/productviewstyle%28_:%29): Sets the style for In-App Purchase product views within a view.
- [productIconBorder()](https://developer.apple.com/documentation/swiftui/view/producticonborder%28%29): Adds a standard border to an in-app purchase product’s icon .
- [ProductViewStyleConfiguration](productviewstyleconfiguration.md): The properties of an In-App Purchase product for use by custom product view styles.
