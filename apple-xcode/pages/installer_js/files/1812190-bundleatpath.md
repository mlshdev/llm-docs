> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/installer_js/files/1812190-bundleatpath](https://developer.apple.com/documentation/installer_js/files/1812190-bundleatpath)

# bundleAtPath

**Interface language:** Data

**Framework:** Installer JS

Provides the contents of the info plist file of the identified bundle.

## Declaration

```
bundleAtPath(filePath)
```

## Parameters

- `filePath`: String with the path of the desired bundle.

<a id="return_value"></a>

## Return Value

A dictionary (associative array) with the contents of the bundle’s info plist file.

## See Also

### Accessing Files

- [fileExistsAtPath](1812173-fileexistsatpath.md): Indicates whether the given path identifies an existent file.
- [plistAtPath](1812182-plistatpath.md): Provides the contents of a given plist file.
