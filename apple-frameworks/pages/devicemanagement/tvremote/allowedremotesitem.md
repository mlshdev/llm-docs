> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/tvremote/allowedremotesitem](https://developer.apple.com/documentation/devicemanagement/tvremote/allowedremotesitem)

# TVRemote.AllowedRemotesItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** tvOS 11.3+

The array of valid devices that Apple TV can connect to.

## Declaration

```
object TVRemote.AllowedRemotesItem
```

## Properties

- `RemoteDeviceID` — `string` (required): The MAC address of a permitted iOS device that can control this Apple TV. Use the format `xx:xx:xx:xx:xx:xx`, which isn’t case-sensitive.

## See Also

### Objects

- [TVRemote.AllowedTVsItem](allowedtvsitem.md): The array of valid Apple TV identifiers that the remote can connect to.
