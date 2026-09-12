> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourcetextbuffer/selections](https://developer.apple.com/documentation/xcodekit/xcsourcetextbuffer/selections)

# selections (Swift)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The text selections in the buffer.

## Declaration

```swift
var selections: NSMutableArray { get }
```

<a id="Discussion"></a>

## Discussion

An empty range represents an insertion point. Modifying the lines of text in the buffer automatically updates the selections to match.

## See Also

### Editing Source Text

- [lines](lines.md): The lines of text in the buffer, including line endings.

# selections (Objective-C)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The text selections in the buffer.

## Declaration

```objectivec
@property (strong, readonly) NSMutableArray<XCSourceTextRange *> * selections;
```

<a id="Discussion"></a>

## Discussion

An empty range represents an insertion point. Modifying the lines of text in the buffer automatically updates the selections to match.

## See Also

### Editing Source Text

- [lines](lines.md): The lines of text in the buffer, including line endings.
