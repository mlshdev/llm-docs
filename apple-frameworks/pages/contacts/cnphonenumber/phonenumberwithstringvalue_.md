> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnphonenumber/phonenumberwithstringvalue:](https://developer.apple.com/documentation/contacts/cnphonenumber/phonenumberwithstringvalue:)

# phoneNumberWithStringValue:

**Interface language:** Objective-C

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a new phone number object initialized with the specified phone number string.

## Declaration

```objectivec
+ (instancetype) phoneNumberWithStringValue:(NSString *) stringValue;
```

## Parameters

- `stringValue`: A string value with which to initialize phone number object.

<a id="Return-Value"></a>

## Return Value

A newly initialize the phone number object.

<a id="Discussion"></a>

## Discussion

This is a convenience class method that provides the same functionality as [initWithStringValue:](init%28stringvalue_%29.md). This method returns `nil` when the value of  `stringValue` is `nil`.

## See Also

### Creating a Phone Number Object

- [initWithStringValue:](init%28stringvalue_%29.md): Returns a new phone number object initialized with the specified phone number string.
