> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/string(from:)](https://developer.apple.com/documentation/foundation/numberformatter/string(from:))

# string(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string containing the formatted value of the provided number object.

## Declaration

```swift
func string(from number: NSNumber) -> String?
```

## Parameters

- `number`: An [NSNumber](../nsnumber.md) object that is parsed to create the returned string object.

<a id="return-value"></a>

## Return Value

A string containing the formatted value of `number` using the receiver’s current settings.

## See Also

### Converting Between Numbers and Strings

- [getObjectValue(\_:for:range:)](getobjectvalue%28__for_range_%29.md): Returns by reference a cell-content object after creating it from a range of characters in a given string.
- [number(from:)](number%28from_%29.md): Returns an [NSNumber](../nsnumber.md) object created by parsing a given string.
- [localizedString(from:number:)](localizedstring%28from_number_%29.md): Returns a localized number string with the specified style.

# stringFromNumber: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string containing the formatted value of the provided number object.

## Declaration

```objectivec
- (NSString *) stringFromNumber:(NSNumber *) number;
```

## Parameters

- `number`: An [NSNumber](../nsnumber.md) object that is parsed to create the returned string object.

<a id="return-value"></a>

## Return Value

A string containing the formatted value of `number` using the receiver’s current settings.

## See Also

### Converting Between Numbers and Strings

- [getObjectValue:forString:range:error:](getobjectvalue%28__for_range_%29.md): Returns by reference a cell-content object after creating it from a range of characters in a given string.
- [numberFromString:](number%28from_%29.md): Returns an [NSNumber](../nsnumber.md) object created by parsing a given string.
- [localizedStringFromNumber:numberStyle:](localizedstring%28from_number_%29.md): Returns a localized number string with the specified style.
