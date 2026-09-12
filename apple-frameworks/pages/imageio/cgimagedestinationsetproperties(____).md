> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagedestinationsetproperties(_:_:)](https://developer.apple.com/documentation/imageio/cgimagedestinationsetproperties(_:_:))

# CGImageDestinationSetProperties(\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Applies one or more properties to all images in an image destination.

## Declaration

```swift
func CGImageDestinationSetProperties(_ idst: CGImageDestination, _ properties: CFDictionary?)
```

## Parameters

- `idst`: The image destination to modify
- `properties`: A dictionary that contains the properties to apply. For a list of possible values, see [Image Properties](image-properties.md) and doc:CGImageDestination/Configuring-the-Image-Behaviors.

## See Also

### Adding Metadata to the Image

- [CGImageDestinationAddAuxiliaryDataInfo(\_:\_:\_:)](cgimagedestinationaddauxiliarydatainfo%28______%29.md): Sets the auxiliary data, such as mattes and depth information, that accompany the image.

# CGImageDestinationSetProperties (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Applies one or more properties to all images in an image destination.

## Declaration

```objectivec
extern void CGImageDestinationSetProperties(CGImageDestinationRef idst, CFDictionaryRef properties);
```

## Parameters

- `idst`: The image destination to modify
- `properties`: A dictionary that contains the properties to apply. For a list of possible values, see [Image Properties](image-properties.md) and doc:CGImageDestination/Configuring-the-Image-Behaviors.

## See Also

### Adding Metadata to the Image

- [CGImageDestinationAddAuxiliaryDataInfo](cgimagedestinationaddauxiliarydatainfo%28______%29.md): Sets the auxiliary data, such as mattes and depth information, that accompany the image.
