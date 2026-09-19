> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1471646-memory_attribute_selectors/gestaltlaunchfullfilespec

# gestaltLaunchFullFileSpec

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltLaunchFullFileSpec = 2
```

<a id="discussion"></a>

## Discussion

If this bit is set, the `launchControlFlags` field supports control flags in addition to the `launchContinue` flag, and if the `_Launch` trap can process the `launchAppSpec`, `launchProcessSN`, `launchPreferredSize`, `launchMinimumSize`, `launchAvailableSize`, and `launchAppParameters` fields in the launch parameter block.
