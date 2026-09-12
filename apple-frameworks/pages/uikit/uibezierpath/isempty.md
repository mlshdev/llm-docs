> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/isempty](https://developer.apple.com/documentation/uikit/uibezierpath/isempty)

# isEmpty (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the path has any valid elements.

## Declaration

```swift
var isEmpty: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Valid path elements include commands to move to a specified point, draw a line or curve segment, or close the path. Thus, a path is not considered empty even if all you do is call the [move(to:)](move%28to_%29.md) method.

## See Also

### Performing hit-testing

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether the specified point is within the region that the path encloses.
- [bounds](bounds.md): The bounding rectangle of the path.

# empty (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the path has any valid elements.

## Declaration

```objectivec
@property (readonly, getter=isEmpty) BOOL empty;
```

<a id="Discussion"></a>

## Discussion

Valid path elements include commands to move to a specified point, draw a line or curve segment, or close the path. Thus, a path is not considered empty even if all you do is call the [moveToPoint:](move%28to_%29.md) method.

## See Also

### Performing hit-testing

- [containsPoint:](contains%28__%29.md): Returns a Boolean value that indicates whether the specified point is within the region that the path encloses.
- [bounds](bounds.md): The bounding rectangle of the path.
