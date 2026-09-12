> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstexttab/columnterminators(for:)](https://developer.apple.com/documentation/uikit/nstexttab/columnterminators(for:))

# columnTerminators(for:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the column terminators for the specified locale.

## Declaration

```swift
class func columnTerminators(for aLocale: Locale?) -> CharacterSet
```

## Parameters

- `aLocale`: The locale to use when determining the terminators. Specify `nil` to use the system’s current locale. You can get the user’s locale using the [current](../../foundation/nslocale/current.md) method of [NSLocale](../../foundation/nslocale.md).

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

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the column terminators for the specified locale.

## Declaration

```objectivec
+ (NSCharacterSet *) columnTerminatorsForLocale:(NSLocale *) aLocale;
```

## Parameters

- `aLocale`: The locale to use when determining the terminators. Specify `nil` to use the system’s current locale. You can get the user’s locale using the [currentLocale](../../foundation/nslocale/current.md) method of [NSLocale](../../foundation/nslocale.md).

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
