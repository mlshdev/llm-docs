> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel/detachcolorlist(_:)](https://developer.apple.com/documentation/appkit/nscolorpanel/detachcolorlist(_:))

# detachColorList(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the list of colors from all the color pickers in the receiver that display color lists by invoking [detachColorList(\_:)](detachcolorlist%28__%29.md) on all color pickers in the application.

## Declaration

```swift
func detachColorList(_ colorList: NSColorList)
```

## Parameters

- `colorList`: The list of `NSColor` objects to remove from the color pickers in the color panel.

<a id="Discussion"></a>

## Discussion

Your application should use this method to remove an `NSColorList` saved with a document in its file package or in a directory other than `NSColorList`’s standard search directories.

## See Also

### Managing color lists

- [attachColorList(\_:)](attachcolorlist%28__%29.md): Adds the list of `NSColor` objects specified to all the color pickers in the receiver that display color lists by invoking [attachColorList(\_:)](attachcolorlist%28__%29.md) on all color pickers in the application.

# detachColorList: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the list of colors from all the color pickers in the receiver that display color lists by invoking [detachColorList:](detachcolorlist%28__%29.md) on all color pickers in the application.

## Declaration

```objectivec
- (void) detachColorList:(NSColorList *) colorList;
```

## Parameters

- `colorList`: The list of `NSColor` objects to remove from the color pickers in the color panel.

<a id="Discussion"></a>

## Discussion

Your application should use this method to remove an `NSColorList` saved with a document in its file package or in a directory other than `NSColorList`’s standard search directories.

## See Also

### Managing color lists

- [attachColorList:](attachcolorlist%28__%29.md): Adds the list of `NSColor` objects specified to all the color pickers in the receiver that display color lists by invoking [attachColorList:](attachcolorlist%28__%29.md) on all color pickers in the application.
