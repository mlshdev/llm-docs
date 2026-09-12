> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/installer_js/ioregistry/1812186-matchingclass](https://developer.apple.com/documentation/installer_js/ioregistry/1812186-matchingclass)

# matchingClass

**Interface language:** Data

**Framework:** Installer JS

Returns the IOKit objects of a given class.

## Declaration

```
matchingClass(className, [servicePlane])
```

## Parameters

- `className`: String with an IOKit class name.
- `servicePlane`: *Optional*. String with the service plane to search. When unspecified, `'IOServicePlane'` is used.

<a id="return_value"></a>

## Return Value

An array of IOKit object dictionaries.

## See Also

### Accessing the IOKit Registry

- [fromPath](1812172-frompath.md): Returns a dictionary with the properties of a given IOKit object.
- [matchingName](1812200-matchingname.md): Returns the IOKit objects of the specified name.
- [childrenOf](1812215-childrenof.md): Returns the children of the given IOKit object.
- [parentsOf](1812225-parentsof.md): Returns the parents of the given IOKit object.
