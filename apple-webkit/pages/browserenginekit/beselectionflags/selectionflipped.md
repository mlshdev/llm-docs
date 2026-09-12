> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beselectionflags/selectionflipped](https://developer.apple.com/documentation/browserenginekit/beselectionflags/selectionflipped)

# selectionFlipped (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

A flag that indicates whether a text selection is reversed or flipped in direction from its original direction.

## Declaration

```swift
static var selectionFlipped: BESelectionFlags { get }
```

## See Also

### Describing a text selection

- [phraseBoundaryChanged](phraseboundarychanged.md): A flag that indicates whether a text selection crosses or modifies phrase boundaries in an active selection.
- [wordIsNearTap](wordisneartap.md): A flag that indicates whether a word resides near the person’s tap gesture.

# BESelectionFlipped (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

A flag that indicates whether a text selection is reversed or flipped in direction from its original direction.

## Declaration

```objectivec
BESelectionFlipped
```

## See Also

### Describing a text selection

- [BESelectionFlagsNone](beselectionflagsnone.md): An option that indicates no active flags.
- [BEPhraseBoundaryChanged](phraseboundarychanged.md): A flag that indicates whether a text selection crosses or modifies phrase boundaries in an active selection.
- [BEWordIsNearTap](wordisneartap.md): A flag that indicates whether a word resides near the person’s tap gesture.
