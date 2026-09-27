> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1574381-iocataloguesenddata/kiocatalogremovedriversnomatch

# kIOCatalogRemoveDriversNoMatch

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kIOCatalogRemoveDriversNoMatch
```

<a id="discussion"></a>

## Discussion

Signals a call to the removedrivers function in IOCatalogue but does not start a matching thread.
