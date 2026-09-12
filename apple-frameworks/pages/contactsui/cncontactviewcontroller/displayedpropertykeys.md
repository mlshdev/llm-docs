> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontroller/displayedpropertykeys](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/displayedpropertykeys)

# displayedPropertyKeys (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The contact property keys to display.

## Declaration

```swift
var displayedPropertyKeys: [Any]? { get set }
```

<a id="discussion"></a>

## Discussion

If this property is not set, the view controller displays all properties.

## See Also

### Displaying Contact Properties

- [contact](contact.md): The contact being displayed.
- [alternateName](alternatename.md): The name to use if the contact has no display name.
- [message](message.md): The message displayed under the name of the contact.

# displayedPropertyKeys (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The contact property keys to display.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray * displayedPropertyKeys;
```

<a id="discussion"></a>

## Discussion

If this property is not set, the view controller displays all properties.

## See Also

### Displaying Contact Properties

- [contact](contact.md): The contact being displayed.
- [alternateName](alternatename.md): The name to use if the contact has no display name.
- [message](message.md): The message displayed under the name of the contact.
