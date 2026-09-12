> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrollayoutanchorcoordinatesystem/relative](https://developer.apple.com/documentation/touchcontroller/tccontrollayoutanchorcoordinatesystem/relative)

# TCControlLayoutAnchorCoordinateSystem.relative (Swift)

**Framework:** Touch Controller  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Anchors are positioned relative to the device’s screen size.

## Declaration

```swift
case relative
```

<a id="discussion"></a>

## Discussion

- On larger devices, the coordinate system is shrunk for easier handling.
- On smaller devices, this is equivalent to `TCControlLayoutAnchorCoordinateSystemAbsolute`.

## See Also

### Anchors

- [TCControlLayoutAnchorCoordinateSystem.absolute](absolute.md): Anchors are positioned according to the absolute edges of the sceren.

# TCControlLayoutAnchorCoordinateSystemRelative (Objective-C)

**Framework:** Touch Controller  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Anchors are positioned relative to the device’s screen size.

## Declaration

```objectivec
TCControlLayoutAnchorCoordinateSystemRelative
```

<a id="discussion"></a>

## Discussion

- On larger devices, the coordinate system is shrunk for easier handling.
- On smaller devices, this is equivalent to `TCControlLayoutAnchorCoordinateSystemAbsolute`.

## See Also

### Anchors

- [TCControlLayoutAnchorCoordinateSystemAbsolute](absolute.md): Anchors are positioned according to the absolute edges of the sceren.
