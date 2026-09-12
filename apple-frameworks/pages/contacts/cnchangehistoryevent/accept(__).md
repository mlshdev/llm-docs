> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryevent/accept(_:)](https://developer.apple.com/documentation/contacts/cnchangehistoryevent/accept(_:))

# accept(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Forwards the event to the delegate you provide to process the change-history event.

## Declaration

```swift
func accept(_ visitor: any CNChangeHistoryEventVisitor)
```

## Parameters

- `visitor`: The delegate with methods you implement to handle this event.

# acceptEventVisitor: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Forwards the event to the delegate you provide to process the change-history event.

## Declaration

```objectivec
- (void) acceptEventVisitor:(id<CNChangeHistoryEventVisitor>) visitor;
```

## Parameters

- `visitor`: The delegate with methods you implement to handle this event.
