> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560270-color_packing_for_color_spaces/cmlong8colorpacking](https://developer.apple.com/documentation/applicationservices/1560270-color_packing_for_color_spaces/cmlong8colorpacking)

# cmLong8ColorPacking

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
cmLong8ColorPacking = 0x0800
```

<a id="discussion"></a>

## Discussion

The color values for three or four 8-bit color channels are stored consecutively in a 32-bit long. For three channels, this constant is combined with either `cmAlphaFirstPacking` or `cmAlphaLastPacking` to indicate whether the unused eight bits are located at the beginning or end.
