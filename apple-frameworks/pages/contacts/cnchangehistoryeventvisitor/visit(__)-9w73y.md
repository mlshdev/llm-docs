> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryeventvisitor/visit(_:)-9w73y](https://developer.apple.com/documentation/contacts/cnchangehistoryeventvisitor/visit(_:)-9w73y)

# visit(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the user added a contact.

## Declaration

```swift
func visit(_ event: CNChangeHistoryAddContactEvent)
```

## Parameters

- `event`: The event object that represents a user adding a contact.

<a id="Discussion"></a>

## Discussion

Inspect the contact in the event that the system provides and update your app’s cached data accordingly.

## See Also

### Updating contacts

- [visit(\_:)](visit%28__%29-1pf2a.md): Tells the delegate that the user updated a contact.
- [visit(\_:)](visit%28__%29-ci4z.md): Tells the delegate that the user deleted a contact.

# visitAddContactEvent: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the user added a contact.

## Declaration

```objectivec
- (void) visitAddContactEvent:(CNChangeHistoryAddContactEvent *) event;
```

## Parameters

- `event`: The event object that represents a user adding a contact.

<a id="Discussion"></a>

## Discussion

Inspect the contact in the event that the system provides and update your app’s cached data accordingly.

## See Also

### Updating contacts

- [visitUpdateContactEvent:](visit%28__%29-1pf2a.md): Tells the delegate that the user updated a contact.
- [visitDeleteContactEvent:](visit%28__%29-ci4z.md): Tells the delegate that the user deleted a contact.
