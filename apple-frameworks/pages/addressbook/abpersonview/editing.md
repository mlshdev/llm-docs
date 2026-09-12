> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersonview/editing](https://developer.apple.com/documentation/addressbook/abpersonview/editing)

# editing (Swift)

**Framework:** Address Book  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the person view is in editing mode.

## Declaration

```swift
var editing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

In editing mode, the person view displays additional controls to let the user change the contact’s information.

## See Also

### Working with Person Views

- [person](person.md): The contact record being displayed.
- [shouldShowLinkedPeople](shouldshowlinkedpeople.md): Indicates whether the person view should display data from person records that are linked with the person record being displayed.

# editing (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the person view is in editing mode.

## Declaration

```objectivec
@property (assign) BOOL editing;
```

<a id="Discussion"></a>

## Discussion

In editing mode, the person view displays additional controls to let the user change the contact’s information.

## See Also

### Working with Person Views

- [person](person.md): The contact record being displayed.
- [shouldShowLinkedPeople](shouldshowlinkedpeople.md): Indicates whether the person view should display data from person records that are linked with the person record being displayed.
