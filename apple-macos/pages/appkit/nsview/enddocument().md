> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/enddocument()](https://developer.apple.com/documentation/appkit/nsview/enddocument())

# endDocument() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This method is invoked at the end of the printing session.

## Declaration

```swift
func endDocument()
```

<a id="Discussion"></a>

## Discussion

If you override this method, call the superclass implementation.

## See Also

### Writing Conforming Rendering Instructions

- [beginDocument()](begindocument%28%29.md): Invoked at the beginning of the printing session, this method sets up the current graphics context.
- [endPage()](endpage%28%29.md): Writes the end of a conforming page.

# endDocument (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This method is invoked at the end of the printing session.

## Declaration

```objectivec
- (void) endDocument;
```

<a id="Discussion"></a>

## Discussion

If you override this method, call the superclass implementation.

## See Also

### Writing Conforming Rendering Instructions

- [beginDocument](begindocument%28%29.md): Invoked at the beginning of the printing session, this method sets up the current graphics context.
- [endPage](endpage%28%29.md): Writes the end of a conforming page.
