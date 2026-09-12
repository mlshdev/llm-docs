> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/endpage()](https://developer.apple.com/documentation/appkit/nsview/endpage())

# endPage() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the end of a conforming page.

## Declaration

```swift
func endPage()
```

<a id="Discussion"></a>

## Discussion

This method is invoked after each page is printed. It invokes [unlockFocus()](unlockfocus%28%29.md). This method also generates comments for the bounding box and page fonts, if they were specified as being at the end of the page.

## See Also

### Writing Conforming Rendering Instructions

- [beginDocument()](begindocument%28%29.md): Invoked at the beginning of the printing session, this method sets up the current graphics context.
- [endDocument()](enddocument%28%29.md): This method is invoked at the end of the printing session.

# endPage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the end of a conforming page.

## Declaration

```objectivec
- (void) endPage;
```

<a id="Discussion"></a>

## Discussion

This method is invoked after each page is printed. It invokes [unlockFocus](unlockfocus%28%29.md). This method also generates comments for the bounding box and page fonts, if they were specified as being at the end of the page.

## See Also

### Writing Conforming Rendering Instructions

- [beginDocument](begindocument%28%29.md): Invoked at the beginning of the printing session, this method sets up the current graphics context.
- [endDocument](enddocument%28%29.md): This method is invoked at the end of the printing session.
