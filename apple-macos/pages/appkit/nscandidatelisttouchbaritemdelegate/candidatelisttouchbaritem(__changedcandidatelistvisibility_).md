> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem(_:changedcandidatelistvisibility:)](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritemdelegate/candidatelisttouchbaritem(_:changedcandidatelistvisibility:))

# candidateListTouchBarItem(\_:changedCandidateListVisibility:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the visibility of the candidate list has changed.

## Declaration

```swift
@MainActor optional func candidateListTouchBarItem(_ anItem: NSCandidateListTouchBarItem<AnyObject>, changedCandidateListVisibility isVisible: Bool)
```

## Parameters

- `anItem`: The candidate list item whose candidate list’s visibility has changed.
- `isVisible`: A Boolean value that specifies whether or not the candidate list is visible. If [true](https://developer.apple.com/documentation/swift/true) then the candidate list is visible, [false](https://developer.apple.com/documentation/swift/false) otherwise.

# candidateListTouchBarItem:changedCandidateListVisibility: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the visibility of the candidate list has changed.

## Declaration

```objectivec
- (void) candidateListTouchBarItem:(NSCandidateListTouchBarItem *) anItem changedCandidateListVisibility:(BOOL) isVisible;
```

## Parameters

- `anItem`: The candidate list item whose candidate list’s visibility has changed.
- `isVisible`: A Boolean value that specifies whether or not the candidate list is visible. If [true](https://developer.apple.com/documentation/swift/true) then the candidate list is visible, [false](https://developer.apple.com/documentation/swift/false) otherwise.
