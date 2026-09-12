> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiobdmediatypekey](https://developer.apple.com/documentation/iokit/kiobdmediatypekey)

# kIOBDMediaTypeKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

kIOBDMediaTypeKey is a property of IOBDMedia objects. It has an OSString value.

## Declaration

```objectivec
#define kIOBDMediaTypeKey
```

<a id="discussion"></a>

## Discussion

The kIOBDMediaTypeKey property identifies the BD media type (BD-ROM, BD-R, BD-RE, etc). See the kIOBDMediaType contants for possible values.
