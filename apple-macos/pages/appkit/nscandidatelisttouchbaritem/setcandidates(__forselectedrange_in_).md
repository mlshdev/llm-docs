> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritem/setcandidates(_:forselectedrange:in:)](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritem/setcandidates(_:forselectedrange:in:))

# setCandidates(\_:forSelectedRange:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Sets an array of candidate objects to be displayed in the candidate list bar item.

## Declaration

```swift
func setCandidates(_ candidates: [CandidateType], forSelectedRange selectedRange: NSRange, in originalString: String?)
```

## Parameters

- `candidates`: The array of candidates you wish to display in the candidate list item.
- `selectedRange`: A range ([NSRange](https://developer.apple.com/documentation/foundation/nsrange-c.struct)) within the string that the candidates represent.
- `originalString`: The original string from which the candidate list was derived.

<a id="Discussion"></a>

## Discussion

The item uses the block in the [attributedStringForCandidate](attributedstringforcandidate.md) property to convert each candidate in the array into an attributed string. If the value of the [attributedStringForCandidate](attributedstringforcandidate.md) property is `nil` then [NSCandidateListTouchBarItem](../nscandidatelisttouchbaritem.md) can format candidates of type [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring), and [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult).

## See Also

### Populating the candidate list

- [candidates](candidates.md): The array of candidate objects previously set by [setCandidates(\_:forSelectedRange:in:)](setcandidates%28__forselectedrange_in_%29.md).
- [attributedStringForCandidate](attributedstringforcandidate.md): A block that converts a candidate object into an attributed string for display in the candidate list item.
- [allowsTextInputContextCandidates](allowstextinputcontextcandidates.md): A Boolean value that specifies whether a candidate list item displays candidates from text input providers.

# setCandidates:forSelectedRange:inString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Sets an array of candidate objects to be displayed in the candidate list bar item.

## Declaration

```objectivec
- (void) setCandidates:(NSArray<id> *) candidates forSelectedRange:(NSRange) selectedRange inString:(NSString *) originalString;
```

## Parameters

- `candidates`: The array of candidates you wish to display in the candidate list item.
- `selectedRange`: A range ([NSRange](https://developer.apple.com/documentation/foundation/nsrange-c.struct)) within the string that the candidates represent.
- `originalString`: The original string from which the candidate list was derived.

<a id="Discussion"></a>

## Discussion

The item uses the block in the [attributedStringForCandidate](attributedstringforcandidate.md) property to convert each candidate in the array into an attributed string. If the value of the [attributedStringForCandidate](attributedstringforcandidate.md) property is `nil` then [NSCandidateListTouchBarItem](../nscandidatelisttouchbaritem.md) can format candidates of type [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring), and [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult).

## See Also

### Populating the candidate list

- [candidates](candidates.md): The array of candidate objects previously set by [setCandidates:forSelectedRange:inString:](setcandidates%28__forselectedrange_in_%29.md).
- [attributedStringForCandidate](attributedstringforcandidate.md): A block that converts a candidate object into an attributed string for display in the candidate list item.
- [allowsTextInputContextCandidates](allowstextinputcontextcandidates.md): A Boolean value that specifies whether a candidate list item displays candidates from text input providers.
