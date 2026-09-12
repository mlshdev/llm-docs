> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickergroupselectiondidchangenotification](https://developer.apple.com/documentation/addressbook/abpeoplepickergroupselectiondidchangenotification)

# ABPeoplePickerGroupSelectionDidChangeNotification

**Interface language:** Objective-C

**Framework:** Address Book  
**Kind:** Global Variable  
**Availability:** macOS 10.3+

Posted when the selection in the group list is changed.

## Declaration

```objectivec
extern NSString * const ABPeoplePickerGroupSelectionDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The system posts this notification on the main actor.

## See Also

### Notifications

- [ABPeoplePickerNameSelectionDidChangeNotification](abpeoplepickernameselectiondidchangenotification.md): Posted when the selection in the name list is changed.
- [ABPeoplePickerValueSelectionDidChangeNotification](abpeoplepickervalueselectiondidchangenotification.md): Posted when the selection in a multivalue property is changed.
- [ABPeoplePickerDisplayedPropertyDidChangeNotification](abpeoplepickerdisplayedpropertydidchangenotification.md): Posted when the displayed property in the record list is changed.
