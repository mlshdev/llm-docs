> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresult/contains(_:)](https://developer.apple.com/documentation/photos/phfetchresult/contains(_:))

# contains(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns whether the specified object is present in the fetch result.

## Declaration

```swift
func contains(_ anObject: ObjectType) -> Bool
```

## Parameters

- `anObject`: An object.

<a id="return-value"></a>

## Return Value

`true` if `anObject` is present in the fetch result, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This method determines whether `anObject` is present in the fetch result by sending an `==` message to each of the fetch result’s objects (and passing `anObject` as the parameter to each `==` message).

## See Also

### Querying a Fetch Result

- [count](count.md): The number of objects in the fetch result.
- [countOfAssets(with:)](countofassets%28with_%29.md): Returns the number of assets in the fetch result of a specified type.
- [firstObject](firstobject.md): The first object in the fetch result.
- [lastObject](lastobject.md): The last object in the fetch result.
- [object(at:)](object%28at_%29.md): Returns the object located at the specified index.
- [subscript(\_:)](subscript%28__%29.md): Returns the object located at the specified index.
- [objects(at:)](objects%28at_%29.md): Returns an array containing the objects in the fetch result at the indexes in the specified index set.

# containsObject: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns whether the specified object is present in the fetch result.

## Declaration

```objectivec
- (BOOL) containsObject:(ObjectType) anObject;
```

## Parameters

- `anObject`: An object.

<a id="return-value"></a>

## Return Value

`true` if `anObject` is present in the fetch result, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This method determines whether `anObject` is present in the fetch result by sending an `==` message to each of the fetch result’s objects (and passing `anObject` as the parameter to each `==` message).

## See Also

### Querying a Fetch Result

- [count](count.md): The number of objects in the fetch result.
- [countOfAssetsWithMediaType:](countofassets%28with_%29.md): Returns the number of assets in the fetch result of a specified type.
- [firstObject](firstobject.md): The first object in the fetch result.
- [lastObject](lastobject.md): The last object in the fetch result.
- [objectAtIndex:](object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object located at the specified index.
- [objectsAtIndexes:](objects%28at_%29.md): Returns an array containing the objects in the fetch result at the indexes in the specified index set.
