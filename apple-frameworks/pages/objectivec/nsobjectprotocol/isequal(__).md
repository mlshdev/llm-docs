> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobjectprotocol/isequal(_:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isequal(_:))

# isEqual(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the receiver and a given object are equal.

## Declaration

```swift
func isEqual(_ object: Any?) -> Bool
```

## Parameters

- `object`: The object to be compared to the receiver. May be `nil`, in which case this method returns [NO](../no.md).

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver and `anObject` are equal, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

This method defines what it means for instances to be equal. For example, a container object might define two containers as equal if their corresponding objects all respond [YES](../yes.md) to an [isEqual(\_:)](isequal%28__%29.md) request. See the [NSData](../../foundation/nsdata.md), [NSDictionary](../../foundation/nsdictionary.md), [NSArray](../../foundation/nsarray.md), and [NSString](../../foundation/nsstring.md) class specifications for examples of the use of this method.

If two objects are equal, they must have the same hash value. This last point is particularly important if you define [isEqual(\_:)](isequal%28__%29.md) in a subclass and intend to put instances of that subclass into a collection. Make sure you also define [hash](hash.md) in your subclass.

## See Also

### Identifying and Comparing Objects

- [hash](hash.md): Returns an integer that can be used as a table address in a hash table structure.
- [self()](self%28%29.md): Returns the receiver.

# isEqual: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the receiver and a given object are equal.

## Declaration

```objectivec
- (BOOL) isEqual:(id) object;
```

## Parameters

- `object`: The object to be compared to the receiver. May be `nil`, in which case this method returns [NO](../no.md).

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver and `anObject` are equal, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

This method defines what it means for instances to be equal. For example, a container object might define two containers as equal if their corresponding objects all respond [YES](../yes.md) to an [isEqual:](isequal%28__%29.md) request. See the [NSData](../../foundation/nsdata.md), [NSDictionary](../../foundation/nsdictionary.md), [NSArray](../../foundation/nsarray.md), and [NSString](../../foundation/nsstring.md) class specifications for examples of the use of this method.

If two objects are equal, they must have the same hash value. This last point is particularly important if you define [isEqual:](isequal%28__%29.md) in a subclass and intend to put instances of that subclass into a collection. Make sure you also define [hash](hash.md) in your subclass.

## See Also

### Identifying and Comparing Objects

- [hash](hash.md): Returns an integer that can be used as a table address in a hash table structure.
- [self](self%28%29.md): Returns the receiver.
