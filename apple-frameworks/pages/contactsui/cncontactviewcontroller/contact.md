> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontroller/contact](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/contact)

# contact (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The contact being displayed.

## Declaration

```swift
var contact: CNContact { get }
```

```swift
@NSCopying var contact: CNContact? { get set }
```

## See Also

### Displaying Contact Properties

- [alternateName](alternatename.md): The name to use if the contact has no display name.
- [message](message.md): The message displayed under the name of the contact.
- [displayedPropertyKeys](displayedpropertykeys.md): The contact property keys to display.

# contact (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The contact being displayed.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CNContact * contact;
```

```objectivec
@property (copy, readwrite, nullable) CNContact * contact;
```

## See Also

### Displaying Contact Properties

- [alternateName](alternatename.md): The name to use if the contact has no display name.
- [message](message.md): The message displayed under the name of the contact.
- [displayedPropertyKeys](displayedpropertykeys.md): The contact property keys to display.
