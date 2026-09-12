> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactformatter/delimiter(for:)](https://developer.apple.com/documentation/contacts/cncontactformatter/delimiter(for:))

# delimiter(for:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the delimiter to use between name components.

## Declaration

```swift
class func delimiter(for contact: CNContact) -> String
```

## Parameters

- `contact`: The contact whose name is to be formatted.

<a id="Return-Value"></a>

## Return Value

The delimiter to use between name components.

<a id="Discussion"></a>

## Discussion

If `contact` is `nil`, or if it has no first name, middle name, or last name, this method returns an empty string.

## See Also

### Getting format information

- [nameOrder(for:)](nameorder%28for_%29.md): Returns the display name order.
- [CNContactDisplayNameOrder](../cncontactdisplaynameorder.md): The formatting orders for contact names component.

# delimiterForContact: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the delimiter to use between name components.

## Declaration

```objectivec
+ (NSString *) delimiterForContact:(CNContact *) contact;
```

## Parameters

- `contact`: The contact whose name is to be formatted.

<a id="Return-Value"></a>

## Return Value

The delimiter to use between name components.

<a id="Discussion"></a>

## Discussion

If `contact` is `nil`, or if it has no first name, middle name, or last name, this method returns an empty string.

## See Also

### Getting format information

- [nameOrderForContact:](nameorder%28for_%29.md): Returns the display name order.
- [CNContactDisplayNameOrder](../cncontactdisplaynameorder.md): The formatting orders for contact names component.
