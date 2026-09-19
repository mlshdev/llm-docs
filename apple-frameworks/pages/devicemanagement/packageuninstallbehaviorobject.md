> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/packageuninstallbehaviorobject

# PackageUninstallBehaviorObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

A dictionary that describes how to uninstall the package.

## Declaration

```
object PackageUninstallBehaviorObject
```

## Properties

- `Remove` — `boolean`: If `true`, the system removes the files that the package installs when removing the configuration.
  **Default:** `false`

## Mentioned In

- [Installing packages](installing-packages.md)

## See Also

### Objects

- [PackageInstallBehaviorObject](packageinstallbehaviorobject.md): A dictionary that describes how and when to install the package.
