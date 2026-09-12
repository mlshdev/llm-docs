> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arhittestresult/anchor](https://developer.apple.com/documentation/arkit/arhittestresult/anchor)

# anchor (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

The anchor representing the detected surface, if any.

> Use raycasting

## Declaration

```swift
var anchor: ARAnchor? { get }
```

<a id="Discussion"></a>

## Discussion

Results of the [featurePoint](resulttype/featurepoint.md) type do not include an anchor.

## See Also

### Identifying Results

- [type](type.md): Deprecated. The kind of detected feature the search result represents.
- [ARHitTestResult.ResultType](resulttype.md): Deprecated. Possible types for specifying a hit-test search, or for the result of a hit-test search.

# anchor (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

The anchor representing the detected surface, if any.

> Use raycasting

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) ARAnchor * anchor;
```

<a id="Discussion"></a>

## Discussion

Results of the [ARHitTestResultTypeFeaturePoint](resulttype/featurepoint.md) type do not include an anchor.

## See Also

### Identifying Results

- [type](type.md): Deprecated. The kind of detected feature the search result represents.
- [ARHitTestResultType](resulttype.md): Deprecated. Possible types for specifying a hit-test search, or for the result of a hit-test search.
