> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/installer_js/system/1812314-compareversions

# compareVersions

**Interface language:** Data

**Framework:** Installer JS

Provides the result of comparing two given version strings (for example, `'10.3.1'` and `'10.4'`).

## Declaration

```
compareVersions(versionA, versionB)
```

## Parameters

- `versionA`: String with the first operand version.
- `versionB`: String with the second operand version.

<a id="return_value"></a>

## Return Value

`-1` when `versionA` is lower than `versionB`, `0` when `versionA` is equal to `versionB`, and `1` when `versionA` is higher than `versionB`.
