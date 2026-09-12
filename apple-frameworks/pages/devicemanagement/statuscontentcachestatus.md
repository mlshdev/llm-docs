> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statuscontentcachestatus](https://developer.apple.com/documentation/devicemanagement/statuscontentcachestatus)

# StatusContentCacheStatus

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

The status item that reports the status of the Content Cache service.

## Declaration

```
object StatusContentCacheStatus
```

## Properties

- `content-cache.status` — `StatusContentCacheStatusContentCacheStatusObject` (required): The basic set of AssetCache status items

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

```json
{
    "content-cache": {
        "status": {
            "server-guid": "C3D4E5F6-A7B8-9012-CDEF-012345678912",
            "activated": true,
            "active": true,
            "cache-status": "OK",
            "private-addresses": [
                "192.168.1.5"
            ],
            "public-address": "203.0.113.5",
            "port": 51194,
            "registration-status": 1,
            "startup-status": "OK",
            "tetherator-status": 0,
            "sending-reports": false,
            "version": "2.0"
        }
    }
}
```

## Topics

### Objects

- [StatusContentCacheStatusContentCacheStatusObject](statuscontentcachestatuscontentcachestatusobject.md): The basic set of AssetCache status items

## See Also

### Content cache items

- [StatusContentCacheInfo](statuscontentcacheinfo.md): The status item that reports information about the Content Cache service.
- [StatusContentCacheParents](statuscontentcacheparents.md): The status item that reports information about the Content Cache service parent caches.
- [StatusContentCachePeers](statuscontentcachepeers.md): The status item that reports information about the Content Cache service peer caches.
