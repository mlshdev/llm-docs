> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/phonenumbercheckingresult(range:phonenumber:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/phonenumbercheckingresult(range:phonenumber:))

# phoneNumberCheckingResult(range:phoneNumber:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified phone number.

## Declaration

```swift
class func phoneNumberCheckingResult(range: NSRange, phoneNumber: String) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `phoneNumber`: The phone number.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [phoneNumber](checkingtype/phonenumber.md).

## See Also

### Text Checking Results for Phone Numbers

- [phoneNumber](phonenumber.md): The phone number of a type checking result.

# phoneNumberCheckingResultWithRange:phoneNumber: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified phone number.

## Declaration

```objectivec
+ (NSTextCheckingResult *) phoneNumberCheckingResultWithRange:(NSRange) range phoneNumber:(NSString *) phoneNumber;
```

## Parameters

- `range`: The range of the detected result.
- `phoneNumber`: The phone number.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypePhoneNumber](checkingtype/phonenumber.md).

## See Also

### Text Checking Results for Phone Numbers

- [phoneNumber](phonenumber.md): The phone number of a type checking result.
