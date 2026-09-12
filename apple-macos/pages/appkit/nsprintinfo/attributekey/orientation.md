> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/attributekey/orientation](https://developer.apple.com/documentation/appkit/nsprintinfo/attributekey/orientation)

# orientation (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

An `NSNumber` object containing an `NSPrintingOrientation`.

## Declaration

```swift
static let orientation: NSPrintInfo.AttributeKey
```

<a id="Discussion"></a>

## Discussion

`NSPortraitOrientation` or `NSLandscapeOrientation`

## See Also

### Page Setup Attributes

- [paperName](papername.md): An `NSString` object containing the paper name.
- [paperSize](papersize.md): An `NSSize` value specifying the height and width of paper in points.
- [scalingFactor](scalingfactor.md): Scale factor percentage before pagination.

# NSPrintOrientation (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

An `NSNumber` object containing an `NSPrintingOrientation`.

## Declaration

```objectivec
extern NSPrintInfoAttributeKey const NSPrintOrientation;
```

<a id="Discussion"></a>

## Discussion

`NSPortraitOrientation` or `NSLandscapeOrientation`

## See Also

### Page Setup Attributes

- [NSPrintPaperName](papername.md): An `NSString` object containing the paper name.
- [NSPrintPaperSize](papersize.md): An `NSSize` value specifying the height and width of paper in points.
- [NSPrintScalingFactor](scalingfactor.md): Scale factor percentage before pagination.
