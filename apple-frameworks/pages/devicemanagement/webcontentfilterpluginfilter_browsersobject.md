> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/webcontentfilterpluginfilter_browsersobject

# WebContentFilterPluginFilter_BrowsersObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Settings that control the browser filter. If not present, the system doesn’t use browser filtering.

## Declaration

```
object WebContentFilterPluginFilter_BrowsersObject
```

## Properties

- `Enabled` — `boolean` (required): If `true`, the system enables filtering WebKit traffic.

## See Also

### Objects

- [WebContentFilterPluginFilter_PacketsObject](webcontentfilterpluginfilter_packetsobject.md): Settings that control the packet filter. If not present, the system doesn’t use packet filtering.
- [WebContentFilterPluginFilter_SocketsObject](webcontentfilterpluginfilter_socketsobject.md): Settings that control the socket filter. If not present, the system doesn’t use socket filtering.
- [WebContentFilterPluginFilter_URLsObject](webcontentfilterpluginfilter_urlsobject.md): Settings that control the URL filter. If not present, the system doesn’t use URL filtering.
