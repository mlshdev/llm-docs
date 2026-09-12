> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/installer_js/applications/1812198-fromidentifier](https://developer.apple.com/documentation/installer_js/applications/1812198-fromidentifier)

# fromIdentifier

**Interface language:** Data

**Framework:** Installer JS

Provides information about running processes with a given application identifier (bundle ID).

## Declaration

```
fromIdentifier(bundleID)
```

## Parameters

- `bundleID`: A string with the bundle ID of the desired application, such as `com.apple.TextEdit`.

<a id="return_value"></a>

## Return Value

An array of dictionaries (associative arrays) describing the running applications identified by `bundleID`.

## See Also

### Getting Information About Running Applications

- [fromPID](1812189-frompid.md): Provides information about a running application with a given process ID.
- [all](1812212-all.md): All running applications registered with the process manager.

### Related Documentation

- [ProcessInformation](../processinformation.md): A dictionary (associative array) describing an application.
