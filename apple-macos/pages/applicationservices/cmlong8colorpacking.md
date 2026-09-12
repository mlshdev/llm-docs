> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmlong8colorpacking](https://developer.apple.com/documentation/applicationservices/cmlong8colorpacking)

# cmLong8ColorPacking

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var cmLong8ColorPacking: Int { get }
```

<a id="discussion"></a>

## Discussion

The color values for three or four 8-bit color channels are stored consecutively in a 32-bit long. For three channels, this constant is combined with either `cmAlphaFirstPacking` or `cmAlphaLastPacking` to indicate whether the unused eight bits are located at the beginning or end.
