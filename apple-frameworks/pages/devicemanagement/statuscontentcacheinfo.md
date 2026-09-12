> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statuscontentcacheinfo](https://developer.apple.com/documentation/devicemanagement/statuscontentcacheinfo)

# StatusContentCacheInfo

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

The status item that reports information about the Content Cache service.

## Declaration

```
object StatusContentCacheInfo
```

## Properties

- `content-cache.info` — `StatusContentCacheInfoContentCacheInfoObject` (required): A dictionary that contains info about the usage of the Content Cache on the device

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
        "info": {
            "cache-free": 10737418240,
            "cache-limit": 0,
            "cache-status": "OK",
            "cache-used": 5368709120,
            "max-cache-pressure-last-hour": 0.15,
            "personal-cache-free": 2147483648,
            "personal-cache-limit": 0,
            "personal-cache-used": 1073741824
        }
    }
}
```

## Topics

### Objects

- [StatusContentCacheInfoContentCacheInfoObject](statuscontentcacheinfocontentcacheinfoobject.md): A dictionary that contains info about the usage of the Content Cache on the device

## See Also

### Content cache items

- [StatusContentCacheParents](statuscontentcacheparents.md): The status item that reports information about the Content Cache service parent caches.
- [StatusContentCachePeers](statuscontentcachepeers.md): The status item that reports information about the Content Cache service peer caches.
- [StatusContentCacheStatus](statuscontentcachestatus.md): The status item that reports the status of the Content Cache service.
