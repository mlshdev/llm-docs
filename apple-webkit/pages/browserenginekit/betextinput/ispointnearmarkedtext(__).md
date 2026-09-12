> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/ispointnearmarkedtext(_:)](https://developer.apple.com/documentation/browserenginekit/betextinput/ispointnearmarkedtext(_:))

# isPointNearMarkedText(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Provides a Boolean value that indicates if a point is near marked text.

## Declaration

```swift
func isPointNearMarkedText(_ point: CGPoint) -> Bool
```

<a id="discussion"></a>

## Discussion

The system uses the value you return to determine whether to begin text interaction gestures that occur close to the marked text.

## See Also

### Managing marked text

- [hasMarkedText](hasmarkedtext.md): A Boolean value that indicates if marked text exists for an active input session.
- [markedTextRange](markedtextrange.md): A range that represents the position of the marked text.
- [unmarkText()](unmarktext%28%29.md): Unmarks the currently marked text.

# isPointNearMarkedText: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Provides a Boolean value that indicates if a point is near marked text.

## Declaration

```objectivec
- (BOOL) isPointNearMarkedText:(CGPoint) point;
```

<a id="discussion"></a>

## Discussion

The system uses the value you return to determine whether to begin text interaction gestures that occur close to the marked text.

## See Also

### Managing marked text

- [hasMarkedText](hasmarkedtext.md): A Boolean value that indicates if marked text exists for an active input session.
- [markedTextRange](markedtextrange.md): A range that represents the position of the marked text.
- [unmarkText](unmarktext%28%29.md): Unmarks the currently marked text.
