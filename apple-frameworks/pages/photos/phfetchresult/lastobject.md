> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresult/lastobject](https://developer.apple.com/documentation/photos/phfetchresult/lastobject)

# lastObject (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The last object in the fetch result.

## Declaration

```swift
var lastObject: ObjectType? { get }
```

<a id="Discussion"></a>

## Discussion

You specify the ordering of a fetch result in the [PHFetchOptions](../phfetchoptions.md) object you pass to a fetch method.

Returns `nil` if the fetch result is empty.

## See Also

### Querying a Fetch Result

- [contains(\_:)](contains%28__%29.md): Returns whether the specified object is present in the fetch result.
- [count](count.md): The number of objects in the fetch result.
- [countOfAssets(with:)](countofassets%28with_%29.md): Returns the number of assets in the fetch result of a specified type.
- [firstObject](firstobject.md): The first object in the fetch result.
- [object(at:)](object%28at_%29.md): Returns the object located at the specified index.
- [subscript(\_:)](subscript%28__%29.md): Returns the object located at the specified index.
- [objects(at:)](objects%28at_%29.md): Returns an array containing the objects in the fetch result at the indexes in the specified index set.

# lastObject (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The last object in the fetch result.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) ObjectType lastObject;
```

<a id="Discussion"></a>

## Discussion

You specify the ordering of a fetch result in the [PHFetchOptions](../phfetchoptions.md) object you pass to a fetch method.

Returns `nil` if the fetch result is empty.

## See Also

### Querying a Fetch Result

- [containsObject:](contains%28__%29.md): Returns whether the specified object is present in the fetch result.
- [count](count.md): The number of objects in the fetch result.
- [countOfAssetsWithMediaType:](countofassets%28with_%29.md): Returns the number of assets in the fetch result of a specified type.
- [firstObject](firstobject.md): The first object in the fetch result.
- [objectAtIndex:](object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object located at the specified index.
- [objectsAtIndexes:](objects%28at_%29.md): Returns an array containing the objects in the fetch result at the indexes in the specified index set.
