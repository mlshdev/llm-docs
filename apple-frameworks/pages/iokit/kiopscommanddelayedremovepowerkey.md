> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopscommanddelayedremovepowerkey

# kIOPSCommandDelayedRemovePowerKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Command to give a UPS when it should remove power from its AC plugs in a specified amount of time

## Declaration

```objectivec
#define kIOPSCommandDelayedRemovePowerKey
```

<a id="discussion"></a>

## Discussion

- The matching argument should be a CFNumber of kCFNumberIntType specifying when the UPS should
- remove power from its AC power ports.
