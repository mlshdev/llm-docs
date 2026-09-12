> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/installer_js/ioregistry/1812172-frompath](https://developer.apple.com/documentation/installer_js/ioregistry/1812172-frompath)

# fromPath

**Interface language:** Data

**Framework:** Installer JS

Returns a dictionary with the properties of a given IOKit object.

## Declaration

```
fromPath(filePath)
```

## Parameters

- `filePath`: String with the path of the desired IOKit object.

## See Also

### Accessing the IOKit Registry

- [matchingClass](1812186-matchingclass.md): Returns the IOKit objects of a given class.
- [matchingName](1812200-matchingname.md): Returns the IOKit objects of the specified name.
- [childrenOf](1812215-childrenof.md): Returns the children of the given IOKit object.
- [parentsOf](1812225-parentsof.md): Returns the parents of the given IOKit object.

### Related Documentation

- [Installer JS](../../installer_js.md): Manage and customize the installation and distribution experience.
