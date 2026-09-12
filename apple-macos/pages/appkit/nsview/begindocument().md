> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/begindocument()](https://developer.apple.com/documentation/appkit/nsview/begindocument())

# beginDocument() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked at the beginning of the printing session, this method sets up the current graphics context.

## Declaration

```swift
func beginDocument()
```

<a id="Discussion"></a>

## Discussion

Note that this method may be invoked in a subthread.

Override it to configure printing related settings. You should store your settings in the object returned by `NSPrintInfo`’s [shared](../nsprintinfo/shared.md) class method, which is guaranteed to return an instance specific to the thread in which you invoke this method. If you override this method, call the superclass implementation.

## See Also

### Writing Conforming Rendering Instructions

- [endDocument()](enddocument%28%29.md): This method is invoked at the end of the printing session.
- [endPage()](endpage%28%29.md): Writes the end of a conforming page.

# beginDocument (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked at the beginning of the printing session, this method sets up the current graphics context.

## Declaration

```objectivec
- (void) beginDocument;
```

<a id="Discussion"></a>

## Discussion

Note that this method may be invoked in a subthread.

Override it to configure printing related settings. You should store your settings in the object returned by `NSPrintInfo`’s [sharedPrintInfo](../nsprintinfo/shared.md) class method, which is guaranteed to return an instance specific to the thread in which you invoke this method. If you override this method, call the superclass implementation.

## See Also

### Writing Conforming Rendering Instructions

- [endDocument](enddocument%28%29.md): This method is invoked at the end of the printing session.
- [endPage](endpage%28%29.md): Writes the end of a conforming page.
