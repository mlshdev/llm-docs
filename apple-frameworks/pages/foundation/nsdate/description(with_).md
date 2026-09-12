> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/description(with:)](https://developer.apple.com/documentation/foundation/nsdate/description(with:))

# description(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of the date using the given locale.

## Declaration

```swift
func description(with locale: Any?) -> String
```

## Parameters

- `locale`: An `NSLocale` object.

  If you pass `nil`, `NSDate` formats the date in the same way as the [description](description.md) property.

  In OS X v10.4 and earlier, this parameter was an `NSDictionary` object. If you pass in an `NSDictionary` object in OS X v10.5, `NSDate` uses the default user locale—the same as if you passed in `[NSLocale currentLocale].`

<a id="return-value"></a>

## Return Value

A string representation of the receiver, using the given locale, or if the locale argument is `nil`, in the international format `YYYY-MM-DD HH:MM:SS ±HHMM`, where `±HHMM` represents the time zone offset in hours and minutes from UTC (for example, “`2001-03-24 10:45:32 +0600`”)

<a id="Discussion"></a>

## Discussion

In OS X v10.4 and earlier, `localeDictionary` is an `NSDictionary` object containing locale data. To use the user’s preferences, you can use `[[NSUserDefaults standardUserDefaults] dictionaryRepresentation].`

## See Also

### Describing Dates

- [description](description.md): A string representation of the date object.
- [customPlaygroundQuickLook](customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for this object.

# descriptionWithLocale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of the date using the given locale.

## Declaration

```objectivec
- (NSString *) descriptionWithLocale:(id) locale;
```

## Parameters

- `locale`: An `NSLocale` object.

  If you pass `nil`, `NSDate` formats the date in the same way as the [description](description.md) property.

  In OS X v10.4 and earlier, this parameter was an `NSDictionary` object. If you pass in an `NSDictionary` object in OS X v10.5, `NSDate` uses the default user locale—the same as if you passed in `[NSLocale currentLocale].`

<a id="return-value"></a>

## Return Value

A string representation of the receiver, using the given locale, or if the locale argument is `nil`, in the international format `YYYY-MM-DD HH:MM:SS ±HHMM`, where `±HHMM` represents the time zone offset in hours and minutes from UTC (for example, “`2001-03-24 10:45:32 +0600`”)

<a id="Discussion"></a>

## Discussion

In OS X v10.4 and earlier, `localeDictionary` is an `NSDictionary` object containing locale data. To use the user’s preferences, you can use `[[NSUserDefaults standardUserDefaults] dictionaryRepresentation].`

## See Also

### Describing Dates

- [description](description.md): A string representation of the date object.
