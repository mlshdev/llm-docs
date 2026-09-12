> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/member(_:)](https://developer.apple.com/documentation/foundation/nsset/member(_:))

# member(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether a given object is present in the set, and returns that object if it is.

## Declaration

```swift
func member(_ object: Any) -> Any?
```

## Parameters

- `object`: An object to look for in the set.

<a id="return-value"></a>

## Return Value

Returns an object equal to `object` if it’s present in the set, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

Each element of the set is checked for equality with `object` until a match is found or the end of the set is reached.  Objects are considered equal if [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing Set Members

- [allObjects](allobjects.md): An array containing the set’s members, or an empty array if the set has no members.
- [anyObject()](anyobject%28%29.md): Returns one of the objects in the set, or `nil` if the set contains no objects.
- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the set.
- [filtered(using:)](filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving set and returns a new set containing the objects for which the predicate returns true.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set.
- [enumerateObjects(\_:)](enumerateobjects%28__%29.md): Executes a given block using each object in the set.
- [enumerateObjects(options:using:)](enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [objects(passingTest:)](objects%28passingtest_%29.md): Returns a set of objects that pass a test in a given block.
- [objects(options:passingTest:)](objects%28options_passingtest_%29.md): Returns a set of objects that pass a test in a given block, using the specified enumeration options.

# member: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines whether a given object is present in the set, and returns that object if it is.

## Declaration

```objectivec
- (ObjectType) member:(ObjectType) object;
```

## Parameters

- `object`: An object to look for in the set.

<a id="return-value"></a>

## Return Value

Returns an object equal to `object` if it’s present in the set, otherwise `nil`.

<a id="Discussion"></a>

## Discussion

Each element of the set is checked for equality with `object` until a match is found or the end of the set is reached.  Objects are considered equal if [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing Set Members

- [allObjects](allobjects.md): An array containing the set’s members, or an empty array if the set has no members.
- [anyObject](anyobject%28%29.md): Returns one of the objects in the set, or `nil` if the set contains no objects.
- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the set.
- [filteredSetUsingPredicate:](filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving set and returns a new set containing the objects for which the predicate returns true.
- [makeObjectsPerformSelector:](makeobjectsperformselector_.md): Sends a message specified by a given selector to each object in the set.
- [makeObjectsPerformSelector:withObject:](makeobjectsperformselector_withobject_.md): Sends a message specified by a given selector to each object in the set.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set.
- [enumerateObjectsUsingBlock:](enumerateobjects%28__%29.md): Executes a given block using each object in the set.
- [enumerateObjectsWithOptions:usingBlock:](enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [objectsPassingTest:](objects%28passingtest_%29.md): Returns a set of objects that pass a test in a given block.
- [objectsWithOptions:passingTest:](objects%28options_passingtest_%29.md): Returns a set of objects that pass a test in a given block, using the specified enumeration options.
