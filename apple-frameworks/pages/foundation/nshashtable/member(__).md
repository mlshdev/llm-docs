> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/member(_:)](https://developer.apple.com/documentation/foundation/nshashtable/member(_:))

# member(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the hash table contains a given object, and returns that object if it is present

## Declaration

```swift
func member(_ object: ObjectType?) -> ObjectType?
```

## Parameters

- `object`: The object to test for membership in the hash table.

<a id="return-value"></a>

## Return Value

If `object` is a member of the hash table, returns `object`, otherwise returns `nil`.

<a id="Discussion"></a>

## Discussion

The equality test used depends on the personality option selected. For instance, choosing the [objectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctions.Options](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Accessing Content

- [anyObject](anyobject.md): One of the objects in the hash table.
- [allObjects](allobjects.md): The hash table’s members.
- [setRepresentation](setrepresentation.md): A set that contains the hash table’s members.
- [count](count.md): The number of elements in the hash table.
- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether the hash table contains a given object.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the hash table.

# member: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the hash table contains a given object, and returns that object if it is present

## Declaration

```objectivec
- (ObjectType) member:(ObjectType) object;
```

## Parameters

- `object`: The object to test for membership in the hash table.

<a id="return-value"></a>

## Return Value

If `object` is a member of the hash table, returns `object`, otherwise returns `nil`.

<a id="Discussion"></a>

## Discussion

The equality test used depends on the personality option selected. For instance, choosing the [NSPointerFunctionsObjectPersonality](../nspointerfunctions/options/objectpersonality.md) option will use `isEqual:` to determine equality. See [NSPointerFunctionsOptions](../nspointerfunctions/options.md) for more information on personality options and their corresponding equality tests.

## See Also

### Accessing Content

- [anyObject](anyobject.md): One of the objects in the hash table.
- [allObjects](allobjects.md): The hash table’s members.
- [setRepresentation](setrepresentation.md): A set that contains the hash table’s members.
- [count](count.md): The number of elements in the hash table.
- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether the hash table contains a given object.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the hash table.
