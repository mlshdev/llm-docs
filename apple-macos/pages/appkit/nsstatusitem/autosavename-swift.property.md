> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/autosavename-swift.property](https://developer.apple.com/documentation/appkit/nsstatusitem/autosavename-swift.property)

# autosaveName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A unique name for saving and restoring information about a status item.

## Declaration

```swift
var autosaveName: NSStatusItem.AutosaveName! { get set }
```

<a id="Discussion"></a>

## Discussion

If you do not provide an autosave name for a status item, the system automatically chooses a unique name. Setting this property to [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) resets it to the automatically chosen name.

Applications with multiple status items should set an autosave name after creating each item.

## See Also

### Setting the autosave name

- [NSStatusItem.AutosaveName](autosavename-swift.typealias.md)

# autosaveName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A unique name for saving and restoring information about a status item.

## Declaration

```objectivec
@property (copy, null_resettable) NSStatusItemAutosaveName autosaveName;
```

<a id="Discussion"></a>

## Discussion

If you do not provide an autosave name for a status item, the system automatically chooses a unique name. Setting this property to [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) resets it to the automatically chosen name.

Applications with multiple status items should set an autosave name after creating each item.

## See Also

### Setting the autosave name

- [NSStatusItemAutosaveName](autosavename-swift.typealias.md)
