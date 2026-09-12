> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/enumerateobjects(_:)](https://developer.apple.com/documentation/foundation/nsset/enumerateobjects(_:))

# enumerateObjects(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes a given block using each object in the set.

## Declaration

```swift
func enumerateObjects(_ block: (Any, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `block`: The block to apply to elements in the set.

  The block takes two arguments:

  - **obj**: The element in the set.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

## See Also

### Accessing Set Members

- [allObjects](allobjects.md): An array containing the set’s members, or an empty array if the set has no members.
- [anyObject()](anyobject%28%29.md): Returns one of the objects in the set, or `nil` if the set contains no objects.
- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the set.
- [filtered(using:)](filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving set and returns a new set containing the objects for which the predicate returns true.
- [member(\_:)](member%28__%29.md): Determines whether a given object is present in the set, and returns that object if it is.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set.
- [enumerateObjects(options:using:)](enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [objects(passingTest:)](objects%28passingtest_%29.md): Returns a set of objects that pass a test in a given block.
- [objects(options:passingTest:)](objects%28options_passingtest_%29.md): Returns a set of objects that pass a test in a given block, using the specified enumeration options.

# enumerateObjectsUsingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes a given block using each object in the set.

## Declaration

```objectivec
- (void) enumerateObjectsUsingBlock:(void (^)(ObjectType obj, BOOL *stop)) block;
```

## Parameters

- `block`: The block to apply to elements in the set.

  The block takes two arguments:

  - **obj**: The element in the set.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

## See Also

### Accessing Set Members

- [allObjects](allobjects.md): An array containing the set’s members, or an empty array if the set has no members.
- [anyObject](anyobject%28%29.md): Returns one of the objects in the set, or `nil` if the set contains no objects.
- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the set.
- [filteredSetUsingPredicate:](filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving set and returns a new set containing the objects for which the predicate returns true.
- [makeObjectsPerformSelector:](makeobjectsperformselector_.md): Sends a message specified by a given selector to each object in the set.
- [makeObjectsPerformSelector:withObject:](makeobjectsperformselector_withobject_.md): Sends a message specified by a given selector to each object in the set.
- [member:](member%28__%29.md): Determines whether a given object is present in the set, and returns that object if it is.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set.
- [enumerateObjectsWithOptions:usingBlock:](enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [objectsPassingTest:](objects%28passingtest_%29.md): Returns a set of objects that pass a test in a given block.
- [objectsWithOptions:passingTest:](objects%28options_passingtest_%29.md): Returns a set of objects that pass a test in a given block, using the specified enumeration options.
