> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatter/ispartialstringvalid(_:proposedselectedrange:originalstring:originalselectedrange:errordescription:)](https://developer.apple.com/documentation/foundation/formatter/ispartialstringvalid(_:proposedselectedrange:originalstring:originalselectedrange:errordescription:))

# isPartialStringValid(\_:proposedSelectedRange:originalString:originalSelectedRange:errorDescription:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method should be implemented in subclasses that want to validate user changes to a string in a field, where the user changes are not necessarily at the end of the string, and preserve the selection (or set a different one, such as selecting the erroneous part of the string the user has typed).

## Declaration

```swift
func isPartialStringValid(_ partialStringPtr: AutoreleasingUnsafeMutablePointer<NSString>, proposedSelectedRange proposedSelRangePtr: NSRangePointer?, originalString origString: String, originalSelectedRange origSelRange: NSRange, errorDescription error: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool
```

## Parameters

- `partialStringPtr`: The new string to validate.
- `proposedSelRangePtr`: The selection range that will be used if the string is accepted or replaced.
- `origString`: The original string, before the proposed change.
- `origSelRange`: The selection range over which the change is to take place.

  If the user change is a deletion, `origSelRange` contains the range of the deleted characters.
- `error`: If non-`nil`, if validation fails contains an `NSString` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `partialStringPtr` is acceptable, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

In a subclass implementation, evaluate `partialString` according to the context. Return [true](https://developer.apple.com/documentation/swift/true) if `partialStringPtr` is acceptable and [false](https://developer.apple.com/documentation/swift/false) if `partialStringPtr` is unacceptable. If you return [false](https://developer.apple.com/documentation/swift/false) and assign a new string to `partialStringPtr` and a new range to `proposedSelRangePtr`, the string and selection range are changed, otherwise, if no values are assigned to `partialStringPtr` or `proposedSelRangePtr`, the change is rejected. If you return [false](https://developer.apple.com/documentation/swift/false), you can also return by indirection an `NSString` object (in `error`) that explains the reason why the validation failed; the delegate (if any) of the `NSControl` object managing the cell can then respond to the failure in control:didFailToValidatePartialString:errorDescription:.

## See Also

### Validating Partial Strings

- [isPartialStringValid(\_:newEditingString:errorDescription:)](ispartialstringvalid%28__neweditingstring_errordescription_%29.md): Returns a Boolean value that indicates whether a partial string is valid.

# isPartialStringValid:proposedSelectedRange:originalString:originalSelectedRange:errorDescription: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method should be implemented in subclasses that want to validate user changes to a string in a field, where the user changes are not necessarily at the end of the string, and preserve the selection (or set a different one, such as selecting the erroneous part of the string the user has typed).

## Declaration

```objectivec
- (BOOL) isPartialStringValid:(NSString **) partialStringPtr proposedSelectedRange:(NSRangePointer) proposedSelRangePtr originalString:(NSString *) origString originalSelectedRange:(NSRange) origSelRange errorDescription:(NSString **) error;
```

## Parameters

- `partialStringPtr`: The new string to validate.
- `proposedSelRangePtr`: The selection range that will be used if the string is accepted or replaced.
- `origString`: The original string, before the proposed change.
- `origSelRange`: The selection range over which the change is to take place.

  If the user change is a deletion, `origSelRange` contains the range of the deleted characters.
- `error`: If non-`nil`, if validation fails contains an `NSString` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `partialStringPtr` is acceptable, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

In a subclass implementation, evaluate `partialString` according to the context. Return [true](https://developer.apple.com/documentation/swift/true) if `partialStringPtr` is acceptable and [false](https://developer.apple.com/documentation/swift/false) if `partialStringPtr` is unacceptable. If you return [false](https://developer.apple.com/documentation/swift/false) and assign a new string to `partialStringPtr` and a new range to `proposedSelRangePtr`, the string and selection range are changed, otherwise, if no values are assigned to `partialStringPtr` or `proposedSelRangePtr`, the change is rejected. If you return [false](https://developer.apple.com/documentation/swift/false), you can also return by indirection an `NSString` object (in `error`) that explains the reason why the validation failed; the delegate (if any) of the `NSControl` object managing the cell can then respond to the failure in control:didFailToValidatePartialString:errorDescription:.

## See Also

### Validating Partial Strings

- [isPartialStringValid:newEditingString:errorDescription:](ispartialstringvalid%28__neweditingstring_errordescription_%29.md): Returns a Boolean value that indicates whether a partial string is valid.
