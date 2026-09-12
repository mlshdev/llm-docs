> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingdefault/attachcolorlist(_:)](https://developer.apple.com/documentation/appkit/nscolorpickingdefault/attachcolorlist(_:))

# attachColorList(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the receiver to attach the given color list, if it isn’t already displaying the list.

## Declaration

```swift
@MainActor func attachColorList(_ colorList: NSColorList)
```

## Parameters

- `colorList`: The color list to display.

<a id="Discussion"></a>

## Discussion

You never invoke this method; it’s invoked automatically by the `NSColorPanel` object when its [attachColorList(\_:)](../nscolorpanel/attachcolorlist%28__%29.md) method is invoked. Because the `NSColorPanel` list mode manages `NSColorList` objects, this method need only be implemented by a custom color picker that manages `NSColorList` objects itself.

## See Also

### Managing Color Lists

- [detachColorList(\_:)](detachcolorlist%28__%29.md): Tells the receiver to detach the given color list, unless the receiver isn’t displaying the list.

# attachColorList: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the receiver to attach the given color list, if it isn’t already displaying the list.

## Declaration

```objectivec
- (void) attachColorList:(NSColorList *) colorList;
```

## Parameters

- `colorList`: The color list to display.

<a id="Discussion"></a>

## Discussion

You never invoke this method; it’s invoked automatically by the `NSColorPanel` object when its [attachColorList:](../nscolorpanel/attachcolorlist%28__%29.md) method is invoked. Because the `NSColorPanel` list mode manages `NSColorList` objects, this method need only be implemented by a custom color picker that manages `NSColorList` objects itself.

## See Also

### Managing Color Lists

- [detachColorList:](detachcolorlist%28__%29.md): Tells the receiver to detach the given color list, unless the receiver isn’t displaying the list.
