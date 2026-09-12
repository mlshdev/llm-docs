> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattercreate(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattercreate(_:_:_:))

# CFNumberFormatterCreate(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new CFNumberFormatter object, localized to the given locale, which will format numbers to the given style.

## Declaration

```swift
func CFNumberFormatterCreate(_ allocator: CFAllocator!, _ locale: CFLocale!, _ style: CFNumberFormatterStyle) -> CFNumberFormatter!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `locale`: A locale to use for localization. If `NULL`, the function uses the default system locale. Use [CFLocaleCopyCurrent()](cflocalecopycurrent%28%29.md) to specify the locale of the current user.
- `style`: A number style. See [Number Formatter Styles](number-formatter-styles.md) for possible values.

<a id="return-value"></a>

## Return Value

A new number formatter, localized to the given locale, which will format numbers using the given style. Returns `NULL` if there was a problem creating the formatter. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

# CFNumberFormatterCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new CFNumberFormatter object, localized to the given locale, which will format numbers to the given style.

## Declaration

```objectivec
extern CFNumberFormatterRefCFNumberFormatterCreate(CFAllocatorRef allocator, CFLocaleRef locale, CFNumberFormatterStyle style);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `locale`: A locale to use for localization. If `NULL`, the function uses the default system locale. Use [CFLocaleCopyCurrent](cflocalecopycurrent%28%29.md) to specify the locale of the current user.
- `style`: A number style. See [Number Formatter Styles](number-formatter-styles.md) for possible values.

<a id="return-value"></a>

## Return Value

A new number formatter, localized to the given locale, which will format numbers using the given style. Returns `NULL` if there was a problem creating the formatter. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).
