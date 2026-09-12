> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/product/plugin(name:targets:)](https://developer.apple.com/documentation/packagedescription/product/plugin(name:targets:))

# plugin(name:targets:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.5+

Defines a product that vends a package plugin target for use by clients of the package.

## Declaration

```swift
static func plugin(name: String, targets: [String]) -> Product
```

## Parameters

- `name`: The name of the plugin product.
- `targets`: The plugin targets to vend as a product.

<a id="return-value"></a>

## Return Value

A `Product` instance.

<a id="discussion"></a>

## Discussion

It is not necessary to define a product for a plugin that is only used within the same package where you define it. All the targets listed must be plugin targets in the same package as the product. Swift Package Manager will apply them to any client targets of the product in the order they are listed.

## See Also

### Creating a Plugin Product

- [Product.Plugin](plugin.md): The plug-in product of a Swift package.
