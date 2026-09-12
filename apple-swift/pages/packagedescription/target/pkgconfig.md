> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/pkgconfig](https://developer.apple.com/documentation/packagedescription/target/pkgconfig)

# pkgConfig

**Framework:** PackageDescription  
**Kind:** Instance Property

The name of the package configuration file, without extension, for the system library target.

## Declaration

```swift
final let pkgConfig: String?
```

<a id="discussion"></a>

## Discussion

If present, the Swift Package Manager tries every package configuration name separated by a space to search for the `<name>.pc` file to get the additional flags needed for the system library target.

## See Also

### Creating a System Library Target

- [systemLibrary(name:path:pkgConfig:providers:)](systemlibrary%28name_path_pkgconfig_providers_%29.md): Creates a system library target.
- [providers](providers.md): The providers array for a system library target.
