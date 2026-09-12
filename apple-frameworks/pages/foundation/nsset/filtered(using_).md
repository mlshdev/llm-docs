> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/filtered(using:)](https://developer.apple.com/documentation/foundation/nsset/filtered(using:))

# filtered(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates a given predicate against each object in the receiving set and returns a new set containing the objects for which the predicate returns true.

## Declaration

```swift
func filtered(using predicate: NSPredicate) -> Set<AnyHashable>
```

## Parameters

- `predicate`: A predicate.

<a id="return-value"></a>

## Return Value

A new set containing the objects in the receiving set for which `predicate` returns true.

<a id="Discussion"></a>

## Discussion

The following example illustrates the use of this method.

```objc
NSSet *sourceSet =
    [NSSet setWithObjects:@"One", @"Two", @"Three", @"Four", nil];
NSPredicate *predicate =
    [NSPredicate predicateWithFormat:@"SELF beginswith 'T'"];
NSSet *filteredSet =
    [sourceSet filteredSetUsingPredicate:predicate];
// filteredSet contains (Two, Three)
```

## See Also

### Accessing Set Members

- [allObjects](allobjects.md): An array containing the set’s members, or an empty array if the set has no members.
- [anyObject()](anyobject%28%29.md): Returns one of the objects in the set, or `nil` if the set contains no objects.
- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the set.
- [member(\_:)](member%28__%29.md): Determines whether a given object is present in the set, and returns that object if it is.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set.
- [enumerateObjects(\_:)](enumerateobjects%28__%29.md): Executes a given block using each object in the set.
- [enumerateObjects(options:using:)](enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [objects(passingTest:)](objects%28passingtest_%29.md): Returns a set of objects that pass a test in a given block.
- [objects(options:passingTest:)](objects%28options_passingtest_%29.md): Returns a set of objects that pass a test in a given block, using the specified enumeration options.

# filteredSetUsingPredicate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates a given predicate against each object in the receiving set and returns a new set containing the objects for which the predicate returns true.

## Declaration

```objectivec
- (NSSet<id> *) filteredSetUsingPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: A predicate.

<a id="return-value"></a>

## Return Value

A new set containing the objects in the receiving set for which `predicate` returns true.

<a id="Discussion"></a>

## Discussion

The following example illustrates the use of this method.

```objc
NSSet *sourceSet =
    [NSSet setWithObjects:@"One", @"Two", @"Three", @"Four", nil];
NSPredicate *predicate =
    [NSPredicate predicateWithFormat:@"SELF beginswith 'T'"];
NSSet *filteredSet =
    [sourceSet filteredSetUsingPredicate:predicate];
// filteredSet contains (Two, Three)
```

## See Also

### Accessing Set Members

- [allObjects](allobjects.md): An array containing the set’s members, or an empty array if the set has no members.
- [anyObject](anyobject%28%29.md): Returns one of the objects in the set, or `nil` if the set contains no objects.
- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the set.
- [makeObjectsPerformSelector:](makeobjectsperformselector_.md): Sends a message specified by a given selector to each object in the set.
- [makeObjectsPerformSelector:withObject:](makeobjectsperformselector_withobject_.md): Sends a message specified by a given selector to each object in the set.
- [member:](member%28__%29.md): Determines whether a given object is present in the set, and returns that object if it is.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set.
- [enumerateObjectsUsingBlock:](enumerateobjects%28__%29.md): Executes a given block using each object in the set.
- [enumerateObjectsWithOptions:usingBlock:](enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [objectsPassingTest:](objects%28passingtest_%29.md): Returns a set of objects that pass a test in a given block.
- [objectsWithOptions:passingTest:](objects%28options_passingtest_%29.md): Returns a set of objects that pass a test in a given block, using the specified enumeration options.
