> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iosystemloadadvisorylevel

# IOSystemLoadAdvisoryLevel

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

Return type for IOGetSystemLoadAdvisory

## Declaration

```objectivec
typedef int IOSystemLoadAdvisoryLevel;
```

<a id="discussion"></a>

## Discussion

Value is one of kIOSystemLoadAdvisoryLevelGreat, kIOSystemLoadAdvisoryLevelOK, or kIOSystemLoadAdvisoryLevelBad.
