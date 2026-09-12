> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/objectenumerator()](https://developer.apple.com/documentation/foundation/nshashtable/objectenumerator())

# objectEnumerator() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an enumerator object that lets you access each object in the hash table.

## Declaration

```swift
func objectEnumerator() -> NSEnumerator
```

<a id="return-value"></a>

## Return Value

An enumerator object that lets you access each object in the hash table.

<a id="Discussion"></a>

## Discussion

The following code fragment illustrates how you can use this method.

```objc
NSEnumerator *enumerator = [myHashTable objectEnumerator];
id value;
 
while ((value = [enumerator nextObject])) {
    /* code that acts on the hash table's values */
}
```

<a id="Special-Considerations"></a>

### Special Considerations

It is more efficient to use the fast enumeration protocol (see [NSFastEnumeration](../nsfastenumeration.md)).

## See Also

### Accessing Content

- [anyObject](anyobject.md): One of the objects in the hash table.
- [allObjects](allobjects.md): The hash table’s members.
- [setRepresentation](setrepresentation.md): A set that contains the hash table’s members.
- [count](count.md): The number of elements in the hash table.
- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether the hash table contains a given object.
- [member(\_:)](member%28__%29.md): Determines whether the hash table contains a given object, and returns that object if it is present

# objectEnumerator (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an enumerator object that lets you access each object in the hash table.

## Declaration

```objectivec
- (NSEnumerator<id> *) objectEnumerator;
```

<a id="return-value"></a>

## Return Value

An enumerator object that lets you access each object in the hash table.

<a id="Discussion"></a>

## Discussion

The following code fragment illustrates how you can use this method.

```objc
NSEnumerator *enumerator = [myHashTable objectEnumerator];
id value;
 
while ((value = [enumerator nextObject])) {
    /* code that acts on the hash table's values */
}
```

<a id="Special-Considerations"></a>

### Special Considerations

It is more efficient to use the fast enumeration protocol (see [NSFastEnumeration](../nsfastenumeration.md)).

## See Also

### Accessing Content

- [anyObject](anyobject.md): One of the objects in the hash table.
- [allObjects](allobjects.md): The hash table’s members.
- [setRepresentation](setrepresentation.md): A set that contains the hash table’s members.
- [count](count.md): The number of elements in the hash table.
- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether the hash table contains a given object.
- [member:](member%28__%29.md): Determines whether the hash table contains a given object, and returns that object if it is present
