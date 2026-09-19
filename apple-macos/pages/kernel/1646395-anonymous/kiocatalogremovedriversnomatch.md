> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646395-anonymous/kiocatalogremovedriversnomatch

# kIOCatalogRemoveDriversNoMatch

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOCatalogRemoveDriversNoMatch
```

<a id="discussion"></a>

## Discussion

Signals a call to the removedrivers function in IOCatalogue but does not start a matching thread.
