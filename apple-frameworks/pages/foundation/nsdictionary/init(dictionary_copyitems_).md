> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/init(dictionary:copyitems:)](https://developer.apple.com/documentation/foundation/nsdictionary/init(dictionary:copyitems:))

# init(dictionary:copyItems:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated dictionary using the objects contained in another given dictionary.

## Declaration

```swift
convenience init(dictionary otherDictionary: [AnyHashable : Any], copyItems flag: Bool)
```

## Parameters

- `otherDictionary`: A dictionary containing the keys and values with which to initialize the new dictionary.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), each object in `otherDictionary` receives a [copyWithZone:](../../objectivec/nsobject-swift.class/copywithzone_.md) message to create a copy of the object—objects must conform to the `NSCopying` protocol. In a managed memory environment, this is instead of the `retain` message the object would otherwise receive. The object copy is then added to the returned dictionary.

  If [false](https://developer.apple.com/documentation/swift/false), then in a managed memory environment each object in `otherDictionary` simply receives a `retain` message when it is added to the returned dictionary.

<a id="return-value"></a>

## Return Value

An initialized object—which might be different than the original receiver—containing the keys and values found in `otherDictionary`.

<a id="Discussion"></a>

## Discussion

After an immutable dictionary has been initialized in this way, it cannot be modified.

The [copy(with:)](../nscopying/copy%28with_%29.md) method performs a shallow copy. If you have a collection of arbitrary depth, passing [true](https://developer.apple.com/documentation/swift/true) for the `flag` parameter will perform an immutable copy of the first level below the surface. If you pass [false](https://developer.apple.com/documentation/swift/false) the mutability of the first level is unaffected. In either case, the mutability of all deeper levels is unaffected.

## See Also

### Creating a Dictionary from Another Dictionary

- [init(dictionary:)](init%28dictionary_%29-9fw1u.md): Initializes a newly allocated dictionary by placing in it the keys and values contained in another given dictionary.
- [init(dictionaryLiteral:)](init%28dictionaryliteral_%29.md): Initializes a newly allocated dictionary from the given key-value pairs.

# initWithDictionary:copyItems: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated dictionary using the objects contained in another given dictionary.

## Declaration

```objectivec
- (instancetype) initWithDictionary:(NSDictionary<id,id> *) otherDictionary copyItems:(BOOL) flag;
```

## Parameters

- `otherDictionary`: A dictionary containing the keys and values with which to initialize the new dictionary.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), each object in `otherDictionary` receives a [copyWithZone:](../../objectivec/nsobject-swift.class/copywithzone_.md) message to create a copy of the object—objects must conform to the `NSCopying` protocol. In a managed memory environment, this is instead of the `retain` message the object would otherwise receive. The object copy is then added to the returned dictionary.

  If [false](https://developer.apple.com/documentation/swift/false), then in a managed memory environment each object in `otherDictionary` simply receives a `retain` message when it is added to the returned dictionary.

<a id="return-value"></a>

## Return Value

An initialized object—which might be different than the original receiver—containing the keys and values found in `otherDictionary`.

<a id="Discussion"></a>

## Discussion

After an immutable dictionary has been initialized in this way, it cannot be modified.

The [copyWithZone:](../nscopying/copy%28with_%29.md) method performs a shallow copy. If you have a collection of arbitrary depth, passing [true](https://developer.apple.com/documentation/swift/true) for the `flag` parameter will perform an immutable copy of the first level below the surface. If you pass [false](https://developer.apple.com/documentation/swift/false) the mutability of the first level is unaffected. In either case, the mutability of all deeper levels is unaffected.

## See Also

### Creating a Dictionary from Another Dictionary

- [dictionaryWithDictionary:](dictionarywithdictionary_.md): Creates a dictionary containing the keys and values from another given dictionary.
- [initWithDictionary:](init%28dictionary_%29-9fw1u.md): Initializes a newly allocated dictionary by placing in it the keys and values contained in another given dictionary.
