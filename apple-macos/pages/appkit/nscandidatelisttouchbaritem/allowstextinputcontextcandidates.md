> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritem/allowstextinputcontextcandidates](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritem/allowstextinputcontextcandidates)

# allowsTextInputContextCandidates (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that specifies whether a candidate list item displays candidates from text input providers.

## Declaration

```swift
var allowsTextInputContextCandidates: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the candidate list item shows candidates from the text input client provided in the [client](client.md) property, before those in the [candidates](candidates.md) property.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Populating the candidate list

- [setCandidates(\_:forSelectedRange:in:)](setcandidates%28__forselectedrange_in_%29.md): Sets an array of candidate objects to be displayed in the candidate list bar item.
- [candidates](candidates.md): The array of candidate objects previously set by [setCandidates(\_:forSelectedRange:in:)](setcandidates%28__forselectedrange_in_%29.md).
- [attributedStringForCandidate](attributedstringforcandidate.md): A block that converts a candidate object into an attributed string for display in the candidate list item.

# allowsTextInputContextCandidates (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that specifies whether a candidate list item displays candidates from text input providers.

## Declaration

```objectivec
@property BOOL allowsTextInputContextCandidates;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the candidate list item shows candidates from the text input client provided in the [client](client.md) property, before those in the [candidates](candidates.md) property.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Populating the candidate list

- [setCandidates:forSelectedRange:inString:](setcandidates%28__forselectedrange_in_%29.md): Sets an array of candidate objects to be displayed in the candidate list bar item.
- [candidates](candidates.md): The array of candidate objects previously set by [setCandidates:forSelectedRange:inString:](setcandidates%28__forselectedrange_in_%29.md).
- [attributedStringForCandidate](attributedstringforcandidate.md): A block that converts a candidate object into an attributed string for display in the candidate list item.
