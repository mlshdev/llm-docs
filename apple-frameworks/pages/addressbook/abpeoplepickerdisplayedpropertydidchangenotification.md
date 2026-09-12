> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickerdisplayedpropertydidchangenotification](https://developer.apple.com/documentation/addressbook/abpeoplepickerdisplayedpropertydidchangenotification)

# ABPeoplePickerDisplayedPropertyDidChangeNotification

**Interface language:** Objective-C

**Framework:** Address Book  
**Kind:** Global Variable  
**Availability:** macOS 10.3+

Posted when the displayed property in the record list is changed.

## Declaration

```objectivec
extern NSString * const ABPeoplePickerDisplayedPropertyDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The system posts this notification on the main actor.

## See Also

### Notifications

- [ABPeoplePickerGroupSelectionDidChangeNotification](abpeoplepickergroupselectiondidchangenotification.md): Posted when the selection in the group list is changed.
- [ABPeoplePickerNameSelectionDidChangeNotification](abpeoplepickernameselectiondidchangenotification.md): Posted when the selection in the name list is changed.
- [ABPeoplePickerValueSelectionDidChangeNotification](abpeoplepickervalueselectiondidchangenotification.md): Posted when the selection in a multivalue property is changed.
