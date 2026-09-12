> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/contains(_:)](https://developer.apple.com/documentation/foundation/nshashtable/contains(_:))

# contains(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the hash table contains a given object.

## Declaration

```swift
func contains(_ anObject: ObjectType?) -> Bool
```

## Parameters

- `anObject`: The object to test for membership in the hash table.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the hash table contains `anObject`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The equality test used depends on the personality option selected. For instance, choosing the [objectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctions.Options](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Accessing Content

- [anyObject](anyobject.md): One of the objects in the hash table.
- [allObjects](allobjects.md): The hash table’s members.
- [setRepresentation](setrepresentation.md): A set that contains the hash table’s members.
- [count](count.md): The number of elements in the hash table.
- [member(\_:)](member%28__%29.md): Determines whether the hash table contains a given object, and returns that object if it is present
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the hash table.

# containsObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the hash table contains a given object.

## Declaration

```objectivec
- (BOOL) containsObject:(ObjectType) anObject;
```

## Parameters

- `anObject`: The object to test for membership in the hash table.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the hash table contains `anObject`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The equality test used depends on the personality option selected. For instance, choosing the [NSPointerFunctionsObjectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctionsOptions](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Accessing Content

- [anyObject](anyobject.md): One of the objects in the hash table.
- [allObjects](allobjects.md): The hash table’s members.
- [setRepresentation](setrepresentation.md): A set that contains the hash table’s members.
- [count](count.md): The number of elements in the hash table.
- [member:](member%28__%29.md): Determines whether the hash table contains a given object, and returns that object if it is present
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the hash table.
