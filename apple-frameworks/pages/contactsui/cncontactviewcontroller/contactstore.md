> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontroller/contactstore](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/contactstore)

# contactStore (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The contact store from which the contact was fetched or to which it will be saved.

## Declaration

```swift
var contactStore: CNContactStore? { get set }
```

<a id="discussion"></a>

## Discussion

If not this property is not set, than adding the contact to the user’s contacts is disabled.

# contactStore (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The contact store from which the contact was fetched or to which it will be saved.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CNContactStore * contactStore;
```

<a id="discussion"></a>

## Discussion

If not this property is not set, than adding the contact to the user’s contacts is disabled.
