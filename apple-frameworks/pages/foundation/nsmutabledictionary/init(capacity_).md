> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary/init(capacity:)](https://developer.apple.com/documentation/foundation/nsmutabledictionary/init(capacity:))

# init(capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated mutable dictionary, allocating enough memory to hold `numItems` entries.

## Declaration

```swift
init(capacity numItems: Int)
```

## Parameters

- `numItems`: The initial capacity of the initialized dictionary.

<a id="return-value"></a>

## Return Value

An initialized mutable dictionary, which might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

Mutable dictionaries allocate additional memory as needed, so `numItems` simply establishes the object’s initial capacity.

This method is a designated initializer of `NSMutableDictionary`.

## See Also

### Creating and Initializing a Mutable Dictionary

- [init()](init%28%29.md): Initializes a newly allocated mutable dictionary.
- [init(sharedKeySet:)](init%28sharedkeyset_%29.md): Creates a mutable dictionary which is optimized for dealing with a known set of keys.

# initWithCapacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated mutable dictionary, allocating enough memory to hold `numItems` entries.

## Declaration

```objectivec
- (instancetype) initWithCapacity:(NSUInteger) numItems;
```

## Parameters

- `numItems`: The initial capacity of the initialized dictionary.

<a id="return-value"></a>

## Return Value

An initialized mutable dictionary, which might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

Mutable dictionaries allocate additional memory as needed, so `numItems` simply establishes the object’s initial capacity.

This method is a designated initializer of `NSMutableDictionary`.

## See Also

### Related Documentation

- [dictionaryWithCapacity:](dictionarywithcapacity_.md): Creates and returns a mutable dictionary, initially giving it enough allocated memory to hold a given number of entries.

### Creating and Initializing a Mutable Dictionary

- [dictionaryWithCapacity:](dictionarywithcapacity_.md): Creates and returns a mutable dictionary, initially giving it enough allocated memory to hold a given number of entries.
- [init](init%28%29.md): Initializes a newly allocated mutable dictionary.
- [dictionaryWithSharedKeySet:](init%28sharedkeyset_%29.md): Creates a mutable dictionary which is optimized for dealing with a known set of keys.
