> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextalignment/init(_:)](https://developer.apple.com/documentation/uikit/nstextalignment/init(_:))

# init(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a Core Text alignment constant value to the matching constant value in UIKit.

## Declaration

```swift
init(_ ctTextAlignment: CTTextAlignment)
```

## Parameters

- `ctTextAlignment`: The Core Text alignment constant to convert.

<a id="return-value"></a>

## Return Value

The UIKit text alignment that corresponds to the value specified in `ctTextAlignment`.

<a id="Discussion"></a>

## Discussion

Use this function when you need to map between the Core Text and UIKit constants for text alignment.

## See Also

### Text manipulations

- [init(\_:)](../../coretext/cttextalignment/init%28__%29.md): Converts a UIKit text alignment constant value to the matching constant value that Core Text uses.

# NSTextAlignmentFromCTTextAlignment (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a Core Text alignment constant value to the matching constant value in UIKit.

## Declaration

```objectivec
extern NSTextAlignment NSTextAlignmentFromCTTextAlignment(CTTextAlignment ctTextAlignment);
```

## Parameters

- `ctTextAlignment`: The Core Text alignment constant to convert.

<a id="return-value"></a>

## Return Value

The UIKit text alignment that corresponds to the value specified in `ctTextAlignment`.

<a id="Discussion"></a>

## Discussion

Use this function when you need to map between the Core Text and UIKit constants for text alignment.

## See Also

### Text manipulations

- [NSTextAlignmentToCTTextAlignment](../nstextalignmenttocttextalignment.md): Converts a UIKit text alignment constant value to the matching constant value that Core Text uses.
