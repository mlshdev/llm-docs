> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/autosavename-swift.property](https://developer.apple.com/documentation/appkit/nssplitview/autosavename-swift.property)

# autosaveName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The name to use when the system automatically saves the split view’s divider configuration.

## Declaration

```swift
var autosaveName: NSSplitView.AutosaveName? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property’s value is `nil` or empty, autosaving doesn’t occur.

## See Also

### Saving Subview Positions

- [NSSplitView.AutosaveName](autosavename-swift.typealias.md): The type that specifies the split view’s autosave name.

# autosaveName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The name to use when the system automatically saves the split view’s divider configuration.

## Declaration

```objectivec
@property (copy, nullable) NSSplitViewAutosaveName autosaveName;
```

<a id="Discussion"></a>

## Discussion

If this property’s value is `nil` or empty, autosaving doesn’t occur.

## See Also

### Saving Subview Positions

- [NSSplitViewAutosaveName](autosavename-swift.typealias.md): The type that specifies the split view’s autosave name.
