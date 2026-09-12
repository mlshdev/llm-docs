> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopscommandstartupdelaykey](https://developer.apple.com/documentation/iokit/kiopscommandstartupdelaykey)

# kIOPSCommandStartupDelayKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Tell UPS how long it should wait for

## Declaration

```objectivec
#define kIOPSCommandStartupDelayKey
```

<a id="discussion"></a>

## Discussion

- The matching argument should be a CFNumber of kCFNumberIntType specifying when the UPS should
- remove power from its AC power ports.
