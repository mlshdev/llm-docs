> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/exclude](https://developer.apple.com/documentation/packagedescription/target/exclude)

# exclude

**Framework:** PackageDescription  
**Kind:** Instance Property

The paths to source and resource files that you don’t want to include in the target.

## Declaration

```swift
final var exclude: [String]
```

<a id="discussion"></a>

## Discussion

Excluded paths are relative to the target path. This property has precedence over the `sources` and `resources` properties.

## See Also

### Configuring File Locations

- [path](path.md): The path of the target, relative to the package root.
- [sources](sources.md): The source files in this target.
- [resources](resources.md): The explicit list of resource files in the target.
- [Resource](../resource.md): A resource to bundle with the Swift package.
- [publicHeadersPath](publicheaderspath.md): The path to the directory that contains public headers of a C-family target.
