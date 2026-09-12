> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/init(dictionary:)-9fw1u](https://developer.apple.com/documentation/foundation/nsdictionary/init(dictionary:)-9fw1u)

# init(dictionary:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated dictionary by placing in it the keys and values contained in another given dictionary.

## Declaration

```swift
convenience init(dictionary otherDictionary: [AnyHashable : Any])
```

## Parameters

- `otherDictionary`: A dictionary containing the keys and values with which to initialize the new dictionary.

<a id="return-value"></a>

## Return Value

An initialized dictionary—which might be different than the original receiver—containing the keys and values found in `otherDictionary`.

## See Also

### Creating a Dictionary from Another Dictionary

- [init(dictionary:copyItems:)](init%28dictionary_copyitems_%29.md): Initializes a newly allocated dictionary using the objects contained in another given dictionary.
- [init(dictionaryLiteral:)](init%28dictionaryliteral_%29.md): Initializes a newly allocated dictionary from the given key-value pairs.

# initWithDictionary: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated dictionary by placing in it the keys and values contained in another given dictionary.

## Declaration

```objectivec
- (instancetype) initWithDictionary:(NSDictionary<id,id> *) otherDictionary;
```

## Parameters

- `otherDictionary`: A dictionary containing the keys and values with which to initialize the new dictionary.

<a id="return-value"></a>

## Return Value

An initialized dictionary—which might be different than the original receiver—containing the keys and values found in `otherDictionary`.

## See Also

### Related Documentation

- [dictionaryWithDictionary:](dictionarywithdictionary_.md): Creates a dictionary containing the keys and values from another given dictionary.

### Creating a Dictionary from Another Dictionary

- [dictionaryWithDictionary:](dictionarywithdictionary_.md): Creates a dictionary containing the keys and values from another given dictionary.
- [initWithDictionary:copyItems:](init%28dictionary_copyitems_%29.md): Initializes a newly allocated dictionary using the objects contained in another given dictionary.
