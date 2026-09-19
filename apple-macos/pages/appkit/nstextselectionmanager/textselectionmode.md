> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextselectionmanager/textselectionmode

# textSelectionMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The interaction mode for text selection.

## Declaration

```swift
var textSelectionMode: NSTextSelectionManager.Mode { get set }
```

<a id="discussion"></a>

## Discussion

Determines whether text is editable, selectable only, or non-interactive. The default value is `NSTextSelectionModeEditable`.

## See Also

### Configuring text selection

- [NSTextSelectionManager.Mode](mode.md): Values for text selection interaction modes.
- [textSelectionDataSource](textselectiondatasource.md): The data source that provides text layout information to the selection manager.

# textSelectionMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The interaction mode for text selection.

## Declaration

```objectivec
@property NSTextSelectionMode textSelectionMode;
```

<a id="discussion"></a>

## Discussion

Determines whether text is editable, selectable only, or non-interactive. The default value is `NSTextSelectionModeEditable`.

## See Also

### Configuring text selection

- [NSTextSelectionMode](mode.md): Values for text selection interaction modes.
- [textSelectionDataSource](textselectiondatasource.md): The data source that provides text layout information to the selection manager.
