> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/name](https://developer.apple.com/documentation/packagedescription/package/dependency/name)

# name

**Framework:** PackageDescription  
**Kind:** Instance Property  
**Availability:** SwiftPM  (deprecated in 5.6)

The name of the dependency.

> use kind instead

## Declaration

```swift
var name: String? { get }
```

<a id="discussion"></a>

## Discussion

If the `name` is `nil`, Swift Package Manager deduces the dependency’s name from its package identity or Git URL.

## See Also

### Describing a Package Dependency

- [kind](kind-swift.property.md): A description of the package dependency.
- [Package.Dependency.Kind](kind-swift.enum.md): The type of dependency.
- [Version](../../version.md): A version according to the semantic versioning specification.
- [url](url.md): Deprecated. The Git URL of the package dependency.
