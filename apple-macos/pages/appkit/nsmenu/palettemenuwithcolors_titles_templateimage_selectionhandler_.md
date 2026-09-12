> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/palettemenuwithcolors:titles:templateimage:selectionhandler:](https://developer.apple.com/documentation/appkit/nsmenu/palettemenuwithcolors:titles:templateimage:selectionhandler:)

# paletteMenuWithColors:titles:templateImage:selectionHandler:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Creates a palette style menu displaying user-selectable color tags that tint using the specified array of colors.

## Declaration

```objectivec
+ (instancetype) paletteMenuWithColors:(NSArray<NSColor *> *) colors titles:(NSArray<NSString *> *) itemTitles templateImage:(NSImage *) image selectionHandler:(void (^)(NSMenu *)) onSelectionChange;
```

## Parameters

- `colors`: The display colors for the menu items.
- `itemTitles`: The menu item titles.
- `image`: The image the system displays for the menu items.
- `onSelectionChange`: The closure to invoke when someone selects the menu item.

<a id="return-value"></a>

## Return Value

A menu in the palette presentation style.

## See Also

### Working with Palettes

- [paletteMenuWithColors:titles:selectionHandler:](palettemenuwithcolors_titles_selectionhandler_.md): Creates a palette style menu displaying user-selectable color tags.
