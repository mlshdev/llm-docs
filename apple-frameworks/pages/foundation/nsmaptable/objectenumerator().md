> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptable/objectenumerator()](https://developer.apple.com/documentation/foundation/nsmaptable/objectenumerator())

# objectEnumerator() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an enumerator object that lets you access each value in the map table.

## Declaration

```swift
func objectEnumerator() -> NSEnumerator?
```

<a id="return-value"></a>

## Return Value

An enumerator object that lets you access each value in the map table.

<a id="Discussion"></a>

## Discussion

The following code fragment illustrates how you might use the method.

```objc
NSEnumerator *enumerator = [myMapTable objectEnumerator];
id value;
 
while ((value = [enumerator nextObject])) {
    /* code that acts on the map table's values */
}
```

<a id="Special-Considerations"></a>

### Special Considerations

It is more efficient to use the fast enumeration protocol (see [NSFastEnumeration](../nsfastenumeration.md)).

## See Also

### Accessing Content

- [object(forKey:)](object%28forkey_%29.md): Returns a the value associated with a given key.
- [keyEnumerator()](keyenumerator%28%29.md): Returns an enumerator object that lets you access each key in the map table.
- [count](count.md): The number of key-value pairs in the map table.

# objectEnumerator (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an enumerator object that lets you access each value in the map table.

## Declaration

```objectivec
- (NSEnumerator<id> *) objectEnumerator;
```

<a id="return-value"></a>

## Return Value

An enumerator object that lets you access each value in the map table.

<a id="Discussion"></a>

## Discussion

The following code fragment illustrates how you might use the method.

```objc
NSEnumerator *enumerator = [myMapTable objectEnumerator];
id value;
 
while ((value = [enumerator nextObject])) {
    /* code that acts on the map table's values */
}
```

<a id="Special-Considerations"></a>

### Special Considerations

It is more efficient to use the fast enumeration protocol (see [NSFastEnumeration](../nsfastenumeration.md)).

## See Also

### Accessing Content

- [objectForKey:](object%28forkey_%29.md): Returns a the value associated with a given key.
- [keyEnumerator](keyenumerator%28%29.md): Returns an enumerator object that lets you access each key in the map table.
- [count](count.md): The number of key-value pairs in the map table.
