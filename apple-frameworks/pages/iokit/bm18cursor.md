> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/bm18cursor](https://developer.apple.com/documentation/iokit/bm18cursor)

# bm18Cursor

**Interface language:** Objective-C

**Framework:** IOKit  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

Cursor image for 8-bit cursor.

## Declaration

```objectivec
struct bm18Cursor {
    ...
};
```

<a id="discussion"></a>

## Discussion

This structure stores 16 pixel x 16 pixel cursors to be used with 8-bit color depth. This structure is only defined if IOFB_ARBITRARY_SIZE_CURSOR is not defined.

## Topics

### Fields

- [image](bm18cursor/1589135-image.md): This array contains cursor color values, which are converted to displayed colors through the color table. The array is two dimensional and its first index is the cursor frame and the second index is the cursor pixel.
- [mask](bm18cursor/1589194-mask.md): This array contains the cursor alpha mask. The array is two dimensional with the same indexing as the image. If an alpha mask pixel is 0 and the corresponding image pixel is set to white for the display, then this cursor pixel will invert pixels on the display.
- [save](bm18cursor/1589138-save.md): This array stores the color values of the region underneath the cursor in its last drawn position.
