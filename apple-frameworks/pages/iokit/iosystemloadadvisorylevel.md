> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iosystemloadadvisorylevel](https://developer.apple.com/documentation/iokit/iosystemloadadvisorylevel)

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
