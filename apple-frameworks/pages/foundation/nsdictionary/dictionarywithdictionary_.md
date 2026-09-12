> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/dictionarywithdictionary:](https://developer.apple.com/documentation/foundation/nsdictionary/dictionarywithdictionary:)

# dictionaryWithDictionary:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a dictionary containing the keys and values from another given dictionary.

## Declaration

```objectivec
+ (instancetype) dictionaryWithDictionary:(NSDictionary<id,id> *) dict;
```

## Parameters

- `dict`: A dictionary containing the keys and values with which to initialize the new dictionary.

<a id="return-value"></a>

## Return Value

A new dictionary containing the keys and values found in `dict`.

## See Also

### Creating a Dictionary from Another Dictionary

- [initWithDictionary:](init%28dictionary_%29-9fw1u.md): Initializes a newly allocated dictionary by placing in it the keys and values contained in another given dictionary.
- [initWithDictionary:copyItems:](init%28dictionary_copyitems_%29.md): Initializes a newly allocated dictionary using the objects contained in another given dictionary.
