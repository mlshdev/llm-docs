> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/installenterpriseapplicationcommand/command-data.dictionary/manifest-data.dictionary

# InstallEnterpriseApplicationCommand.Command.Manifest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13.6+

A dictionary that contains a manifest.

## Declaration

```
object InstallEnterpriseApplicationCommand.Command.Manifest
```

## Properties

- `ANY` — `any`: A dictionary that specifies where to download the app. This value uses the [ManifestURL](../../manifesturl.md) format.

## See Also

### Objects

- [InstallEnterpriseApplicationCommand.Command.Configuration](configuration-data.dictionary.md): A dictionary that contains the configuration to install an enterprise app.
