> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresult/objects(at:)](https://developer.apple.com/documentation/photos/phfetchresult/objects(at:))

# objects(at:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns an array containing the objects in the fetch result at the indexes in the specified index set.

## Declaration

```swift
func objects(at indexes: IndexSet) -> [ObjectType]
```

## Parameters

- `indexes`: An index set containing indexes within the bounds of the fetch result.

<a id="return-value"></a>

## Return Value

An array containing the objects in the fetch result at the indexes specified by `indexes`.

<a id="Discussion"></a>

## Discussion

The ordering of the returned array follows the index set. That is, in the returned array, an object with a higher index in the index set comes after any object with a smaller index in the index set.

Raises a range exception if any index in the index set is beyond the end of the fetch result (that is, greater than or equal to the value of the [count](count.md) property).

## See Also

### Querying a Fetch Result

- [contains(\_:)](contains%28__%29.md): Returns whether the specified object is present in the fetch result.
- [count](count.md): The number of objects in the fetch result.
- [countOfAssets(with:)](countofassets%28with_%29.md): Returns the number of assets in the fetch result of a specified type.
- [firstObject](firstobject.md): The first object in the fetch result.
- [lastObject](lastobject.md): The last object in the fetch result.
- [object(at:)](object%28at_%29.md): Returns the object located at the specified index.
- [subscript(\_:)](subscript%28__%29.md): Returns the object located at the specified index.

# objectsAtIndexes: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns an array containing the objects in the fetch result at the indexes in the specified index set.

## Declaration

```objectivec
- (NSArray<id> *) objectsAtIndexes:(NSIndexSet *) indexes;
```

## Parameters

- `indexes`: An index set containing indexes within the bounds of the fetch result.

<a id="return-value"></a>

## Return Value

An array containing the objects in the fetch result at the indexes specified by `indexes`.

<a id="Discussion"></a>

## Discussion

The ordering of the returned array follows the index set. That is, in the returned array, an object with a higher index in the index set comes after any object with a smaller index in the index set.

Raises a range exception if any index in the index set is beyond the end of the fetch result (that is, greater than or equal to the value of the [count](count.md) property).

## See Also

### Querying a Fetch Result

- [containsObject:](contains%28__%29.md): Returns whether the specified object is present in the fetch result.
- [count](count.md): The number of objects in the fetch result.
- [countOfAssetsWithMediaType:](countofassets%28with_%29.md): Returns the number of assets in the fetch result of a specified type.
- [firstObject](firstobject.md): The first object in the fetch result.
- [lastObject](lastobject.md): The last object in the fetch result.
- [objectAtIndex:](object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object located at the specified index.
