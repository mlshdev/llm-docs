> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem(_:changeselectionfromcandidateat:to:)](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem(_:changeselectionfromcandidateat:to:))

# candidateListTouchBarItem(\_:changeSelectionFromCandidateAt:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that user has moved from touching one candidate in the candidate list item to another.

## Declaration

```swift
@MainActor optional func candidateListTouchBarItem(_ anItem: NSCandidateListTouchBarItem<AnyObject>, changeSelectionFromCandidateAt previousIndex: Int, to index: Int)
```

## Parameters

- `anItem`: The candidate list item that the user is interacting with.
- `previousIndex`: The index of the candidate that the user was previously touching.
- `index`: The index of the candidate that the user is currently touching.

## See Also

### Handling selection changes

- [candidateListTouchBarItem(\_:beginSelectingCandidateAt:)](candidatelisttouchbaritem%28__beginselectingcandidateat_%29.md): Tells the delegate that the user has started touching one of the candidates in the candidate list item.
- [candidateListTouchBarItem(\_:endSelectingCandidateAt:)](candidatelisttouchbaritem%28__endselectingcandidateat_%29.md): Tells the delegate that a user has stopped touching candidates in the candidate list item.

# candidateListTouchBarItem:changeSelectionFromCandidateAtIndex:toIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that user has moved from touching one candidate in the candidate list item to another.

## Declaration

```objectivec
- (void) candidateListTouchBarItem:(NSCandidateListTouchBarItem *) anItem changeSelectionFromCandidateAtIndex:(NSInteger) previousIndex toIndex:(NSInteger) index;
```

## Parameters

- `anItem`: The candidate list item that the user is interacting with.
- `previousIndex`: The index of the candidate that the user was previously touching.
- `index`: The index of the candidate that the user is currently touching.

## See Also

### Handling selection changes

- [candidateListTouchBarItem:beginSelectingCandidateAtIndex:](candidatelisttouchbaritem%28__beginselectingcandidateat_%29.md): Tells the delegate that the user has started touching one of the candidates in the candidate list item.
- [candidateListTouchBarItem:endSelectingCandidateAtIndex:](candidatelisttouchbaritem%28__endselectingcandidateat_%29.md): Tells the delegate that a user has stopped touching candidates in the candidate list item.
