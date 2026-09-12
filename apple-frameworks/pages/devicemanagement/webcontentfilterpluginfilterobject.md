> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/webcontentfilterpluginfilterobject](https://developer.apple.com/documentation/devicemanagement/webcontentfilterpluginfilterobject)

# WebContentFilterPluginFilterObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Settings that control authentication.

## Declaration

```
object WebContentFilterPluginFilterObject
```

## Properties

- `Browsers` — `WebContentFilterPluginFilter_BrowsersObject`: Settings that control the browser filter. If not present, the system doesn’t use browser filtering.

  Available: iOS 27+ | iPadOS 27+ | visionOS 27+
- `Grade` — `string`: The system uses this value to derive the relative order of content filters. Filters with a grade of `firewall` see network traffic before filters with a grade of `inspector`. However, the system doesn’t define the order of filters within a grade.

  Available: macOS 27+  
  **Default:** `firewall`  
  **Allowed values:** `firewall`, `inspector`
- `Packets` — `WebContentFilterPluginFilter_PacketsObject`: Settings that control the packet filter. If not present, the system doesn’t use packet filtering.

  Available: macOS 27+
- `Sockets` — `WebContentFilterPluginFilter_SocketsObject`: Settings that control the socket filter. If not present, the system doesn’t use socket filtering.
- `URLs` — `WebContentFilterPluginFilter_URLsObject`: Settings that control the URL filter. If not present, the system doesn’t use URL filtering.

  Available: iOS 27+ | iPadOS 27+ | macOS 27+

## Topics

### Objects

- [WebContentFilterPluginFilter_BrowsersObject](webcontentfilterpluginfilter_browsersobject.md): Settings that control the browser filter. If not present, the system doesn’t use browser filtering.
- [WebContentFilterPluginFilter_PacketsObject](webcontentfilterpluginfilter_packetsobject.md): Settings that control the packet filter. If not present, the system doesn’t use packet filtering.
- [WebContentFilterPluginFilter_SocketsObject](webcontentfilterpluginfilter_socketsobject.md): Settings that control the socket filter. If not present, the system doesn’t use socket filtering.
- [WebContentFilterPluginFilter_URLsObject](webcontentfilterpluginfilter_urlsobject.md): Settings that control the URL filter. If not present, the system doesn’t use URL filtering.

## See Also

### Objects

- [WebContentFilterPluginAuthenticationObject](webcontentfilterpluginauthenticationobject.md): Settings that control authentication.
- [WebContentFilterPluginVendorConfigObject](webcontentfilterpluginvendorconfigobject.md): The custom dictionary that the filtering service plug-in needs.
