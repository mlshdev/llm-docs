> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/bm38cursor](https://developer.apple.com/documentation/iokit/bm38cursor)

# bm38Cursor

**Interface language:** Objective-C

**Framework:** IOKit  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

Cursor image for 24-bit cursor.

## Declaration

```objectivec
struct bm38Cursor {
    ...
};
```

<a id="discussion"></a>

## Discussion

This structure stores 16 pixel x 16 pixel cursors to be used with 24-bit color depth. This structure is only defined if IOFB_ARBITRARY_SIZE_CURSOR is not defined.

## Topics

### Fields

- [image](bm38cursor/1589157-image.md): This array defines the cursor color values and transparency. The array is two dimensional and its first index is the cursor frame and the second index is the cursor pixel. The lower 24 bits of a pixel's value contain the RGB color, while the upper 8 bits contain the alpha value.
- [save](bm38cursor/1589145-save.md): This array stores the color values of the region underneath the cursor in its last drawn position.
