> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresult/object(at:)](https://developer.apple.com/documentation/photos/phfetchresult/object(at:))

# object(at:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the object located at the specified index.

## Declaration

```swift
func object(at index: Int) -> ObjectType
```

## Parameters

- `index`: An index within the bounds of the fetch result.

<a id="return-value"></a>

## Return Value

The object located at `index` in the fetch result.

<a id="Discussion"></a>

## Discussion

Raises a range exception if `index` is beyond the end of the fetch result (that is, greater than or equal to the value of the [count](count.md) property).

## See Also

### Querying a Fetch Result

- [contains(\_:)](contains%28__%29.md): Returns whether the specified object is present in the fetch result.
- [count](count.md): The number of objects in the fetch result.
- [countOfAssets(with:)](countofassets%28with_%29.md): Returns the number of assets in the fetch result of a specified type.
- [firstObject](firstobject.md): The first object in the fetch result.
- [lastObject](lastobject.md): The last object in the fetch result.
- [subscript(\_:)](subscript%28__%29.md): Returns the object located at the specified index.
- [objects(at:)](objects%28at_%29.md): Returns an array containing the objects in the fetch result at the indexes in the specified index set.

# objectAtIndex: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the object located at the specified index.

## Declaration

```objectivec
- (ObjectType) objectAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: An index within the bounds of the fetch result.

<a id="return-value"></a>

## Return Value

The object located at `index` in the fetch result.

<a id="Discussion"></a>

## Discussion

Raises a range exception if `index` is beyond the end of the fetch result (that is, greater than or equal to the value of the [count](count.md) property).

## See Also

### Querying a Fetch Result

- [containsObject:](contains%28__%29.md): Returns whether the specified object is present in the fetch result.
- [count](count.md): The number of objects in the fetch result.
- [countOfAssetsWithMediaType:](countofassets%28with_%29.md): Returns the number of assets in the fetch result of a specified type.
- [firstObject](firstobject.md): The first object in the fetch result.
- [lastObject](lastobject.md): The last object in the fetch result.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object located at the specified index.
- [objectsAtIndexes:](objects%28at_%29.md): Returns an array containing the objects in the fetch result at the indexes in the specified index set.
