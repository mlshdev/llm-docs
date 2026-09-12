> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritemdelegate](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritemdelegate)

# NSCandidateListTouchBarItemDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a candidate list item delegate uses to enable selection state and list visibility.

## Declaration

```swift
protocol NSCandidateListTouchBarItemDelegate : NSObjectProtocol
```

## Topics

### Handling selection changes

- [candidateListTouchBarItem(\_:beginSelectingCandidateAt:)](nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem%28__beginselectingcandidateat_%29.md): Tells the delegate that the user has started touching one of the candidates in the candidate list item.
- [candidateListTouchBarItem(\_:changeSelectionFromCandidateAt:to:)](nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem%28__changeselectionfromcandidateat_to_%29.md): Tells the delegate that user has moved from touching one candidate in the candidate list item to another.
- [candidateListTouchBarItem(\_:endSelectingCandidateAt:)](nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem%28__endselectingcandidateat_%29.md): Tells the delegate that a user has stopped touching candidates in the candidate list item.

### Handling visibility changes

- [candidateListTouchBarItem(\_:changedCandidateListVisibility:)](nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem%28__changedcandidatelistvisibility_%29.md): Tells the delegate that the visibility of the candidate list has changed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextView](nstextview.md)

## See Also

### Providing a client and a delegate

- [client](nscandidatelisttouchbaritem/client.md): The client object for the candidate list item.
- [delegate](nscandidatelisttouchbaritem/delegate.md): The delegate of the candidate list item.

# NSCandidateListTouchBarItemDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a candidate list item delegate uses to enable selection state and list visibility.

## Declaration

```objectivec
@protocol NSCandidateListTouchBarItemDelegate <NSObject>
```

## Topics

### Handling selection changes

- [candidateListTouchBarItem:beginSelectingCandidateAtIndex:](nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem%28__beginselectingcandidateat_%29.md): Tells the delegate that the user has started touching one of the candidates in the candidate list item.
- [candidateListTouchBarItem:changeSelectionFromCandidateAtIndex:toIndex:](nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem%28__changeselectionfromcandidateat_to_%29.md): Tells the delegate that user has moved from touching one candidate in the candidate list item to another.
- [candidateListTouchBarItem:endSelectingCandidateAtIndex:](nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem%28__endselectingcandidateat_%29.md): Tells the delegate that a user has stopped touching candidates in the candidate list item.

### Handling visibility changes

- [candidateListTouchBarItem:changedCandidateListVisibility:](nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem%28__changedcandidatelistvisibility_%29.md): Tells the delegate that the visibility of the candidate list has changed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextView](nstextview.md)

## See Also

### Providing a client and a delegate

- [client](nscandidatelisttouchbaritem/client.md): The client object for the candidate list item.
- [delegate](nscandidatelisttouchbaritem/delegate.md): The delegate of the candidate list item.
