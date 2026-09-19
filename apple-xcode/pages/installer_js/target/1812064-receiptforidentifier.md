> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/installer_js/target/1812064-receiptforidentifier

# receiptForIdentifier

**Interface language:** Data

**Framework:** Installer JS

Provides information about the receipt for a given package on the installation host.

## Declaration

```
receiptForIdentifier(packageID)
```

## Parameters

- `packageID`: String specifying a package identifier. For example, `com.apple.TextEdit.pkg`.

<a id="return_value"></a>

## Return Value

A dictionary with information about the receipt for the specified package.
