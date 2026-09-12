> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary/init(sharedkeyset:)](https://developer.apple.com/documentation/foundation/nsmutabledictionary/init(sharedkeyset:))

# init(sharedKeySet:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a mutable dictionary which is optimized for dealing with a known set of keys.

## Declaration

```swift
init(sharedKeySet keyset: Any)
```

## Parameters

- `keyset`: The `keyset`, created by the [NSDictionary](../nsdictionary.md) class method [sharedKeySet(forKeys:)](../nsdictionary/sharedkeyset%28forkeys_%29.md).

  > **Important**

  >  If `keyset` is `nil`, an exception is raised. If `keyset` is not an object returned by [sharedKeySet(forKeys:)](../nsdictionary/sharedkeyset%28forkeys_%29.md), an exception is raised.

<a id="return-value"></a>

## Return Value

A new mutable dictionary optimized for a known set of keys.

<a id="Discussion"></a>

## Discussion

Keys that are not in the key set can still be set in the dictionary, but that usage is not optimal.

## See Also

### Creating and Initializing a Mutable Dictionary

- [init(capacity:)](init%28capacity_%29.md): Initializes a newly allocated mutable dictionary, allocating enough memory to hold `numItems` entries.
- [init()](init%28%29.md): Initializes a newly allocated mutable dictionary.

# dictionaryWithSharedKeySet: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a mutable dictionary which is optimized for dealing with a known set of keys.

## Declaration

```objectivec
+ (NSMutableDictionary<id,id> *) dictionaryWithSharedKeySet:(id) keyset;
```

## Parameters

- `keyset`: The `keyset`, created by the [NSDictionary](../nsdictionary.md) class method [sharedKeySetForKeys:](../nsdictionary/sharedkeyset%28forkeys_%29.md).

  > **Important**

  >  If `keyset` is `nil`, an exception is raised. If `keyset` is not an object returned by [sharedKeySetForKeys:](../nsdictionary/sharedkeyset%28forkeys_%29.md), an exception is raised.

<a id="return-value"></a>

## Return Value

A new mutable dictionary optimized for a known set of keys.

<a id="Discussion"></a>

## Discussion

Keys that are not in the key set can still be set in the dictionary, but that usage is not optimal.

## See Also

### Creating and Initializing a Mutable Dictionary

- [dictionaryWithCapacity:](dictionarywithcapacity_.md): Creates and returns a mutable dictionary, initially giving it enough allocated memory to hold a given number of entries.
- [initWithCapacity:](init%28capacity_%29.md): Initializes a newly allocated mutable dictionary, allocating enough memory to hold `numItems` entries.
- [init](init%28%29.md): Initializes a newly allocated mutable dictionary.
