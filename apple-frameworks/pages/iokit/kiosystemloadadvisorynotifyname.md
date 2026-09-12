> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiosystemloadadvisorynotifyname](https://developer.apple.com/documentation/iokit/kiosystemloadadvisorynotifyname)

# kIOSystemLoadAdvisoryNotifyName

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The notification by this name fires when system "SystemLoadAdvisory" status changes.

## Declaration

```objectivec
#define kIOSystemLoadAdvisoryNotifyName
```

<a id="discussion"></a>

## Discussion

Pass this string as an argument to register via notify(3). You can query SystemLoadAdvisory state via notify_get_state() when this notification fires - this is more efficient than calling IOGetSystemLoadAdvisory(), and returns an identical combined SystemLoadAdvisory value.
