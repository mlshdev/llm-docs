> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamdestinationrect

# kCGDisplayStreamDestinationRect

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Global Variable

## Declaration

```objectivec
extern CFStringRef const kCGDisplayStreamDestinationRect;
```

<a id="discussion"></a>

## Discussion

This may be used to request where within the destination buffer the display updates should be placed. Use CGRectCreateDictionaryRepresentation to convert from a CGRect to the value used here.   Note: The coordinate system for the destination rectangle is always specified in output pixels to match the fact that the output buffer size is also specified in terms of pixels.
