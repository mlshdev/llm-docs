> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/backingalignedrect(_:options:)](https://developer.apple.com/documentation/appkit/nsscreen/backingalignedrect(_:options:))

# backingAlignedRect(\_:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Converts a rectangle in global screen coordinates to a pixel aligned rectangle.

## Declaration

```swift
func backingAlignedRect(_ rect: NSRect, options: AlignmentOptions = []) -> NSRect
```

## Parameters

- `rect`: The input rectangle in global screen coordinates.
- `options`: Specifies the alignment options. See [AlignmentOptions](https://developer.apple.com/documentation/foundation/alignmentoptions) for possible values.

<a id="return-value"></a>

## Return Value

Returns a a pixel aligned rectangle on the target screen from the given input rectangle in global screen coordinates.

<a id="Discussion"></a>

## Discussion

This method uses [NSIntegralRectWithOptions(\_:\_:)](https://developer.apple.com/documentation/foundation/nsintegralrectwithoptions%28_:_:%29) to produce the pixel aligned rectangle.

## See Also

### Converting Between Screen and Backing Coordinates

- [backingScaleFactor](backingscalefactor.md): The backing store pixel scale factor for the screen.
- [convertRectFromBacking(\_:)](convertrectfrombacking%28__%29.md): Converts the rectangle from the device pixel aligned coordinates system of a screen.
- [convertRectToBacking(\_:)](convertrecttobacking%28__%29.md): Converts the rectangle to the device pixel aligned coordinates system of a screen.

# backingAlignedRect:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Converts a rectangle in global screen coordinates to a pixel aligned rectangle.

## Declaration

```objectivec
- (NSRect) backingAlignedRect:(NSRect) rect options:(NSAlignmentOptions) options;
```

## Parameters

- `rect`: The input rectangle in global screen coordinates.
- `options`: Specifies the alignment options. See [NSAlignmentOptions](https://developer.apple.com/documentation/foundation/alignmentoptions) for possible values.

<a id="return-value"></a>

## Return Value

Returns a a pixel aligned rectangle on the target screen from the given input rectangle in global screen coordinates.

<a id="Discussion"></a>

## Discussion

This method uses [NSIntegralRectWithOptions](https://developer.apple.com/documentation/foundation/nsintegralrectwithoptions%28_:_:%29) to produce the pixel aligned rectangle.

## See Also

### Converting Between Screen and Backing Coordinates

- [backingScaleFactor](backingscalefactor.md): The backing store pixel scale factor for the screen.
- [convertRectFromBacking:](convertrectfrombacking%28__%29.md): Converts the rectangle from the device pixel aligned coordinates system of a screen.
- [convertRectToBacking:](convertrecttobacking%28__%29.md): Converts the rectangle to the device pixel aligned coordinates system of a screen.
