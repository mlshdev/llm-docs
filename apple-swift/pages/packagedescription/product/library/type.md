> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/product/library/type](https://developer.apple.com/documentation/packagedescription/product/library/type)

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
