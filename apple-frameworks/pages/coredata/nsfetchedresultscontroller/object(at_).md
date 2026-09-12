> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/object(at:)](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/object(at:))

# object(at:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the object at the given index path in the fetch results.

## Declaration

```swift
func object(at indexPath: IndexPath) -> ResultType
```

## Parameters

- `indexPath`: An index path in the fetch results.

  If `indexPath` does not describe a valid index path in the fetch results, an exception is raised.

<a id="return-value"></a>

## Return Value

The object at a given index path in the fetch results.

## See Also

### Accessing Results

- [fetchedObjects](fetchedobjects.md): The results of the fetch.
- [indexPath(forObject:)](indexpath%28forobject_%29.md): Returns the index path of a given object.

# objectAtIndexPath: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the object at the given index path in the fetch results.

## Declaration

```objectivec
- (ResultType) objectAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: An index path in the fetch results.

  If `indexPath` does not describe a valid index path in the fetch results, an exception is raised.

<a id="return-value"></a>

## Return Value

The object at a given index path in the fetch results.

## See Also

### Accessing Results

- [fetchedObjects](fetchedobjects.md): The results of the fetch.
- [indexPathForObject:](indexpath%28forobject_%29.md): Returns the index path of a given object.
