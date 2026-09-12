> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem(_:beginselectingcandidateat:)](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem(_:beginselectingcandidateat:))

# candidateListTouchBarItem(\_:beginSelectingCandidateAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the user has started touching one of the candidates in the candidate list item.

## Declaration

```swift
@MainActor optional func candidateListTouchBarItem(_ anItem: NSCandidateListTouchBarItem<AnyObject>, beginSelectingCandidateAt index: Int)
```

## Parameters

- `anItem`: The candidate list bar item that the user is interacting with.
- `index`: The index of the candidate that the user is currently touching.

## See Also

### Handling selection changes

- [candidateListTouchBarItem(\_:changeSelectionFromCandidateAt:to:)](candidatelisttouchbaritem%28__changeselectionfromcandidateat_to_%29.md): Tells the delegate that user has moved from touching one candidate in the candidate list item to another.
- [candidateListTouchBarItem(\_:endSelectingCandidateAt:)](candidatelisttouchbaritem%28__endselectingcandidateat_%29.md): Tells the delegate that a user has stopped touching candidates in the candidate list item.

# candidateListTouchBarItem:beginSelectingCandidateAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the user has started touching one of the candidates in the candidate list item.

## Declaration

```objectivec
- (void) candidateListTouchBarItem:(NSCandidateListTouchBarItem *) anItem beginSelectingCandidateAtIndex:(NSInteger) index;
```

## Parameters

- `anItem`: The candidate list bar item that the user is interacting with.
- `index`: The index of the candidate that the user is currently touching.

## See Also

### Handling selection changes

- [candidateListTouchBarItem:changeSelectionFromCandidateAtIndex:toIndex:](candidatelisttouchbaritem%28__changeselectionfromcandidateat_to_%29.md): Tells the delegate that user has moved from touching one candidate in the candidate list item to another.
- [candidateListTouchBarItem:endSelectingCandidateAtIndex:](candidatelisttouchbaritem%28__endselectingcandidateat_%29.md): Tells the delegate that a user has stopped touching candidates in the candidate list item.
