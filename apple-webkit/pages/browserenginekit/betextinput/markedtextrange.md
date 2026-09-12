> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/markedtextrange](https://developer.apple.com/documentation/browserenginekit/betextinput/markedtextrange)

# markedTextRange (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A range that represents the position of the marked text.

## Declaration

```swift
var markedTextRange: UITextRange? { get }
```

<a id="discussion"></a>

## Discussion

Return `nil` if no marked text exists.

Marked text represents provisionally inserted text that a person needs to confirm before you commit it to the document. You display marked text with a distinct visual look. The selection needs to reside in market text, if any exists.

When you commit marked text to the document, replace any existing marked text. If no marked text is present, insert the market text into the document at the location of the current selection.

## See Also

### Managing marked text

- [hasMarkedText](hasmarkedtext.md): A Boolean value that indicates if marked text exists for an active input session.
- [unmarkText()](unmarktext%28%29.md): Unmarks the currently marked text.
- [isPointNearMarkedText(\_:)](ispointnearmarkedtext%28__%29.md): Provides a Boolean value that indicates if a point is near marked text.

# markedTextRange (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A range that represents the position of the marked text.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UITextRange * markedTextRange;
```

<a id="discussion"></a>

## Discussion

Return `nil` if no marked text exists.

Marked text represents provisionally inserted text that a person needs to confirm before you commit it to the document. You display marked text with a distinct visual look. The selection needs to reside in market text, if any exists.

When you commit marked text to the document, replace any existing marked text. If no marked text is present, insert the market text into the document at the location of the current selection.

## See Also

### Managing marked text

- [hasMarkedText](hasmarkedtext.md): A Boolean value that indicates if marked text exists for an active input session.
- [unmarkText](unmarktext%28%29.md): Unmarks the currently marked text.
- [isPointNearMarkedText:](ispointnearmarkedtext%28__%29.md): Provides a Boolean value that indicates if a point is near marked text.
