> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/purchase](https://developer.apple.com/documentation/swiftui/environmentvalues/purchase)

# purchase

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An action that starts an in-app purchase.

## Declaration

```swift
@MainActor @preconcurrency var purchase: PurchaseAction { get }
```

<a id="discussion"></a>

## Discussion

Read this environment value to get an `PurchaseAction` instance for a given [Environment](../environment.md). Call the instance to start an in-app purchase. You call the instance directly because it defines a `PurchaseAction/callAsFunction(_:options:)` method that Swift calls when you call the instance.

For example, you can start an in-app purchase when the user taps a button:

```swift
struct PurchaseExample: View {
    @Environment(\.purchase) private var purchase
    let product: Product
    let purchaseOptions: [Product.PurchaseOption]

    var body: some View {
        Button {
            Task {
                let purchaseResult = try? await purchase(product, options: purchaseOptions)
                // Process purchase result.
            }
        } label: {
            Text(product.displayName)
        }
    }
}
```

## See Also

### Actions

- [dismiss](dismiss.md): An action that dismisses the current presentation.
- [dismissSearch](dismisssearch.md): An action that ends the current search interaction.
- [dismissWindow](dismisswindow.md): A window dismissal action stored in a view’s environment.
- [openImmersiveSpace](openimmersivespace.md): An action that presents an immersive space.
- [dismissImmersiveSpace](dismissimmersivespace.md): An immersive space dismissal action stored in a view’s environment.
- [newDocument](newdocument.md): An action in the environment that presents a new document.
- [openDocument](opendocument.md): An action in the environment that presents an existing document.
- [openURL](openurl.md): An action that opens a URL.
- [openWindow](openwindow.md): A window presentation action stored in a view’s environment.
- [pushWindow](pushwindow.md): A window presentation action stored in a view’s environment.
- [refresh](refresh.md): A refresh action stored in a view’s environment.
- [rename](rename.md): An action that activates the standard rename interaction.
- [resetFocus](resetfocus.md): An action that requests the focus system to reevaluate default focus.
- [openSettings](opensettings.md): A Settings presentation action stored in a view’s environment.
