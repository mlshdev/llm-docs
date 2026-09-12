> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448600-anonymous](https://developer.apple.com/documentation/coreservices/1448600-anonymous)

# Anonymous

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kSKSearchOptionDefault](1448600-anonymous/ksksearchoptiondefault.md)
- [kSKSearchOptionFindSimilar](1448600-anonymous/ksksearchoptionfindsimilar.md): This option alters query behavior so that Search Kit returns references to documents that are similar to an example text string. When this option is specified, Search Kit ignores all query operators.
- [kSKSearchOptionNoRelevanceScores](1448600-anonymous/ksksearchoptionnorelevancescores.md): This option saves time during a search by suppressing the computation of relevance scores.
- [kSKSearchOptionSpaceMeansOR](1448600-anonymous/ksksearchoptionspacemeansor.md): This option alters query behavior so that spaces are interpreted as Boolean `OR` operators.
