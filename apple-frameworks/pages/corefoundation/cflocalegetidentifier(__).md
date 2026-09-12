> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalegetidentifier(_:)](https://developer.apple.com/documentation/corefoundation/cflocalegetidentifier(_:))

# CFLocaleGetIdentifier(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the given locale’s identifier.

## Declaration

```swift
func CFLocaleGetIdentifier(_ locale: CFLocale!) -> CFLocaleIdentifier!
```

## Parameters

- `locale`: The locale object to examine.

<a id="return-value"></a>

## Return Value

A string representation of `locale`’s identifier. This may not be the same string that was used to create the locale—it may be canonicalized. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting Information About a Locale

- [CFLocaleCopyDisplayNameForPropertyValue(\_:\_:\_:)](cflocalecopydisplaynameforpropertyvalue%28______%29.md): Returns the display name for the given value.
- [CFLocaleGetValue(\_:\_:)](cflocalegetvalue%28____%29.md): Returns the corresponding value for the given key of a locale’s key-value pair.

# CFLocaleGetIdentifier (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the given locale’s identifier.

## Declaration

```objectivec
extern CFLocaleIdentifierCFLocaleGetIdentifier(CFLocaleRef locale);
```

## Parameters

- `locale`: The locale object to examine.

<a id="return-value"></a>

## Return Value

A string representation of `locale`’s identifier. This may not be the same string that was used to create the locale—it may be canonicalized. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting Information About a Locale

- [CFLocaleCopyDisplayNameForPropertyValue](cflocalecopydisplaynameforpropertyvalue%28______%29.md): Returns the display name for the given value.
- [CFLocaleGetValue](cflocalegetvalue%28____%29.md): Returns the corresponding value for the given key of a locale’s key-value pair.
