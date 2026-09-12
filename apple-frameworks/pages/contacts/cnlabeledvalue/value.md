> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnlabeledvalue/value](https://developer.apple.com/documentation/contacts/cnlabeledvalue/value)

# value (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A contact property value.

## Declaration

```swift
@NSCopying var value: ValueType { get }
```

<a id="Discussion"></a>

## Discussion

A contact property value, such as [CNPhoneNumber](../cnphonenumber.md) for a phone number, NSString for an email address, and so on. For valid values, see [CNContact](../cncontact.md) properties that are arrays of labeled value objects.

## See Also

### Getting the label and value

- [label](label.md): The label for a contact property value.

# value (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A contact property value.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) ValueType value;
```

```objectivec
@property (atomic, copy, readonly) ValueType value;
```

<a id="Discussion"></a>

## Discussion

A contact property value, such as [CNPhoneNumber](../cnphonenumber.md) for a phone number, NSString for an email address, and so on. For valid values, see [CNContact](../cncontact.md) properties that are arrays of labeled value objects.

## See Also

### Getting the label and value

- [label](label.md): The label for a contact property value.
