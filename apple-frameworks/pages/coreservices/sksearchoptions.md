> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/sksearchoptions](https://developer.apple.com/documentation/coreservices/sksearchoptions)

# SKSearchOptions (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Specifies the search options available for the [SKSearchCreate(\_:\_:\_:)](1443079-sksearchcreate.md) function.

## Declaration

```swift
typealias SKSearchOptions = UInt32
```

## Topics

### Constants

- [kSKSearchOptionDefault](ksksearchoptiondefault.md)
- [kSKSearchOptionNoRelevanceScores](ksksearchoptionnorelevancescores.md): This option saves time during a search by suppressing the computation of relevance scores.
- [kSKSearchOptionSpaceMeansOR](ksksearchoptionspacemeansor.md): This option alters query behavior so that spaces are interpreted as Boolean `OR` operators.
- [kSKSearchOptionFindSimilar](ksksearchoptionfindsimilar.md): This option alters query behavior so that Search Kit returns references to documents that are similar to an example text string. When this option is specified, Search Kit ignores all query operators.

# SKSearchOptions (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Specifies the search options available for the [SKSearchCreate](1443079-sksearchcreate.md) function.

## Declaration

```objectivec
typedef UInt32 SKSearchOptions;
```

## Topics

### Constants

- [kSKSearchOptionDefault](1448600-anonymous/ksksearchoptiondefault.md)
- [kSKSearchOptionNoRelevanceScores](1448600-anonymous/ksksearchoptionnorelevancescores.md): This option saves time during a search by suppressing the computation of relevance scores.
- [kSKSearchOptionSpaceMeansOR](1448600-anonymous/ksksearchoptionspacemeansor.md): This option alters query behavior so that spaces are interpreted as Boolean `OR` operators.
- [kSKSearchOptionFindSimilar](1448600-anonymous/ksksearchoptionfindsimilar.md): This option alters query behavior so that Search Kit returns references to documents that are similar to an example text string. When this option is specified, Search Kit ignores all query operators.
