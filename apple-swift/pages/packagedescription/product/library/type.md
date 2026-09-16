> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/product/library/type

# type

**Framework:** PackageDescription  
**Kind:** Instance Property

The type of the library.

## Declaration

```swift
final let type: Product.Library.LibraryType?
```

<a id="discussion"></a>

## Discussion

If the type is unspecified, the Swift Package Manager automatically chooses a type based on the client’s preference.

## See Also

### Describing a Library Product

- [targets](targets.md): The names of the targets in this product.
- [Product.Library.LibraryType](librarytype.md): The different types of a library product.
