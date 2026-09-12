> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/productviewstyle/makebody(configuration:)](https://developer.apple.com/documentation/storekit/productviewstyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view that represents the body of a product view.

## Declaration

```swift
@ViewBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of a product view style.

## See Also

### Creating custom product views

- [ProductViewStyle.Configuration](configuration.md): A type that represents the properties of a product view style.
- [Body](body.md): A view that represents the body of a product view.
