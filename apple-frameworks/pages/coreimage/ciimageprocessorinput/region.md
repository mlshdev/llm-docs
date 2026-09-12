> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorinput/region](https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/region)

# region (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The rectangular region of the input image that your Core Image Processor Kernel can use to provide the output.

## Declaration

```swift
var region: CGRect { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> This will contain but may be larger than the rect returned by ‘roiCallback’.

## See Also

### Getting Supplemental Information for Image Processing

- [bytesPerRow](bytesperrow.md): The bytes per row of the CPU memory that your Core Image Processor Kernel can read pixelsfrom.
- [format](format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can read pixels from.

# region (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The rectangular region of the input image that your Core Image Processor Kernel can use to provide the output.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect region;
```

<a id="discussion"></a>

## Discussion

> **Note**

> This will contain but may be larger than the rect returned by ‘roiCallback’.

## See Also

### Getting Supplemental Information for Image Processing

- [bytesPerRow](bytesperrow.md): The bytes per row of the CPU memory that your Core Image Processor Kernel can read pixelsfrom.
- [format](format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can read pixels from.
