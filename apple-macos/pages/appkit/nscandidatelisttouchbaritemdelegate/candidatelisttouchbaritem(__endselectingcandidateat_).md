> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem(_:endselectingcandidateat:)](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem(_:endselectingcandidateat:))

# candidateListTouchBarItem(\_:endSelectingCandidateAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that a user has stopped touching candidates in the candidate list item.

## Declaration

```swift
@MainActor optional func candidateListTouchBarItem(_ anItem: NSCandidateListTouchBarItem<AnyObject>, endSelectingCandidateAt index: Int)
```

## Parameters

- `anItem`: The candidate list item that the user is interacting with.
- `index`: The index of the candidate that the user was touching when they lifted their finger.

<a id="Discussion"></a>

## Discussion

If `index` is equal to `NSNotFound` then the user didn’t select a candidate.

## See Also

### Handling selection changes

- [candidateListTouchBarItem(\_:beginSelectingCandidateAt:)](candidatelisttouchbaritem%28__beginselectingcandidateat_%29.md): Tells the delegate that the user has started touching one of the candidates in the candidate list item.
- [candidateListTouchBarItem(\_:changeSelectionFromCandidateAt:to:)](candidatelisttouchbaritem%28__changeselectionfromcandidateat_to_%29.md): Tells the delegate that user has moved from touching one candidate in the candidate list item to another.

# candidateListTouchBarItem:endSelectingCandidateAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that a user has stopped touching candidates in the candidate list item.

## Declaration

```objectivec
- (void) candidateListTouchBarItem:(NSCandidateListTouchBarItem *) anItem endSelectingCandidateAtIndex:(NSInteger) index;
```

## Parameters

- `anItem`: The candidate list item that the user is interacting with.
- `index`: The index of the candidate that the user was touching when they lifted their finger.

<a id="Discussion"></a>

## Discussion

If `index` is equal to `NSNotFound` then the user didn’t select a candidate.

## See Also

### Handling selection changes

- [candidateListTouchBarItem:beginSelectingCandidateAtIndex:](candidatelisttouchbaritem%28__beginselectingcandidateat_%29.md): Tells the delegate that the user has started touching one of the candidates in the candidate list item.
- [candidateListTouchBarItem:changeSelectionFromCandidateAtIndex:toIndex:](candidatelisttouchbaritem%28__changeselectionfromcandidateat_to_%29.md): Tells the delegate that user has moved from touching one candidate in the candidate list item to another.
