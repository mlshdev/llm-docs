> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpickerviewcontroller/displayedpropertykeys](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller/displayedpropertykeys)

# displayedPropertyKeys (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The [CNContact](../../contacts/cncontact.md) property keys to display in the contact detail card.

## Declaration

```swift
var displayedPropertyKeys: [String]? { get set }
```

<a id="discussion"></a>

## Discussion

All the properties of the contact are displayed if this property is not set.

# displayedPropertyKeys (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The [CNContact](../../contacts/cncontact.md) property keys to display in the contact detail card.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * displayedPropertyKeys;
```

<a id="discussion"></a>

## Discussion

All the properties of the contact are displayed if this property is not set.
