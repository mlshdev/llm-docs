> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestoption/firstfoundonly](https://developer.apple.com/documentation/scenekit/scnhittestoption/firstfoundonly)

# firstFoundOnly (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An option to return only the first object found.

> Use the [searchMode](searchmode.md) option with value [SCNHitTestSearchMode.any](../scnhittestsearchmode/any.md) instead.

## Declaration

```swift
static let firstFoundOnly: SCNHitTestOption
```

<a id="Discussion"></a>

## Discussion

The value for this key is a [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The default value is [false](https://developer.apple.com/documentation/swift/false), specifying that hit-testing should return all objects found. If you specify [true](https://developer.apple.com/documentation/swift/true), the array of hit-test results contains only the first object found (which is not necessarily the nearest).

## See Also

### Deprecated

- [sortResults](sortresults.md): Deprecated. An option to sort the results of a hit-test.

# SCNHitTestFirstFoundOnlyKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to return only the first object found.

> Use the [SCNHitTestOptionSearchMode](searchmode.md) option with value [SCNHitTestSearchModeAny](../scnhittestsearchmode/any.md) instead.

## Declaration

```objectivec
extern SCNHitTestOption const SCNHitTestFirstFoundOnlyKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is a [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The default value is [false](https://developer.apple.com/documentation/swift/false), specifying that hit-testing should return all objects found. If you specify [true](https://developer.apple.com/documentation/swift/true), the array of hit-test results contains only the first object found (which is not necessarily the nearest).

## See Also

### Deprecated

- [SCNHitTestSortResultsKey](sortresults.md): Deprecated. An option to sort the results of a hit-test.
