> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/hasmarkedtext](https://developer.apple.com/documentation/browserenginekit/betextinput/hasmarkedtext)

# hasMarkedText (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates if marked text exists for an active input session.

## Declaration

```swift
var hasMarkedText: Bool { get }
```

## See Also

### Managing marked text

- [markedTextRange](markedtextrange.md): A range that represents the position of the marked text.
- [unmarkText()](unmarktext%28%29.md): Unmarks the currently marked text.
- [isPointNearMarkedText(\_:)](ispointnearmarkedtext%28__%29.md): Provides a Boolean value that indicates if a point is near marked text.

# hasMarkedText (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates if marked text exists for an active input session.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasMarkedText;
```

## See Also

### Managing marked text

- [markedTextRange](markedtextrange.md): A range that represents the position of the marked text.
- [unmarkText](unmarktext%28%29.md): Unmarks the currently marked text.
- [isPointNearMarkedText:](ispointnearmarkedtext%28__%29.md): Provides a Boolean value that indicates if a point is near marked text.
