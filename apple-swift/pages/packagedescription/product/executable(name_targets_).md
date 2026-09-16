> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/product/executable(name:targets:)

# executable(name:targets:)

**Framework:** PackageDescription  
**Kind:** Type Method

Creates an executable package product.

## Declaration

```swift
static func executable(name: String, targets: [String]) -> Product
```

## Parameters

- `name`: The name of the executable product.
- `targets`: The targets to bundle into an executable product.

<a id="return-value"></a>

## Return Value

A `Product` instance.

## See Also

### Creating an Executable Product

- [Product.Executable](executable.md): The executable product of a Swift package.
