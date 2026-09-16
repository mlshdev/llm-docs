> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/target/publicheaderspath

# publicHeadersPath

**Framework:** PackageDescription  
**Kind:** Instance Property

The path to the directory that contains public headers of a C-family target.

## Declaration

```swift
final var publicHeadersPath: String?
```

<a id="discussion"></a>

## Discussion

If this is `nil`, the directory is set to `include`.

## See Also

### Configuring File Locations

- [path](path.md): The path of the target, relative to the package root.
- [exclude](exclude.md): The paths to source and resource files that you don’t want to include in the target.
- [sources](sources.md): The source files in this target.
- [resources](resources.md): The explicit list of resource files in the target.
- [Resource](../resource.md): A resource to bundle with the Swift package.
