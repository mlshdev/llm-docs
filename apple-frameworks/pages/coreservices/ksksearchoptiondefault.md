> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/ksksearchoptiondefault](https://developer.apple.com/documentation/coreservices/ksksearchoptiondefault)

# kSKSearchOptionDefault

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```swift
var kSKSearchOptionDefault: Int { get }
```

<a id="discussion"></a>

## Discussion

Default search options include:

- Relevance scores will be computed
- Spaces in a query are interpreted as Boolean `AND` operators.
- Do not use similarity searching.
