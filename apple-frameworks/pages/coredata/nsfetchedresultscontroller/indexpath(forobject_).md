> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/indexpath(forobject:)](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/indexpath(forobject:))

# indexPath(forObject:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the index path of a given object.

## Declaration

```swift
func indexPath(forObject object: ResultType) -> IndexPath?
```

## Parameters

- `object`: An object in the receiver’s fetch results.

<a id="return-value"></a>

## Return Value

The index path of `object` in the receiver’s fetch results, or `nil` if `object` could not be found.

<a id="Discussion"></a>

## Discussion

In versions of iOS before 3.2, this method raises an exception if `object` is not contained in the receiver’s fetch results.

## See Also

### Accessing Results

- [fetchedObjects](fetchedobjects.md): The results of the fetch.
- [object(at:)](object%28at_%29.md): Returns the object at the given index path in the fetch results.

# indexPathForObject: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the index path of a given object.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForObject:(ResultType) object;
```

## Parameters

- `object`: An object in the receiver’s fetch results.

<a id="return-value"></a>

## Return Value

The index path of `object` in the receiver’s fetch results, or `nil` if `object` could not be found.

<a id="Discussion"></a>

## Discussion

In versions of iOS before 3.2, this method raises an exception if `object` is not contained in the receiver’s fetch results.

## See Also

### Accessing Results

- [fetchedObjects](fetchedobjects.md): The results of the fetch.
- [objectAtIndexPath:](object%28at_%29.md): Returns the object at the given index path in the fetch results.
