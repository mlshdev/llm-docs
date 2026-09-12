> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/instantmessageaddresses](https://developer.apple.com/documentation/contacts/cncontact/instantmessageaddresses)

# instantMessageAddresses (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of labeled IM addresses for the contact.

## Declaration

```swift
var instantMessageAddresses: [CNLabeledValue<CNInstantMessageAddress>] { get }
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has a label and a [CNInstantMessageAddress](../cninstantmessageaddress.md) value.

## See Also

### Getting Related Information

- [contactRelations](contactrelations.md): An array of labeled relations for the contact.

# instantMessageAddresses (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of labeled IM addresses for the contact.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CNLabeledValue<CNInstantMessageAddress *> *> * instantMessageAddresses;
```

```objectivec
@property (atomic, copy, readonly) NSArray<CNLabeledValue<CNInstantMessageAddress *> *> * instantMessageAddresses;
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has a label and a [CNInstantMessageAddress](../cninstantmessageaddress.md) value.

## See Also

### Getting Related Information

- [contactRelations](contactrelations.md): An array of labeled relations for the contact.
