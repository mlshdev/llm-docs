> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquerycontext/enablerankedresults](https://developer.apple.com/documentation/corespotlight/csuserquerycontext/enablerankedresults)

# enableRankedResults (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the query sorts results by their relevance.

## Declaration

```swift
var enableRankedResults: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `true`. Setting the property to `false` causes Spotlight to return results as it finds them instead of ordering them by their relevance or saliency to the search term.

## See Also

### Configuring the ranked results behavior

- [maxRankedResultCount](maxrankedresultcount.md): The maximum number of ranked results to return during the query.

# enableRankedResults (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the query sorts results by their relevance.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL enableRankedResults;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `true`. Setting the property to `false` causes Spotlight to return results as it finds them instead of ordering them by their relevance or saliency to the search term.

## See Also

### Configuring the ranked results behavior

- [maxRankedResultCount](maxrankedresultcount.md): The maximum number of ranked results to return during the query.
