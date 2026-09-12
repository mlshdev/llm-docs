> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel/attachcolorlist(_:)](https://developer.apple.com/documentation/appkit/nscolorpanel/attachcolorlist(_:))

# attachColorList(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the list of `NSColor` objects specified to all the color pickers in the receiver that display color lists by invoking [attachColorList(\_:)](attachcolorlist%28__%29.md) on all color pickers in the application.

## Declaration

```swift
func attachColorList(_ colorList: NSColorList)
```

## Parameters

- `colorList`: The list of colors to add to the color pickers in the receiver.

<a id="Discussion"></a>

## Discussion

An application should use this method to add an `NSColorList` saved with a document in its file package or in a directory other than `NSColorList`’s standard search directories.

## See Also

### Managing color lists

- [detachColorList(\_:)](detachcolorlist%28__%29.md): Removes the list of colors from all the color pickers in the receiver that display color lists by invoking [detachColorList(\_:)](detachcolorlist%28__%29.md) on all color pickers in the application.

# attachColorList: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the list of `NSColor` objects specified to all the color pickers in the receiver that display color lists by invoking [attachColorList:](attachcolorlist%28__%29.md) on all color pickers in the application.

## Declaration

```objectivec
- (void) attachColorList:(NSColorList *) colorList;
```

## Parameters

- `colorList`: The list of colors to add to the color pickers in the receiver.

<a id="Discussion"></a>

## Discussion

An application should use this method to add an `NSColorList` saved with a document in its file package or in a directory other than `NSColorList`’s standard search directories.

## See Also

### Managing color lists

- [detachColorList:](detachcolorlist%28__%29.md): Removes the list of colors from all the color pickers in the receiver that display color lists by invoking [detachColorList:](detachcolorlist%28__%29.md) on all color pickers in the application.
