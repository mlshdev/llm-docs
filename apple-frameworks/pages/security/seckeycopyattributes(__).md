> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeycopyattributes(_:)](https://developer.apple.com/documentation/security/seckeycopyattributes(_:))

# SecKeyCopyAttributes(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Gets the attributes of a given key.

## Declaration

```swift
func SecKeyCopyAttributes(_ key: SecKey) -> CFDictionary?
```

## Parameters

- `key`: The key whose attributes you want.

<a id="return-value"></a>

## Return Value

A dictionary containing the key’s attributes. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this dictionary’s memory when you are done with it.

# SecKeyCopyAttributes (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Gets the attributes of a given key.

## Declaration

```objectivec
CFDictionaryRefSecKeyCopyAttributes(SecKeyRef key);
```

## Parameters

- `key`: The key whose attributes you want.

<a id="return-value"></a>

## Return Value

A dictionary containing the key’s attributes. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this dictionary’s memory when you are done with it.
