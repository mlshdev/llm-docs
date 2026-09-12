> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/lengthformatter/getobjectvalue(_:for:errordescription:)](https://developer.apple.com/documentation/foundation/lengthformatter/getobjectvalue(_:for:errordescription:))

# getObjectValue(\_:for:errorDescription:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method is not supported for the `NSLengthFormatter` class.

## Declaration

```swift
func getObjectValue(_ obj: AutoreleasingUnsafeMutablePointer<AnyObject?>?, for string: String, errorDescription error: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool
```

## Parameters

- `obj`: An output parameter. If overridden, this parameter should contain the object created from the provided string.
- `string`: A string representation of the object.
- `error`: An output parameter. If overridden, this parameter should contain a description of any errors that occur. If you do not want to receive error messages, set this parameter to `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the conversion from string was successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can override this method in a subclass. For more information, see [Formatter](../formatter.md).

## See Also

### Related Documentation

- [getObjectValue(\_:for:errorDescription:)](../formatter/getobjectvalue%28__for_errordescription_%29.md): The default implementation of this method raises an exception.

### Formatting Length Strings

- [isForPersonHeightUse](isforpersonheightuse.md): A Boolean value that indicates whether the resulting string represents a person’s height.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in length strings.
- [string(fromMeters:)](string%28frommeters_%29.md): Returns a length string for the provided value.
- [string(fromValue:unit:)](string%28fromvalue_unit_%29.md): Returns a properly formatted length string for the given value and unit.
- [unitString(fromMeters:usedUnit:)](unitstring%28frommeters_usedunit_%29.md): Returns the unit string for the provided value.
- [unitString(fromValue:unit:)](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.

# getObjectValue:forString:errorDescription: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method is not supported for the `NSLengthFormatter` class.

## Declaration

```objectivec
- (BOOL) getObjectValue:(id*) obj forString:(NSString *) string errorDescription:(NSString **) error;
```

## Parameters

- `obj`: An output parameter. If overridden, this parameter should contain the object created from the provided string.
- `string`: A string representation of the object.
- `error`: An output parameter. If overridden, this parameter should contain a description of any errors that occur. If you do not want to receive error messages, set this parameter to `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the conversion from string was successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can override this method in a subclass. For more information, see [NSFormatter](../formatter.md).

## See Also

### Related Documentation

- [getObjectValue:forString:errorDescription:](../formatter/getobjectvalue%28__for_errordescription_%29.md): The default implementation of this method raises an exception.

### Formatting Length Strings

- [forPersonHeightUse](isforpersonheightuse.md): A Boolean value that indicates whether the resulting string represents a person’s height.
- [numberFormatter](numberformatter.md): The number formatter used to format the numbers in length strings.
- [stringFromMeters:](string%28frommeters_%29.md): Returns a length string for the provided value.
- [stringFromValue:unit:](string%28fromvalue_unit_%29.md): Returns a properly formatted length string for the given value and unit.
- [unitStringFromMeters:usedUnit:](unitstring%28frommeters_usedunit_%29.md): Returns the unit string for the provided value.
- [unitStringFromValue:unit:](unitstring%28fromvalue_unit_%29.md): Returns the unit string based on the provided value and unit.
- [unitStyle](unitstyle.md): The unit style used by this formatter.
