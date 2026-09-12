> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/sharedkeyset(forkeys:)](https://developer.apple.com/documentation/foundation/nsdictionary/sharedkeyset(forkeys:))

# sharedKeySet(forKeys:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a shared key set object for the specified keys.

## Declaration

```swift
class func sharedKeySet(forKeys keys: [any NSCopying]) -> Any
```

## Parameters

- `keys`: The array of keys. If the parameter is nil, an exception is thrown. If the array of keys is empty, an empty key set is returned.

<a id="return-value"></a>

## Return Value

A shared key set object.

<a id="Discussion"></a>

## Discussion

The array of `keys` may contain duplicates which are quietly ignored. Duplicate hash values of the keys are quietly allowed, but may cause lower performance and increase memory usage.

Typically you would create a shared key set for a given set of keys once, before creating shared key dictionaries, and retain and save the result of this method for use with the [NSMutableDictionary](../nsmutabledictionary.md) class method `dictionaryWithSharedKeySet:.`

# sharedKeySetForKeys: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a shared key set object for the specified keys.

## Declaration

```objectivec
+ (id) sharedKeySetForKeys:(NSArray<id<NSCopying>> *) keys;
```

## Parameters

- `keys`: The array of keys. If the parameter is nil, an exception is thrown. If the array of keys is empty, an empty key set is returned.

<a id="return-value"></a>

## Return Value

A shared key set object.

<a id="Discussion"></a>

## Discussion

The array of `keys` may contain duplicates which are quietly ignored. Duplicate hash values of the keys are quietly allowed, but may cause lower performance and increase memory usage.

Typically you would create a shared key set for a given set of keys once, before creating shared key dictionaries, and retain and save the result of this method for use with the [NSMutableDictionary](../nsmutabledictionary.md) class method `dictionaryWithSharedKeySet:.`
