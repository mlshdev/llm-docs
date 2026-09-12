> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/packageinstallbehaviorobject](https://developer.apple.com/documentation/devicemanagement/packageinstallbehaviorobject)

# PackageInstallBehaviorObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 26.0+

A dictionary that describes how and when to install the package.

## Declaration

```
object PackageInstallBehaviorObject
```

## Properties

- `Install` — `string`: A string that specifies when the system installs the package:

  - `Optional`: The user can install the package after the system activates the configuration.
  - `Required`: The system installs the package after it activates the configuration.  
  **Default:** `Optional`  
  **Allowed values:** `Optional`, `Required`

## Mentioned In

- [Installing packages](installing-packages.md)

## See Also

### Objects

- [PackageUninstallBehaviorObject](packageuninstallbehaviorobject.md): A dictionary that describes how to uninstall the package.
