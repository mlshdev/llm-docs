> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/installer_js/files/1812173-fileexistsatpath](https://developer.apple.com/documentation/installer_js/files/1812173-fileexistsatpath)

# fileExistsAtPath

**Interface language:** Data

**Framework:** Installer JS

Indicates whether the given path identifies an existent file.

## Declaration

```
fileExistsAtPath(filePath)
```

## Parameters

- `filePath`: String with the path of the desired file.

<a id="return_value"></a>

## Return Value

`true` when `filePath` identifies an existent file; `false` otherwise.

## See Also

### Accessing Files

- [plistAtPath](1812182-plistatpath.md): Provides the contents of a given plist file.
- [bundleAtPath](1812190-bundleatpath.md): Provides the contents of the info plist file of the identified bundle.

### Related Documentation

- [Installer JS](../../installer_js.md): Manage and customize the installation and distribution experience.
