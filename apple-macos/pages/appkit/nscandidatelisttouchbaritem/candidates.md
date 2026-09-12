> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritem/candidates](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritem/candidates)

# candidates (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The array of candidate objects previously set by [setCandidates(\_:forSelectedRange:in:)](setcandidates%28__forselectedrange_in_%29.md).

## Declaration

```swift
var candidates: [CandidateType] { get }
```

## See Also

### Populating the candidate list

- [setCandidates(\_:forSelectedRange:in:)](setcandidates%28__forselectedrange_in_%29.md): Sets an array of candidate objects to be displayed in the candidate list bar item.
- [attributedStringForCandidate](attributedstringforcandidate.md): A block that converts a candidate object into an attributed string for display in the candidate list item.
- [allowsTextInputContextCandidates](allowstextinputcontextcandidates.md): A Boolean value that specifies whether a candidate list item displays candidates from text input providers.

# candidates (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The array of candidate objects previously set by [setCandidates:forSelectedRange:inString:](setcandidates%28__forselectedrange_in_%29.md).

## Declaration

```objectivec
@property (copy, readonly) NSArray<id> * candidates;
```

## See Also

### Populating the candidate list

- [setCandidates:forSelectedRange:inString:](setcandidates%28__forselectedrange_in_%29.md): Sets an array of candidate objects to be displayed in the candidate list bar item.
- [attributedStringForCandidate](attributedstringforcandidate.md): A block that converts a candidate object into an attributed string for display in the candidate list item.
- [allowsTextInputContextCandidates](allowstextinputcontextcandidates.md): A Boolean value that specifies whether a candidate list item displays candidates from text input providers.
