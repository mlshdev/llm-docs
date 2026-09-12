> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquerycontext/maxrankedresultcount](https://developer.apple.com/documentation/corespotlight/csuserquerycontext/maxrankedresultcount)

# maxRankedResultCount (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The maximum number of ranked results to return during the query.

## Declaration

```swift
var maxRankedResultCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Spotlight ranks a limited number of results by default, but you can change the default value to improve performance or better suit your app’s interface. For example, you might want to return only the five most relevant results due to space constraints in your UI.

## See Also

### Configuring the ranked results behavior

- [enableRankedResults](enablerankedresults.md): A Boolean value that indicates whether the query sorts results by their relevance.

# maxRankedResultCount (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The maximum number of ranked results to return during the query.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger maxRankedResultCount;
```

<a id="Discussion"></a>

## Discussion

Spotlight ranks a limited number of results by default, but you can change the default value to improve performance or better suit your app’s interface. For example, you might want to return only the five most relevant results due to space constraints in your UI.

## See Also

### Configuring the ranked results behavior

- [enableRankedResults](enablerankedresults.md): A Boolean value that indicates whether the query sorts results by their relevance.
