> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamsourcerect

# kCGDisplayStreamSourceRect

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Global Variable

## Declaration

```objectivec
extern CFStringRef const kCGDisplayStreamSourceRect;
```

<a id="discussion"></a>

## Discussion

This may be used to request a subregion of the display to be provided as the source of the display stream.  Use CGRectCreateDictionaryRepresentation to convert from a CGRect to the value used here.   Note: The coordinate system for the source rectangle is specified in display logical coordinates and not in pixels, in order to match the normal convention on HiDPI displays.
