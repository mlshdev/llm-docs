> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryeventvisitor/visit(_:)-ve62](https://developer.apple.com/documentation/contacts/cnchangehistoryeventvisitor/visit(_:)-ve62)

# visit(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the user added a group.

## Declaration

```swift
optional func visit(_ event: CNChangeHistoryAddGroupEvent)
```

## Parameters

- `event`: The event object that represents a user adding a group.

<a id="Discussion"></a>

## Discussion

Inspect the group in the event that the system provides and update your app’s cached data accordingly.

## See Also

### Updating groups

- [visit(\_:)](visit%28__%29-23p9h.md): Tells the delegate that the user updated a group.
- [visit(\_:)](visit%28__%29-82duo.md): Tells the delegate that the user deleted a group.

# visitAddGroupEvent: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the user added a group.

## Declaration

```objectivec
- (void) visitAddGroupEvent:(CNChangeHistoryAddGroupEvent *) event;
```

## Parameters

- `event`: The event object that represents a user adding a group.

<a id="Discussion"></a>

## Discussion

Inspect the group in the event that the system provides and update your app’s cached data accordingly.

## See Also

### Updating groups

- [visitUpdateGroupEvent:](visit%28__%29-23p9h.md): Tells the delegate that the user updated a group.
- [visitDeleteGroupEvent:](visit%28__%29-82duo.md): Tells the delegate that the user deleted a group.
