> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritem/attributedstringforcandidate](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritem/attributedstringforcandidate)

# attributedStringForCandidate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A block that converts a candidate object into an attributed string for display in the candidate list item.

## Declaration

```swift
var attributedStringForCandidate: ((CandidateType, Int) -> NSAttributedString)? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is not required if the object type of your candidates is [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring), or [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult). The default value of this property is `nil`.

If the attributed string you return does not specify [font](https://developer.apple.com/documentation/foundation/nsattributedstring/key/font) or [foregroundColor](https://developer.apple.com/documentation/foundation/nsattributedstring/key/foregroundcolor) then the candidate is displayed with the standard appearance font and color.

## See Also

### Populating the candidate list

- [setCandidates(\_:forSelectedRange:in:)](setcandidates%28__forselectedrange_in_%29.md): Sets an array of candidate objects to be displayed in the candidate list bar item.
- [candidates](candidates.md): The array of candidate objects previously set by [setCandidates(\_:forSelectedRange:in:)](setcandidates%28__forselectedrange_in_%29.md).
- [allowsTextInputContextCandidates](allowstextinputcontextcandidates.md): A Boolean value that specifies whether a candidate list item displays candidates from text input providers.

# attributedStringForCandidate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A block that converts a candidate object into an attributed string for display in the candidate list item.

## Declaration

```objectivec
@property (copy, nullable) NSAttributedString *(^)(id, long) attributedStringForCandidate;
```

<a id="Discussion"></a>

## Discussion

This property is not required if the object type of your candidates is [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring), or [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult). The default value of this property is `nil`.

If the attributed string you return does not specify [font](https://developer.apple.com/documentation/foundation/nsattributedstring/key/font) or [foregroundColor](https://developer.apple.com/documentation/foundation/nsattributedstring/key/foregroundcolor) then the candidate is displayed with the standard appearance font and color.

## See Also

### Populating the candidate list

- [setCandidates:forSelectedRange:inString:](setcandidates%28__forselectedrange_in_%29.md): Sets an array of candidate objects to be displayed in the candidate list bar item.
- [candidates](candidates.md): The array of candidate objects previously set by [setCandidates:forSelectedRange:inString:](setcandidates%28__forselectedrange_in_%29.md).
- [allowsTextInputContextCandidates](allowstextinputcontextcandidates.md): A Boolean value that specifies whether a candidate list item displays candidates from text input providers.
