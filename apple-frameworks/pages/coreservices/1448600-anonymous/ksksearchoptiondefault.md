> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448600-anonymous/ksksearchoptiondefault](https://developer.apple.com/documentation/coreservices/1448600-anonymous/ksksearchoptiondefault)

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
