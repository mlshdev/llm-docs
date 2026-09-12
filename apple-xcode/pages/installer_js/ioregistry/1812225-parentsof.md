> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/installer_js/ioregistry/1812225-parentsof](https://developer.apple.com/documentation/installer_js/ioregistry/1812225-parentsof)

# parentsOf

**Interface language:** Data

**Framework:** Installer JS

Returns the parents of the given IOKit object.

## Declaration

```
childrenOf(objectName)
```

## Parameters

- `objectName`: String with the path of the desired IOKit object, or an item of an IOKit object array.

<a id="return_value"></a>

## Return Value

An array of IOKit object dictionaries.

## See Also

### Accessing the IOKit Registry

- [fromPath](1812172-frompath.md): Returns a dictionary with the properties of a given IOKit object.
- [matchingClass](1812186-matchingclass.md): Returns the IOKit objects of a given class.
- [matchingName](1812200-matchingname.md): Returns the IOKit objects of the specified name.
- [childrenOf](1812215-childrenof.md): Returns the children of the given IOKit object.

### Related Documentation

- [IORegistry](../ioregistry.md): An object that provides access to the IOKit registry.
