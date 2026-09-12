> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingdefault/detachcolorlist(_:)](https://developer.apple.com/documentation/appkit/nscolorpickingdefault/detachcolorlist(_:))

# detachColorList(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the receiver to detach the given color list, unless the receiver isn’t displaying the list.

## Declaration

```swift
@MainActor func detachColorList(_ colorList: NSColorList)
```

## Parameters

- `colorList`: The color list to detach.

<a id="Discussion"></a>

## Discussion

You never invoke this method; it’s invoked automatically by the `NSColorPanel` object when its [detachColorList(\_:)](../nscolorpanel/detachcolorlist%28__%29.md) method is invoked. Because the `NSColorPanel` list mode manages `NSColorList` objects, this method need only be implemented by a custom color picker that manages `NSColorList` objects itself.

## See Also

### Managing Color Lists

- [attachColorList(\_:)](attachcolorlist%28__%29.md): Tells the receiver to attach the given color list, if it isn’t already displaying the list.

# detachColorList: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the receiver to detach the given color list, unless the receiver isn’t displaying the list.

## Declaration

```objectivec
- (void) detachColorList:(NSColorList *) colorList;
```

## Parameters

- `colorList`: The color list to detach.

<a id="Discussion"></a>

## Discussion

You never invoke this method; it’s invoked automatically by the `NSColorPanel` object when its [detachColorList:](../nscolorpanel/detachcolorlist%28__%29.md) method is invoked. Because the `NSColorPanel` list mode manages `NSColorList` objects, this method need only be implemented by a custom color picker that manages `NSColorList` objects itself.

## See Also

### Managing Color Lists

- [attachColorList:](attachcolorlist%28__%29.md): Tells the receiver to attach the given color list, if it isn’t already displaying the list.
