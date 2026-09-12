> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/makeobjectsperformselector:withobject:](https://developer.apple.com/documentation/foundation/nsset/makeobjectsperformselector:withobject:)

# makeObjectsPerformSelector:withObject:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sends a message specified by a given selector to each object in the set.

## Declaration

```objectivec
- (void) makeObjectsPerformSelector:(SEL) aSelector withObject:(id) argument;
```

## Parameters

- `aSelector`: A selector that specifies the message to send to the set’s members. The method must take a single argument of type `id`. The method should not, as a side effect, modify the set. The value must not be `NULL`.
- `argument`: The object to pass as an argument to the method specified by `aSelector`.

<a id="Discussion"></a>

## Discussion

The message specified by `aSelector` is sent, with `argument` as the argument, once to each member of the set. This method raises an `NSInvalidArgumentException` if `aSelector` is `NULL`.

## See Also

### Accessing Set Members

- [allObjects](allobjects.md): An array containing the set’s members, or an empty array if the set has no members.
- [anyObject](anyobject%28%29.md): Returns one of the objects in the set, or `nil` if the set contains no objects.
- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the set.
- [filteredSetUsingPredicate:](filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving set and returns a new set containing the objects for which the predicate returns true.
- [makeObjectsPerformSelector:](makeobjectsperformselector_.md): Sends a message specified by a given selector to each object in the set.
- [member:](member%28__%29.md): Determines whether a given object is present in the set, and returns that object if it is.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set.
- [enumerateObjectsUsingBlock:](enumerateobjects%28__%29.md): Executes a given block using each object in the set.
- [enumerateObjectsWithOptions:usingBlock:](enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [objectsPassingTest:](objects%28passingtest_%29.md): Returns a set of objects that pass a test in a given block.
- [objectsWithOptions:passingTest:](objects%28options_passingtest_%29.md): Returns a set of objects that pass a test in a given block, using the specified enumeration options.
