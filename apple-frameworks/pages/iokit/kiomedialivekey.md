> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiomedialivekey

# kIOMediaLiveKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

A property of IOMedia objects.

## Declaration

```objectivec
#define kIOMediaLiveKey
```

<a id="discussion"></a>

## Discussion

The kIOMediaLiveKey property has an OSBoolean value and is placed into an IOMedia instance created via the partition scheme. It describes whether the partition is live, that is, it is up-to-date with respect to the on-disk partition table.
