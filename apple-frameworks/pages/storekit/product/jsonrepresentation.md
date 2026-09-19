> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/jsonrepresentation

# jsonRepresentation

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The JSON representation of the product information.

## Declaration

```swift
var jsonRepresentation: Data { get }
```

<a id="Discussion"></a>

## Discussion

The [jsonRepresentation](jsonrepresentation.md) is UTF-8 string data. You can use the JSON data to decode the product information into your own data type instead of using the [Product](../product.md) value directly.
