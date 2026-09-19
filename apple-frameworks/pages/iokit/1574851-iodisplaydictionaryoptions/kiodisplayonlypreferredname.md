> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1574851-iodisplaydictionaryoptions/kiodisplayonlypreferredname

# kIODisplayOnlyPreferredName

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.4+

## Declaration

```objectivec
kIODisplayOnlyPreferredName = 0x00000200
```

<a id="discussion"></a>

## Discussion

The kDisplayProductName property includes only the localized names returned by CFBundleCopyPreferredLocalizationsFromArray().
