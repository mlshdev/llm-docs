> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevice/vendorname](https://developer.apple.com/documentation/gamecontroller/gcdevice/vendorname)

# vendorName (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The manufacturer-provided name for the device, or the user’s name for the device.

## Declaration

```swift
var vendorName: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property may be `nil` and may not be unique. Use this property to present information about the device to the user.

## See Also

### Getting device information

- [productCategory](productcategory.md): The product category that identifies the type of controller.
- [Product category constants](../product-category-constants.md)

# vendorName (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The manufacturer-provided name for the device, or the user’s name for the device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * vendorName;
```

<a id="Discussion"></a>

## Discussion

The value of this property may be `nil` and may not be unique. Use this property to present information about the device to the user.

## See Also

### Getting device information

- [productCategory](productcategory.md): The product category that identifies the type of controller.
- [Product category constants](../product-category-constants.md)
