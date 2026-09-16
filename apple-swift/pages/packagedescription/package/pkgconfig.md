> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/package/pkgconfig

# pkgConfig

**Framework:** PackageDescription  
**Kind:** Instance Property

The name to use for C modules.

## Declaration

```swift
final var pkgConfig: String?
```

<a id="discussion"></a>

## Discussion

If present, the Swift Package Manager searches for a `<name>.pc` file to get the required additional flags for a system target.

## See Also

### Configuring System Packages

- [SystemPackageProvider](../systempackageprovider.md): The system package providers that this package uses.
- [providers](providers.md): An array of providers for a system target.
