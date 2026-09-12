> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/installer_js/files/1812182-plistatpath](https://developer.apple.com/documentation/installer_js/files/1812182-plistatpath)

# plistAtPath

**Interface language:** Data

**Framework:** Installer JS

Provides the contents of a given plist file.

## Declaration

```
plistAtPath(filePath)
```

## Parameters

- `filePath`: String with the path of the desired file.

<a id="return_value"></a>

## Return Value

A dictionary (associative array) with the contents of the identified plist file.

## See Also

### Accessing Files

- [fileExistsAtPath](1812173-fileexistsatpath.md): Indicates whether the given path identifies an existent file.
- [bundleAtPath](1812190-bundleatpath.md): Provides the contents of the info plist file of the identified bundle.
