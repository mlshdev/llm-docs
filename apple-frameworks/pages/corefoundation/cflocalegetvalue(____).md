> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalegetvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cflocalegetvalue(_:_:))

# CFLocaleGetValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the corresponding value for the given key of a locale’s key-value pair.

## Declaration

```swift
func CFLocaleGetValue(_ locale: CFLocale!, _ key: CFLocaleKey!) -> CFTypeRef!
```

## Parameters

- `locale`: The locale object to examine.
- `key`: The key for which to obtain the corresponding value. Possible values are described in [Locale Property Keys](locale-property-keys.md).

<a id="return-value"></a>

## Return Value

The value corresponding to the given key in locale. The value may be any type of CFType object. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

Locale objects use key-value pairs to store property values. Use this function to get the value of a specific property.

## See Also

### Getting Information About a Locale

- [CFLocaleCopyDisplayNameForPropertyValue(\_:\_:\_:)](cflocalecopydisplaynameforpropertyvalue%28______%29.md): Returns the display name for the given value.
- [CFLocaleGetIdentifier(\_:)](cflocalegetidentifier%28__%29.md): Returns the given locale’s identifier.

# CFLocaleGetValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the corresponding value for the given key of a locale’s key-value pair.

## Declaration

```objectivec
extern CFTypeRefCFLocaleGetValue(CFLocaleRef locale, CFLocaleKey key);
```

## Parameters

- `locale`: The locale object to examine.
- `key`: The key for which to obtain the corresponding value. Possible values are described in [Locale Property Keys](locale-property-keys.md).

<a id="return-value"></a>

## Return Value

The value corresponding to the given key in locale. The value may be any type of CFType object. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

Locale objects use key-value pairs to store property values. Use this function to get the value of a specific property.

## See Also

### Getting Information About a Locale

- [CFLocaleCopyDisplayNameForPropertyValue](cflocalecopydisplaynameforpropertyvalue%28______%29.md): Returns the display name for the given value.
- [CFLocaleGetIdentifier](cflocalegetidentifier%28__%29.md): Returns the given locale’s identifier.
