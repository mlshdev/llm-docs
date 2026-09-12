> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestoption/sortresults](https://developer.apple.com/documentation/scenekit/scnhittestoption/sortresults)

# sortResults (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An option to sort the results of a hit-test.

> Use the [searchMode](searchmode.md) option with value [SCNHitTestSearchMode.all](../scnhittestsearchmode/all.md) instead.

## Declaration

```swift
static let sortResults: SCNHitTestOption
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The default value is [true](https://developer.apple.com/documentation/swift/true), specifying that the array of hit-test results is sorted from nearest to farthest. (When using the [hitTestWithSegment(from:to:options:)](../scnnode/hittestwithsegment%28from_to_options_%29.md) method, “nearest” is defined as closer to the point specified in the first parameter.) If you specify [false](https://developer.apple.com/documentation/swift/false), results are returned in an arbitrary order.

## See Also

### Deprecated

- [firstFoundOnly](firstfoundonly.md): Deprecated. An option to return only the first object found.

# SCNHitTestSortResultsKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to sort the results of a hit-test.

> Use the [SCNHitTestOptionSearchMode](searchmode.md) option with value [SCNHitTestSearchModeAll](../scnhittestsearchmode/all.md) instead.

## Declaration

```objectivec
extern SCNHitTestOption const SCNHitTestSortResultsKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The default value is [true](https://developer.apple.com/documentation/swift/true), specifying that the array of hit-test results is sorted from nearest to farthest. (When using the [hitTestWithSegmentFromPoint:toPoint:options:](../scnnode/hittestwithsegment%28from_to_options_%29.md) method, “nearest” is defined as closer to the point specified in the first parameter.) If you specify [false](https://developer.apple.com/documentation/swift/false), results are returned in an arbitrary order.

## See Also

### Deprecated

- [SCNHitTestFirstFoundOnlyKey](firstfoundonly.md): Deprecated. An option to return only the first object found.
