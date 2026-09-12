> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/apptoapplayervpnmapping/applayervpnmappingitem/matchtoolsitem](https://developer.apple.com/documentation/devicemanagement/apptoapplayervpnmapping/applayervpnmappingitem/matchtoolsitem)

# AppToAppLayerVPNMapping.AppLayerVPNMappingItem.MatchToolsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.15.4+

Specifies a per-app VPN rule to match network traffic that the app’s spawned command-line tool generates.

## Declaration

```
object AppToAppLayerVPNMapping.AppLayerVPNMappingItem.MatchToolsItem
```

## Properties

- `DesignatedRequirement` — `string` (required): The code signature designated requirement of the command-line tool using the per-app VPN.
- `Path` — `string`: The file-system path of the command-line tool using the per-app VPN.
- `SigningIdentifier` — `string` (required): The code signature signing identifier of the command-line tool using the per-app VPN.
