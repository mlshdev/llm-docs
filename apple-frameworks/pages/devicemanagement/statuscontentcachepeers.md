> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statuscontentcachepeers](https://developer.apple.com/documentation/devicemanagement/statuscontentcachepeers)

# StatusContentCachePeers

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

The status item that reports information about the Content Cache service peer caches.

## Declaration

```
object StatusContentCachePeers
```

## Properties

- `content-cache.peers` — `[StatusContentCachePeersPeerItemObject]` (required): An array of dictionaries that describes peer Content Caches.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | macOS |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | macOS |
| Allowed in system scope | macOS |
| Allowed in user scope | N/A |

<a id="Status-item-example"></a>

### Status item example

**New or updated peer**

Reports a new or updated peer.

```json
{
    "content-cache": {
        "peers": [
            {
                "identifier": "B2C3D4E5-F6A7-8901-BCDE-F01234567891",
                "address": "192.168.1.20",
                "port": 51194,
                "friendly": true,
                "healthy": true,
                "version": "2.0"
            }
        ]
    }
}
```

**Removed peer**

Reports a removed peer.

```json
{
    "content-cache": {
        "peers": [
            {
                "identifier": "B2C3D4E5-F6A7-8901-BCDE-F01234567891",
                "_removed": true
            }
        ]
    }
}
```

## Topics

### Objects

- [StatusContentCachePeersPeerItemObject](statuscontentcachepeerspeeritemobject.md): A peer Content Cache.

## See Also

### Content cache items

- [StatusContentCacheInfo](statuscontentcacheinfo.md): The status item that reports information about the Content Cache service.
- [StatusContentCacheParents](statuscontentcacheparents.md): The status item that reports information about the Content Cache service parent caches.
- [StatusContentCacheStatus](statuscontentcachestatus.md): The status item that reports the status of the Content Cache service.
