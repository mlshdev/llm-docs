> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/webcontentfilterpluginfilter_urlsobject](https://developer.apple.com/documentation/devicemanagement/webcontentfilterpluginfilter_urlsobject)

# WebContentFilterPluginFilter_URLsObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Settings that control the URL filter. If not present, the system doesn’t use URL filtering.

## Declaration

```
object WebContentFilterPluginFilter_URLsObject
```

## Properties

- `Enabled` — `boolean` (required): If `true`, the system filters URL requests.
- `Parameters` — `WebContentFilterPluginFilter_URLs_ParametersObject`: A dictionary containing URL filter parameters. Required when `Enabled` is `true`.

## Topics

### Objects

- [WebContentFilterPluginFilter_URLs_ParametersObject](webcontentfilterpluginfilter_urls_parametersobject.md): A dictionary containing URL filter parameters. Required when `Enabled` is `true`.

## See Also

### Objects

- [WebContentFilterPluginFilter_BrowsersObject](webcontentfilterpluginfilter_browsersobject.md): Settings that control the browser filter. If not present, the system doesn’t use browser filtering.
- [WebContentFilterPluginFilter_PacketsObject](webcontentfilterpluginfilter_packetsobject.md): Settings that control the packet filter. If not present, the system doesn’t use packet filtering.
- [WebContentFilterPluginFilter_SocketsObject](webcontentfilterpluginfilter_socketsobject.md): Settings that control the socket filter. If not present, the system doesn’t use socket filtering.
