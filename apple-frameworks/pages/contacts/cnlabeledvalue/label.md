> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contacts/cnlabeledvalue/label

# label (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The label for a contact property value.

## Declaration

```swift
var label: String? { get }
```

<a id="Discussion"></a>

## Discussion

A contact property can have a label, such as Home, Work, iPhone, etc. For some predefined label constants, see[CNPhoneNumber](../cnphonenumber.md), and [CNContactRelation](../cncontactrelation.md). Custom labels can also be used. Labels are not used for [CNSocialProfile](../cnsocialprofile.md) and [CNInstantMessageAddress](../cninstantmessageaddress.md) properties.

## See Also

### Getting the label and value

- [value](value.md): A contact property value.

# label (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The label for a contact property value.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * label;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * label;
```

<a id="Discussion"></a>

## Discussion

A contact property can have a label, such as Home, Work, iPhone, etc. For some predefined label constants, see[CNPhoneNumber](../cnphonenumber.md), and [CNContactRelation](../cncontactrelation.md). Custom labels can also be used. Labels are not used for [CNSocialProfile](../cnsocialprofile.md) and [CNInstantMessageAddress](../cninstantmessageaddress.md) properties.

## See Also

### Getting the label and value

- [value](value.md): A contact property value.
