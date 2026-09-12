> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkquadtree/elements(in:)](https://developer.apple.com/documentation/gameplaykit/gkquadtree/elements(in:))

# elements(in:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns all objects whose corresponding locations overlap the specified region.

## Declaration

```swift
func elements(in quad: GKQuad) -> [ElementType]
```

## Parameters

- `quad`: The axis-aligned rectangle in 2D space to search.

<a id="return-value"></a>

## Return Value

An array of all matching elements, or an empty array if no objects are found.

<a id="Discussion"></a>

## Discussion

You specify the point or region corresponding to an object when you add it to the tree with the [add(\_:at:)](add%28__at_%29.md) or [add(\_:in:)](add%28__in_%29.md) method. This method follows the same path down the tree as the two `addElement` methods, but instead of adding a new object to the tree, returns the list of all objects stored in the tree node corresponding to the specified point.

## See Also

### Searching for Elements

- [elements(at:)](elements%28at_%29.md): Returns all objects whose corresponding locations overlap the specified point.

# elementsInQuad: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns all objects whose corresponding locations overlap the specified region.

## Declaration

```objectivec
- (NSArray<NSObject *> *) elementsInQuad:(GKQuad) quad;
```

## Parameters

- `quad`: The axis-aligned rectangle in 2D space to search.

<a id="return-value"></a>

## Return Value

An array of all matching elements, or an empty array if no objects are found.

<a id="Discussion"></a>

## Discussion

You specify the point or region corresponding to an object when you add it to the tree with the [addElement:withPoint:](add%28__at_%29.md) or [addElement:withQuad:](add%28__in_%29.md) method. This method follows the same path down the tree as the two `addElement` methods, but instead of adding a new object to the tree, returns the list of all objects stored in the tree node corresponding to the specified point.

## See Also

### Searching for Elements

- [elementsAtPoint:](elements%28at_%29.md): Returns all objects whose corresponding locations overlap the specified point.
