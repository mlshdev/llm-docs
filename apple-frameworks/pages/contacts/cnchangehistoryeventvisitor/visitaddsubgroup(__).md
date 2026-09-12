> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryeventvisitor/visitaddsubgroup(_:)](https://developer.apple.com/documentation/contacts/cnchangehistoryeventvisitor/visitaddsubgroup(_:))

# visitAddSubgroup(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the user added a subgroup to a group.

## Declaration

```swift
optional func visitAddSubgroup(_ event: CNChangeHistoryAddSubgroupToGroupEvent)
```

## Parameters

- `event`: The event object that represents a user adding a subgroup to a group.

<a id="Discussion"></a>

## Discussion

Inspect the group and subgroup in the event that the system provides and update your app’s cached data accordingly.

## See Also

### Updating subgroups

- [visitRemoveSubgroup(\_:)](visitremovesubgroup%28__%29.md): Tells the delegate that the user removed a subgroup from a group.

# visitAddSubgroupToGroupEvent: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the user added a subgroup to a group.

## Declaration

```objectivec
- (void) visitAddSubgroupToGroupEvent:(CNChangeHistoryAddSubgroupToGroupEvent *) event;
```

## Parameters

- `event`: The event object that represents a user adding a subgroup to a group.

<a id="Discussion"></a>

## Discussion

Inspect the group and subgroup in the event that the system provides and update your app’s cached data accordingly.

## See Also

### Updating subgroups

- [visitRemoveSubgroupFromGroupEvent:](visitremovesubgroup%28__%29.md): Tells the delegate that the user removed a subgroup from a group.
