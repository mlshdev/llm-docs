> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalecopydisplaynameforpropertyvalue(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cflocalecopydisplaynameforpropertyvalue(_:_:_:))

# CFLocaleCopyDisplayNameForPropertyValue(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the display name for the given value.

## Declaration

```swift
func CFLocaleCopyDisplayNameForPropertyValue(_ displayLocale: CFLocale!, _ key: CFLocaleKey!, _ value: CFString!) -> CFString!
```

## Parameters

- `displayLocale`: A locale object.
- `key`: A string that identifies the type that `value` is. It must be one of the standard locale property keys (see [Locale Property Keys](locale-property-keys.md)).
- `value`: The value for which the display name is required.

<a id="return-value"></a>

## Return Value

The display name for `value`. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note that not all locale property keys have values with display name values.

## See Also

### Getting Information About a Locale

- [CFLocaleGetValue(\_:\_:)](cflocalegetvalue%28____%29.md): Returns the corresponding value for the given key of a locale’s key-value pair.
- [CFLocaleGetIdentifier(\_:)](cflocalegetidentifier%28__%29.md): Returns the given locale’s identifier.

# CFLocaleCopyDisplayNameForPropertyValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the display name for the given value.

## Declaration

```objectivec
extern CFStringRefCFLocaleCopyDisplayNameForPropertyValue(CFLocaleRef displayLocale, CFLocaleKey key, CFStringRef value);
```

## Parameters

- `displayLocale`: A locale object.
- `key`: A string that identifies the type that `value` is. It must be one of the standard locale property keys (see [Locale Property Keys](locale-property-keys.md)).
- `value`: The value for which the display name is required.

<a id="return-value"></a>

## Return Value

The display name for `value`. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note that not all locale property keys have values with display name values.

## See Also

### Getting Information About a Locale

- [CFLocaleGetValue](cflocalegetvalue%28____%29.md): Returns the corresponding value for the given key of a locale’s key-value pair.
- [CFLocaleGetIdentifier](cflocalegetidentifier%28__%29.md): Returns the given locale’s identifier.
