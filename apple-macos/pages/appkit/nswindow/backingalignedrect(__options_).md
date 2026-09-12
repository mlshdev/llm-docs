> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/backingalignedrect(_:options:)](https://developer.apple.com/documentation/appkit/nswindow/backingalignedrect(_:options:))

# backingAlignedRect(\_:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a backing store pixel-aligned rectangle in window coordinates.

## Declaration

```swift
func backingAlignedRect(_ rect: NSRect, options: AlignmentOptions = []) -> NSRect
```

## Parameters

- `rect`: The rectangle in view coordinates.
- `options`: The alignment options. [AlignmentOptions](https://developer.apple.com/documentation/foundation/alignmentoptions) specifies the possible values.

<a id="return-value"></a>

## Return Value

A rectangle, in window coordinates, aligned to the backing store pixels according to the specified options.

<a id="Discussion"></a>

## Discussion

This method uses [NSIntegralRectWithOptions(\_:\_:)](https://developer.apple.com/documentation/foundation/nsintegralrectwithoptions%28_:_:%29) to align the input rectangle, and produces a backing store pixel-aligned rectangle.

## See Also

### Converting Coordinates

- [backingScaleFactor](backingscalefactor.md): The backing scale factor.
- [convertFromBacking(\_:)](convertfrombacking%28__%29.md): Converts a rectangle from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertFromScreen(\_:)](convertfromscreen%28__%29.md): Converts a rectangle from the screen coordinate system to the window’s coordinate system.
- [convertPointFromBacking(\_:)](convertpointfrombacking%28__%29.md): Converts a point from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertPoint(fromScreen:)](convertpoint%28fromscreen_%29.md): Converts a point from the screen coordinate system to the window’s coordinate system.
- [convertToBacking(\_:)](converttobacking%28__%29.md): Converts a rectangle from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertToScreen(\_:)](converttoscreen%28__%29.md): Converts a rectangle to the screen coordinate system from the window’s coordinate system.
- [convertPointToBacking(\_:)](convertpointtobacking%28__%29.md): Converts a point from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertPoint(toScreen:)](convertpoint%28toscreen_%29.md): Converts a point to the screen coordinate system from the window’s coordinate system.

# backingAlignedRect:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a backing store pixel-aligned rectangle in window coordinates.

## Declaration

```objectivec
- (NSRect) backingAlignedRect:(NSRect) rect options:(NSAlignmentOptions) options;
```

## Parameters

- `rect`: The rectangle in view coordinates.
- `options`: The alignment options. [NSAlignmentOptions](https://developer.apple.com/documentation/foundation/alignmentoptions) specifies the possible values.

<a id="return-value"></a>

## Return Value

A rectangle, in window coordinates, aligned to the backing store pixels according to the specified options.

<a id="Discussion"></a>

## Discussion

This method uses [NSIntegralRectWithOptions](https://developer.apple.com/documentation/foundation/nsintegralrectwithoptions%28_:_:%29) to align the input rectangle, and produces a backing store pixel-aligned rectangle.

## See Also

### Converting Coordinates

- [backingScaleFactor](backingscalefactor.md): The backing scale factor.
- [convertRectFromBacking:](convertfrombacking%28__%29.md): Converts a rectangle from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertRectFromScreen:](convertfromscreen%28__%29.md): Converts a rectangle from the screen coordinate system to the window’s coordinate system.
- [convertPointFromBacking:](convertpointfrombacking%28__%29.md): Converts a point from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertPointFromScreen:](convertpoint%28fromscreen_%29.md): Converts a point from the screen coordinate system to the window’s coordinate system.
- [convertRectToBacking:](converttobacking%28__%29.md): Converts a rectangle from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertRectToScreen:](converttoscreen%28__%29.md): Converts a rectangle to the screen coordinate system from the window’s coordinate system.
- [convertPointToBacking:](convertpointtobacking%28__%29.md): Converts a point from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertPointToScreen:](convertpoint%28toscreen_%29.md): Converts a point to the screen coordinate system from the window’s coordinate system.
