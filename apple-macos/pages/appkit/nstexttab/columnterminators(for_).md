> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexttab/columnterminators(for:)](https://developer.apple.com/documentation/appkit/nstexttab/columnterminators(for:))

# columnTerminators(for:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Returns the column terminators for the specified locale.

## Declaration

```swift
class func columnTerminators(for aLocale: Locale?) -> CharacterSet
```

## Parameters

- `aLocale`: The locale to use when determining the terminators. Specify `nil` to use the system’s current locale. You can get the user’s locale using the [current](https://developer.apple.com/documentation/foundation/nslocale/current) method of [NSLocale](https://developer.apple.com/documentation/foundation/nslocale).

<a id="return-value"></a>

## Return Value

The characters for the column terminators.

<a id="Discussion"></a>

## Discussion

The returned value can be used as the value for [columnTerminators](optionkey/columnterminators.md) to make a decimal tab stop.

## See Also

### Getting text tab information

- [alignment](alignment.md): The text alignment of the text tab.
- [options](options.md): The dictionary of attributes for the text tab.

# columnTerminatorsForLocale: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Returns the column terminators for the specified locale.

## Declaration

```objectivec
+ (NSCharacterSet *) columnTerminatorsForLocale:(NSLocale *) aLocale;
```

## Parameters

- `aLocale`: The locale to use when determining the terminators. Specify `nil` to use the system’s current locale. You can get the user’s locale using the [currentLocale](https://developer.apple.com/documentation/foundation/nslocale/current) method of [NSLocale](https://developer.apple.com/documentation/foundation/nslocale).

<a id="return-value"></a>

## Return Value

The characters for the column terminators.

<a id="Discussion"></a>

## Discussion

The returned value can be used as the value for [NSTabColumnTerminatorsAttributeName](optionkey/columnterminators.md) to make a decimal tab stop.

## See Also

### Getting text tab information

- [alignment](alignment.md): The text alignment of the text tab.
- [options](options.md): The dictionary of attributes for the text tab.
