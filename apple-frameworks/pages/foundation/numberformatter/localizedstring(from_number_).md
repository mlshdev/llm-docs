> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/localizedstring(from:number:)](https://developer.apple.com/documentation/foundation/numberformatter/localizedstring(from:number:))

# localizedString(from:number:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized number string with the specified style.

## Declaration

```swift
class func localizedString(from num: NSNumber, number nstyle: NumberFormatter.Style) -> String
```

## Parameters

- `num`: The number to localize
- `nstyle`: The localization style to use. See [NumberFormatter.Style](style.md) for the supported values.

<a id="return-value"></a>

## Return Value

An appropriately formatted `NSString`.

## See Also

### Converting Between Numbers and Strings

- [getObjectValue(\_:for:range:)](getobjectvalue%28__for_range_%29.md): Returns by reference a cell-content object after creating it from a range of characters in a given string.
- [number(from:)](number%28from_%29.md): Returns an [NSNumber](../nsnumber.md) object created by parsing a given string.
- [string(from:)](string%28from_%29.md): Returns a string containing the formatted value of the provided number object.

# localizedStringFromNumber:numberStyle: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized number string with the specified style.

## Declaration

```objectivec
+ (NSString *) localizedStringFromNumber:(NSNumber *) num numberStyle:(NSNumberFormatterStyle) nstyle;
```

## Parameters

- `num`: The number to localize
- `nstyle`: The localization style to use. See [NSNumberFormatterStyle](style.md) for the supported values.

<a id="return-value"></a>

## Return Value

An appropriately formatted `NSString`.

## See Also

### Converting Between Numbers and Strings

- [getObjectValue:forString:range:error:](getobjectvalue%28__for_range_%29.md): Returns by reference a cell-content object after creating it from a range of characters in a given string.
- [numberFromString:](number%28from_%29.md): Returns an [NSNumber](../nsnumber.md) object created by parsing a given string.
- [stringFromNumber:](string%28from_%29.md): Returns a string containing the formatted value of the provided number object.
