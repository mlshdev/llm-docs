> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnphonenumber/init(stringvalue:)](https://developer.apple.com/documentation/contacts/cnphonenumber/init(stringvalue:))

# init(stringValue:) (Swift)

**Framework:** Contacts  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a new phone number object initialized with the specified phone number string.

## Declaration

```swift
init(stringValue string: String)
```

## Parameters

- `string`: A string value with which to initializes the phone number object.

<a id="Return-Value"></a>

## Return Value

A newly initialized phone number object.

<a id="Discussion"></a>

## Discussion

You should initialize this with a phone number string. This method returns `nil` when the value of `string` is `nil`.

# initWithStringValue: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a new phone number object initialized with the specified phone number string.

## Declaration

```objectivec
- (instancetype) initWithStringValue:(NSString *) string;
```

## Parameters

- `string`: A string value with which to initializes the phone number object.

<a id="Return-Value"></a>

## Return Value

A newly initialized phone number object.

<a id="Discussion"></a>

## Discussion

You should initialize this with a phone number string. This method returns `nil` when the value of `string` is `nil`.

## See Also

### Creating a Phone Number Object

- [phoneNumberWithStringValue:](phonenumberwithstringvalue_.md): Returns a new phone number object initialized with the specified phone number string.
