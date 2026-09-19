> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscell/representedobject

# representedObject (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object represented by the cell.

## Declaration

```swift
var representedObject: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to link the cell an appropriate object. For example, in a pop-up list of color names, the represented object of each cell could be the appropriate [NSColor](../nscolor.md) object.

<a id="Special-Considerations"></a>

### Special Considerations

When you copy an `NSCell` object, the value of this property is set to `nil` in the copy.

## See Also

### Related Documentation

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.

# representedObject (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object represented by the cell.

## Declaration

```objectivec
@property (strong, nullable) id representedObject;
```

<a id="Discussion"></a>

## Discussion

Use this property to link the cell an appropriate object. For example, in a pop-up list of color names, the represented object of each cell could be the appropriate [NSColor](../nscolor.md) object.

<a id="Special-Considerations"></a>

### Special Considerations

When you copy an `NSCell` object, the value of this property is set to `nil` in the copy.

## See Also

### Related Documentation

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.
