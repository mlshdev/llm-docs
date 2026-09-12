> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextalignmenttocttextalignment](https://developer.apple.com/documentation/uikit/nstextalignmenttocttextalignment)

# NSTextAlignmentToCTTextAlignment

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a UIKit text alignment constant value to the matching constant value that Core Text uses.

## Declaration

```objectivec
extern CTTextAlignment NSTextAlignmentToCTTextAlignment(NSTextAlignment nsTextAlignment);
```

## Parameters

- `nsTextAlignment`: The UIKit text alignment constant you want to convert.

<a id="return-value"></a>

## Return Value

The Core Text alignment that corresponds to the value specified in `nsTextAlignment`.

<a id="Discussion"></a>

## Discussion

Use this function when you need to map between the UIKit and Core Text constants for text alignment.

## See Also

### Text manipulations

- [NSTextAlignmentFromCTTextAlignment](nstextalignment/init%28__%29.md): Converts a Core Text alignment constant value to the matching constant value in UIKit.
