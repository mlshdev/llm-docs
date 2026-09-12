> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statuscontentcacheparents](https://developer.apple.com/documentation/devicemanagement/statuscontentcacheparents)

# StatusContentCacheParents

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

The status item that reports information about the Content Cache service parent caches.

## Declaration

```
object StatusContentCacheParents
```

## Properties

- `content-cache.parents` — `[StatusContentCacheParentsParentsItemObject]`: An array of dictionaries that describes parent Content Caches.

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

**New or updated parent**

Reports a new or updated parent.

```json
{
    "content-cache": {
        "parents": [
            {
                "identifier": "A1B2C3D4-E5F6-7890-ABCD-EF1234567890",
                "address": "192.168.1.10",
                "port": 51194,
                "healthy": true,
                "version": "2.0"
            }
        ]
    }
}
```

**Removed parent**

Reports a removed parent.

```json
{
    "content-cache": {
        "parents": [
            {
                "identifier": "A1B2C3D4-E5F6-7890-ABCD-EF1234567890",
                "_removed": true
            }
        ]
    }
}
```

## Topics

### Objects

- [StatusContentCacheParentsParentsItemObject](statuscontentcacheparentsparentsitemobject.md): A parent Content Cache.

## See Also

### Content cache items

- [StatusContentCacheInfo](statuscontentcacheinfo.md): The status item that reports information about the Content Cache service.
- [StatusContentCachePeers](statuscontentcachepeers.md): The status item that reports information about the Content Cache service peer caches.
- [StatusContentCacheStatus](statuscontentcachestatus.md): The status item that reports the status of the Content Cache service.
