> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersonview/person](https://developer.apple.com/documentation/addressbook/abpersonview/person)

# person (Swift)

**Framework:** Address Book  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The contact record being displayed.

## Declaration

```swift
var person: ABPerson! { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, the view displays a special empty-selection UI.

An exception is raised if the value of this property comes from a shared instance of the address book database. To prevent this, use the [addressBook](../abaddressbook-swift.class/addressbook.md) method of [ABAddressBook](../abaddressbook-swift.class.md) rather than the [shared()](../abaddressbook-swift.class/shared%28%29.md) method.

## See Also

### Working with Person Views

- [editing](editing.md): A Boolean value that indicates whether the person view is in editing mode.
- [shouldShowLinkedPeople](shouldshowlinkedpeople.md): Indicates whether the person view should display data from person records that are linked with the person record being displayed.

# person (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The contact record being displayed.

## Declaration

```objectivec
@property (retain, readwrite) ABPerson * person;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, the view displays a special empty-selection UI.

An exception is raised if the value of this property comes from a shared instance of the address book database. To prevent this, use the [addressBook](../abaddressbook-swift.class/addressbook.md) method of [ABAddressBook](../abaddressbook-swift.class.md) rather than the [sharedAddressBook](../abaddressbook-swift.class/shared%28%29.md) method.

## See Also

### Working with Person Views

- [editing](editing.md): A Boolean value that indicates whether the person view is in editing mode.
- [shouldShowLinkedPeople](shouldshowlinkedpeople.md): Indicates whether the person view should display data from person records that are linked with the person record being displayed.
