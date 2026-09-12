> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statuscontentcachepeerspeeritemobject](https://developer.apple.com/documentation/devicemanagement/statuscontentcachepeerspeeritemobject)

# StatusContentCachePeersPeerItemObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

A peer Content Cache.

## Declaration

```
object StatusContentCachePeersPeerItemObject
```

## Properties

- `_removed` — `boolean`: If `true`, the system removed the peer entry and only this key and the `identifier` key are present in the status item object.
  **Default:** `false`
- `address` — `string` (required): The local IPv4 address of the peer Content Cache.
- `friendly` — `boolean` (required): If `true`, the peer Content Cache is willing to respond to requests from this Content Cache.
- `healthy` — `boolean` (required): If `true`, the peer Content Cache is able to respond to requests from this Content Cache.
- `identifier` — `string` (required): The unique identifier of the peer Content Cache.
- `port` — `integer` (required): The IP port number the peer Content Cache listens to for requests.
- `version` — `string` (required): The version number of the peer Content Cache software.
