> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchingfindsession/searchableobject](https://developer.apple.com/documentation/uikit/uitextsearchingfindsession/searchableobject)

# searchableObject (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The object to search, responsible for performing the search operation and decorating the results.

## Declaration

```swift
weak var searchableObject: (any __UITextSearching)? { get }
```

<a id="Discussion"></a>

## Discussion

Use the methods this object implements from the [UITextSearching](../uitextsearching-53wjq.md) protocol to search text in your app and decorate the found results.

# searchableObject (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The object to search, responsible for performing the search operation and decorating the results.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) id<UITextSearching> searchableObject;
```

<a id="Discussion"></a>

## Discussion

Use the methods this object implements from the [UITextSearching](../uitextsearching-53wjq.md) protocol to search text in your app and decorate the found results.
