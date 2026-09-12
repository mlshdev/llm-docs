> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arhittestresult/type](https://developer.apple.com/documentation/arkit/arhittestresult/type)

# type (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

The kind of detected feature the search result represents.

> Use raycasting

## Declaration

```swift
var type: ARHitTestResult.ResultType { get }
```

<a id="Discussion"></a>

## Discussion

You specify one or more result types to search for when calling a hit-testing method. A result object has only one result type.

## See Also

### Identifying Results

- [ARHitTestResult.ResultType](resulttype.md): Deprecated. Possible types for specifying a hit-test search, or for the result of a hit-test search.
- [anchor](anchor.md): Deprecated. The anchor representing the detected surface, if any.

# type (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

The kind of detected feature the search result represents.

> Use raycasting

## Declaration

```objectivec
@property (nonatomic, readonly) ARHitTestResultType type;
```

<a id="Discussion"></a>

## Discussion

You specify one or more result types to search for when calling a hit-testing method. A result object has only one result type.

## See Also

### Identifying Results

- [ARHitTestResultType](resulttype.md): Deprecated. Possible types for specifying a hit-test search, or for the result of a hit-test search.
- [anchor](anchor.md): Deprecated. The anchor representing the detected surface, if any.
