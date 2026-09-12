> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlidentifier](https://developer.apple.com/documentation/createml/mlidentifier)

# MLIdentifier

**Framework:** Create ML  
**Kind:** Protocol  
**Availability:** macOS 10.15+ (deprecated in 14.0)

A type the Create ML framework can use as a machine learning identifier.

## Declaration

```swift
protocol MLIdentifier
```

<a id="overview"></a>

## Overview

You can use any type that conforms to the [MLIdentifier](mlidentifier.md) protocol, typically [Int](https://developer.apple.com/documentation/swift/int) or [String](https://developer.apple.com/documentation/swift/string), to uniquely identify users and items in these [MLRecommender](mlrecommender.md) methods:

- 

[recommendations(fromUsers:maxCount:restrictingToItems:excluding:excludingObserved:)](https://developer.apple.com/documentation/createml/mlrecommender/recommendations%28fromusers:maxcount:restrictingtoitems:excluding:excludingobserved:%29-7an46)

- [getSimilarItems(fromItems:maxCount:)](https://developer.apple.com/documentation/createml/mlrecommender/getsimilaritems%28fromitems:maxcount:%29-kq37)

## Topics

### Getting an identifier

- [identifierValue](mlidentifier/identifiervalue.md): Deprecated. The value of the unique identifier wrapped in a data value.

## See Also

### Testing a recommender

- [recommendations(fromUsers:maxCount:restrictingToItems:excluding:excludingObserved:)](mlrecommender/recommendations%28fromusers_maxcount_restrictingtoitems_excluding_excludingobserved_%29.md): Deprecated. Retrieves the highest scored item for the given array of users, based on item similarity and the rating column.
- [getSimilarItems(fromItems:maxCount:)](mlrecommender/getsimilaritems%28fromitems_maxcount_%29.md): Deprecated. Returns the top ranked similar items based on the model’s similarity type.
