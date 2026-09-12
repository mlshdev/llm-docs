> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourcetextbuffer/lines](https://developer.apple.com/documentation/xcodekit/xcsourcetextbuffer/lines)

# lines (Swift)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The lines of text in the buffer, including line endings.

## Declaration

```swift
var lines: NSMutableArray { get }
```

<a id="Discussion"></a>

## Discussion

Line breaks within a single buffer should be consistent. Adding a line containing additional line breaks modifies the array such that each line added is a separate element. Changes to the `completeBuffer` property are immediately reflected in this property, and vice versa.

## See Also

### Editing Source Text

- [selections](selections.md): The text selections in the buffer.

# lines (Objective-C)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The lines of text in the buffer, including line endings.

## Declaration

```objectivec
@property (strong, readonly) NSMutableArray<NSString *> * lines;
```

<a id="Discussion"></a>

## Discussion

Line breaks within a single buffer should be consistent. Adding a line containing additional line breaks modifies the array such that each line added is a separate element. Changes to the `completeBuffer` property are immediately reflected in this property, and vice versa.

## See Also

### Editing Source Text

- [selections](selections.md): The text selections in the buffer.
