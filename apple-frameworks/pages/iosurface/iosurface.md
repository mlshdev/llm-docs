> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iosurface/iosurface](https://developer.apple.com/documentation/iosurface/iosurface)

# IOSurface (Swift)

**Framework:** IOSurface  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Data type representing an IOSurface opaque object.

## Declaration

```swift
class IOSurface
```

## Topics

### Initializers

- [init(properties:)](iosurface/init%28properties_%29.md)
- [init(\_:)](iosurface/init%28__%29.md)
- [init(coder:)](iosurface/init%28coder_%29.md)

### Instance Properties

- [allocationSize](iosurface/allocationsize.md)
- [allowsPixelSizeCasting](iosurface/allowspixelsizecasting.md)
- [baseAddress](iosurface/baseaddress.md)
- [bytesPerElement](iosurface/bytesperelement.md)
- [bytesPerRow](iosurface/bytesperrow.md)
- [elementHeight](iosurface/elementheight.md)
- [elementWidth](iosurface/elementwidth.md)
- [height](iosurface/height.md)
- [isInUse](iosurface/isinuse.md)
- [localUseCount](iosurface/localusecount.md)
- [pixelFormat](iosurface/pixelformat.md)
- [planeCount](iosurface/planecount.md)
- [seed](iosurface/seed.md)
- [width](iosurface/width.md)
- [surfaceID](iosurface/surfaceid.md)

### Instance Methods

- [allAttachments()](iosurface/allattachments%28%29.md)
- [attachment(forKey:)](iosurface/attachment%28forkey_%29.md)
- [baseAddressOfPlane(at:)](iosurface/baseaddressofplane%28at_%29.md)
- [bytesPerElementOfPlane(at:)](iosurface/bytesperelementofplane%28at_%29.md)
- [bytesPerRowOfPlane(at:)](iosurface/bytesperrowofplane%28at_%29.md)
- [decrementUseCount()](iosurface/decrementusecount%28%29.md)
- [elementHeightOfPlane(at:)](iosurface/elementheightofplane%28at_%29.md)
- [elementWidthOfPlane(at:)](iosurface/elementwidthofplane%28at_%29.md)
- [heightOfPlane(at:)](iosurface/heightofplane%28at_%29.md)
- [incrementUseCount()](iosurface/incrementusecount%28%29.md)
- [lock(options:seed:)](iosurface/lock%28options_seed_%29.md)
- [removeAllAttachments()](iosurface/removeallattachments%28%29.md)
- [removeAttachment(forKey:)](iosurface/removeattachment%28forkey_%29.md)
- [setAllAttachments(\_:)](iosurface/setallattachments%28__%29.md)
- [setAttachment(\_:forKey:)](iosurface/setattachment%28__forkey_%29.md)
- [setPurgeable(\_:oldState:)](iosurface/setpurgeable%28__oldstate_%29.md)
- [unlock(options:seed:)](iosurface/unlock%28options_seed_%29.md)
- [widthOfPlane(at:)](iosurface/widthofplane%28at_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [IOSurfaceRef](iosurfaceref.md): Data type representing an IOSurface opaque object.

# IOSurface (Objective-C)

**Framework:** IOSurface  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Data type representing an IOSurface opaque object.

## Declaration

```objectivec
@interface IOSurface : NSObject
```

## Topics

### Initializers

- [initWithProperties:](iosurface/init%28properties_%29.md)

### Instance Properties

- [allocationSize](iosurface/allocationsize.md)
- [allowsPixelSizeCasting](iosurface/allowspixelsizecasting.md)
- [baseAddress](iosurface/baseaddress.md)
- [bytesPerElement](iosurface/bytesperelement.md)
- [bytesPerRow](iosurface/bytesperrow.md)
- [elementHeight](iosurface/elementheight.md)
- [elementWidth](iosurface/elementwidth.md)
- [height](iosurface/height.md)
- [inUse](iosurface/isinuse.md)
- [localUseCount](iosurface/localusecount.md)
- [pixelFormat](iosurface/pixelformat.md)
- [planeCount](iosurface/planecount.md)
- [seed](iosurface/seed.md)
- [width](iosurface/width.md)
- [surfaceID](iosurface/surfaceid.md)

### Instance Methods

- [allAttachments](iosurface/allattachments%28%29.md)
- [attachmentForKey:](iosurface/attachment%28forkey_%29.md)
- [baseAddressOfPlaneAtIndex:](iosurface/baseaddressofplane%28at_%29.md)
- [bytesPerElementOfPlaneAtIndex:](iosurface/bytesperelementofplane%28at_%29.md)
- [bytesPerRowOfPlaneAtIndex:](iosurface/bytesperrowofplane%28at_%29.md)
- [decrementUseCount](iosurface/decrementusecount%28%29.md)
- [elementHeightOfPlaneAtIndex:](iosurface/elementheightofplane%28at_%29.md)
- [elementWidthOfPlaneAtIndex:](iosurface/elementwidthofplane%28at_%29.md)
- [heightOfPlaneAtIndex:](iosurface/heightofplane%28at_%29.md)
- [incrementUseCount](iosurface/incrementusecount%28%29.md)
- [lockWithOptions:seed:](iosurface/lock%28options_seed_%29.md)
- [removeAllAttachments](iosurface/removeallattachments%28%29.md)
- [removeAttachmentForKey:](iosurface/removeattachment%28forkey_%29.md)
- [setAllAttachments:](iosurface/setallattachments%28__%29.md)
- [setAttachment:forKey:](iosurface/setattachment%28__forkey_%29.md)
- [setPurgeable:oldState:](iosurface/setpurgeable%28__oldstate_%29.md)
- [unlockWithOptions:seed:](iosurface/unlock%28options_seed_%29.md)
- [widthOfPlaneAtIndex:](iosurface/widthofplane%28at_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Classes

- [IOSurfaceRef](iosurfaceref.md): Data type representing an IOSurface opaque object.
