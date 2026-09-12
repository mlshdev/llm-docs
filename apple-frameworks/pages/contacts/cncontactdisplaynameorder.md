> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactdisplaynameorder](https://developer.apple.com/documentation/contacts/cncontactdisplaynameorder)

# CNContactDisplayNameOrder (Swift)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The formatting orders for contact names component.

## Declaration

```swift
enum CNContactDisplayNameOrder
```

## Topics

### Constants

- [CNContactDisplayNameOrder.userDefault](cncontactdisplaynameorder/userdefault.md): Display name order by user default.
- [CNContactDisplayNameOrder.givenNameFirst](cncontactdisplaynameorder/givennamefirst.md): Display name order by given name first.
- [CNContactDisplayNameOrder.familyNameFirst](cncontactdisplaynameorder/familynamefirst.md): Display name order by family name first.

### Initializers

- [init(rawValue:)](cncontactdisplaynameorder/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting format information

- [delimiter(for:)](cncontactformatter/delimiter%28for_%29.md): Returns the delimiter to use between name components.
- [nameOrder(for:)](cncontactformatter/nameorder%28for_%29.md): Returns the display name order.

# CNContactDisplayNameOrder (Objective-C)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The formatting orders for contact names component.

## Declaration

```objectivec
enum CNContactDisplayNameOrder : NSInteger;
```

## Topics

### Constants

- [CNContactDisplayNameOrderUserDefault](cncontactdisplaynameorder/userdefault.md): Display name order by user default.
- [CNContactDisplayNameOrderGivenNameFirst](cncontactdisplaynameorder/givennamefirst.md): Display name order by given name first.
- [CNContactDisplayNameOrderFamilyNameFirst](cncontactdisplaynameorder/familynamefirst.md): Display name order by family name first.

## See Also

### Getting format information

- [delimiterForContact:](cncontactformatter/delimiter%28for_%29.md): Returns the delimiter to use between name components.
- [nameOrderForContact:](cncontactformatter/nameorder%28for_%29.md): Returns the display name order.
