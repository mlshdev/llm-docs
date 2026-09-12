> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary/init()](https://developer.apple.com/documentation/foundation/nsmutabledictionary/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated mutable dictionary.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

A mutable dictionary.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer of `NSMutableDictionary`.

## See Also

### Creating and Initializing a Mutable Dictionary

- [init(capacity:)](init%28capacity_%29.md): Initializes a newly allocated mutable dictionary, allocating enough memory to hold `numItems` entries.
- [init(sharedKeySet:)](init%28sharedkeyset_%29.md): Creates a mutable dictionary which is optimized for dealing with a known set of keys.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated mutable dictionary.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

A mutable dictionary.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer of `NSMutableDictionary`.

## See Also

### Creating and Initializing a Mutable Dictionary

- [dictionaryWithCapacity:](dictionarywithcapacity_.md): Creates and returns a mutable dictionary, initially giving it enough allocated memory to hold a given number of entries.
- [initWithCapacity:](init%28capacity_%29.md): Initializes a newly allocated mutable dictionary, allocating enough memory to hold `numItems` entries.
- [dictionaryWithSharedKeySet:](init%28sharedkeyset_%29.md): Creates a mutable dictionary which is optimized for dealing with a known set of keys.
