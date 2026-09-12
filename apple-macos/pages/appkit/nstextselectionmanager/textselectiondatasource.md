> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionmanager/textselectiondatasource](https://developer.apple.com/documentation/appkit/nstextselectionmanager/textselectiondatasource)

# textSelectionDataSource (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The data source that provides text layout information to the selection manager.

## Declaration

```swift
weak var textSelectionDataSource: (any NSTextSelectionDataSource)? { get set }
```

<a id="discussion"></a>

## Discussion

The data source is typically an `NSTextLayoutManager` or similar text layout object.

## See Also

### Configuring text selection

- [textSelectionMode](textselectionmode.md): The interaction mode for text selection.
- [NSTextSelectionManager.Mode](mode.md): Values for text selection interaction modes.

# textSelectionDataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The data source that provides text layout information to the selection manager.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextSelectionDataSource> textSelectionDataSource;
```

<a id="discussion"></a>

## Discussion

The data source is typically an `NSTextLayoutManager` or similar text layout object.

## See Also

### Configuring text selection

- [textSelectionMode](textselectionmode.md): The interaction mode for text selection.
- [NSTextSelectionMode](mode.md): Values for text selection interaction modes.
