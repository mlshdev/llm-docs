> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobjectprotocol/hash](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/hash)

# hash (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an integer that can be used as a table address in a hash table structure.

## Declaration

```swift
var hash: Int { get }
```

<a id="return-value"></a>

## Return Value

An integer that can be used as a table address in a hash table structure.

<a id="Discussion"></a>

## Discussion

If two objects are equal (as determined by the [isEqual(\_:)](isequal%28__%29.md) method), they must have the same hash value. This last point is particularly important if you define [hash](hash.md) in a subclass and intend to put instances of that subclass into a collection.

If a mutable object is added to a collection that uses hash values to determine the object’s position in the collection, the value returned by the [hash](hash.md) method of the object must not change while the object is in the collection. Therefore, either the [hash](hash.md) method must not rely on any of the object’s internal state information or you must make sure the object’s internal state information does not change while the object is in the collection. Thus, for example, a mutable dictionary can be put in a hash table but you must not change it while it is in there. (Note that it can be difficult to know whether or not a given object is in a collection.)

## See Also

### Identifying and Comparing Objects

- [isEqual(\_:)](isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.
- [self()](self%28%29.md): Returns the receiver.

# hash (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an integer that can be used as a table address in a hash table structure.

## Declaration

```objectivec
@property (readonly) NSUInteger hash;
```

<a id="return-value"></a>

## Return Value

An integer that can be used as a table address in a hash table structure.

<a id="Discussion"></a>

## Discussion

If two objects are equal (as determined by the [isEqual:](isequal%28__%29.md) method), they must have the same hash value. This last point is particularly important if you define [hash](hash.md) in a subclass and intend to put instances of that subclass into a collection.

If a mutable object is added to a collection that uses hash values to determine the object’s position in the collection, the value returned by the [hash](hash.md) method of the object must not change while the object is in the collection. Therefore, either the [hash](hash.md) method must not rely on any of the object’s internal state information or you must make sure the object’s internal state information does not change while the object is in the collection. Thus, for example, a mutable dictionary can be put in a hash table but you must not change it while it is in there. (Note that it can be difficult to know whether or not a given object is in a collection.)

## See Also

### Identifying and Comparing Objects

- [isEqual:](isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.
- [self](self%28%29.md): Returns the receiver.
