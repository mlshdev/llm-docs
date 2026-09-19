> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1448600-anonymous/ksksearchoptiondefault

# kSKSearchOptionDefault

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
kSKSearchOptionDefault = 0
```

<a id="discussion"></a>

## Discussion

Default search options include:

- Relevance scores will be computed
- Spaces in a query are interpreted as Boolean `AND` operators.
- Do not use similarity searching.
