> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/tvremote/allowedtvsitem](https://developer.apple.com/documentation/devicemanagement/tvremote/allowedtvsitem)

# TVRemote.AllowedTVsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+

The array of valid Apple TV identifiers that the remote can connect to.

## Declaration

```
object TVRemote.AllowedTVsItem
```

## Properties

- `TVDeviceID` — `string` (required): The MAC address of an Apple TV device that the system permits this iOS device to control. Use the format `xx:xx:xx:xx:xx:xx`, which isn’t case-sensitive.
- `TVDeviceName` — `string`: The name of an Apple TV device that the system permits this iOS device to control.

  Available: iOS 15+ | iPadOS 15+

## See Also

### Objects

- [TVRemote.AllowedRemotesItem](allowedremotesitem.md): The array of valid devices that Apple TV can connect to.
