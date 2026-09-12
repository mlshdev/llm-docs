> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(iconref:)](https://developer.apple.com/documentation/appkit/nsimage/init(iconref:))

# init(iconRef:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+ (deprecated in 11.0)

Initializes the image object with a Carbon-style icon resource.

> Use -\[NSWorkspace iconForFile:\], -\[NSWorkspace iconForFiles:\], -\[NSWorkspace iconForFileType:\], or +\[NSImage imageNamed:\] instead.

## Declaration

```swift
convenience init(iconRef: IconRef)
```

## Parameters

- `iconRef`: A reference to a Carbon icon resource.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object.

<a id="Discussion"></a>

## Discussion

Creates one or more bitmap image representations, one for each size icon contained in the `IconRef` data structure. This initialization method automatically retains the data in the `iconRef` parameter and loads the bitmaps from that data file lazily.

## See Also

### Instance Methods

- [lockFocus()](lockfocus%28%29.md): Deprecated. Prepares the image to receive drawing commands.
- [lockFocusFlipped(\_:)](lockfocusflipped%28__%29.md): Deprecated. Prepares the image to receive drawing commands using the specified flipped state.
- [unlockFocus()](unlockfocus%28%29.md): Deprecated. Removes the focus from the image.

# initWithIconRef: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 11.0)

Initializes the image object with a Carbon-style icon resource.

> Use -\[NSWorkspace iconForFile:\], -\[NSWorkspace iconForFiles:\], -\[NSWorkspace iconForFileType:\], or +\[NSImage imageNamed:\] instead.

## Declaration

```objectivec
- (instancetype) initWithIconRef:(IconRef) iconRef;
```

## Parameters

- `iconRef`: A reference to a Carbon icon resource.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object.

<a id="Discussion"></a>

## Discussion

Creates one or more bitmap image representations, one for each size icon contained in the `IconRef` data structure. This initialization method automatically retains the data in the `iconRef` parameter and loads the bitmaps from that data file lazily.

## See Also

### Instance Methods

- [lockFocus](lockfocus%28%29.md): Deprecated. Prepares the image to receive drawing commands.
- [lockFocusFlipped:](lockfocusflipped%28__%29.md): Deprecated. Prepares the image to receive drawing commands using the specified flipped state.
- [unlockFocus](unlockfocus%28%29.md): Deprecated. Removes the focus from the image.
- [lockFocusOnRepresentation:](lockfocusonrepresentation_.md): Deprecated. Prepares the specified image representation to receive drawing commands.
- [bestRepresentationForDevice:](bestrepresentationfordevice_.md): Deprecated. Returns the best representation for the device with the specified characteristics.
- [compositeToPoint:operation:](compositetopoint_operation_.md): Deprecated. Composites the entire image to the specified point in the current coordinate system.
- [compositeToPoint:fromRect:operation:](compositetopoint_fromrect_operation_.md): Deprecated. Composites a portion of the image to the specified point in the current coordinate system.
- [compositeToPoint:fromRect:operation:fraction:](compositetopoint_fromrect_operation_fraction_.md): Deprecated. Composites a portion of the image at the specified opacity to the current coordinate system.
- [compositeToPoint:operation:fraction:](compositetopoint_operation_fraction_.md): Deprecated. Composites the entire image at the specified opacity in the current coordinate system.
- [dissolveToPoint:fraction:](dissolvetopoint_fraction_.md): Deprecated. Composites the entire image to the specified location using the source-over operator.
- [dissolveToPoint:fromRect:fraction:](dissolvetopoint_fromrect_fraction_.md): Deprecated. Composites a portion of the image to the specified location using the source-over operator.
- [setScalesWhenResized:](setscaleswhenresized_.md): Deprecated. Sets whether to scale different-sized image representations to fit the image’s size.
- [scalesWhenResized](scaleswhenresized.md): Deprecated. Returns a Boolean value that indicates whether to scale image representations to fit the image’s size.
- [setDataRetained:](setdataretained_.md): Deprecated. Sets whether the image retains its source image data.
- [isDataRetained](isdataretained.md): Deprecated. Returns a Boolean value that incidates whether the image retains its source image data.
