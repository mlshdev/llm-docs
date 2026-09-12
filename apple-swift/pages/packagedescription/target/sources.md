> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/sources](https://developer.apple.com/documentation/packagedescription/target/sources)

# sources

**Framework:** PackageDescription  
**Kind:** Instance Property

The source files in this target.

## Declaration

```swift
final var sources: [String]?
```

<a id="discussion"></a>

## Discussion

If this property is `nil`, Swift Package Manager includes all valid source files in the target’s path and treats specified paths as relative to the target’s path.

A path can be a path to a directory or an individual source file. In case of a directory, Swift Package Manager searches for valid source files recursively inside it.

## See Also

### Configuring File Locations

- [path](path.md): The path of the target, relative to the package root.
- [exclude](exclude.md): The paths to source and resource files that you don’t want to include in the target.
- [resources](resources.md): The explicit list of resource files in the target.
- [Resource](../resource.md): A resource to bundle with the Swift package.
- [publicHeadersPath](publicheaderspath.md): The path to the directory that contains public headers of a C-family target.
