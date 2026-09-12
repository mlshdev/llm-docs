> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagedestinationaddimage(_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagedestinationaddimage(_:_:_:))

# CGImageDestinationAddImage(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an image to an image destination.

## Declaration

```swift
func CGImageDestinationAddImage(_ idst: CGImageDestination, _ image: CGImage, _ properties: CFDictionary?)
```

## Parameters

- `idst`: The image destination to modify.
- `image`: The image to add.
- `properties`: An optional dictionary that specifies the properties of the added image. Specify `NULL` to omit any additional properties. For a list of possible values, see [Image Properties](image-properties.md) and doc:CGImageDestination/Configuring-the-Image-Behaviors.

<a id="Discussion"></a>

## Discussion

The function logs an error if you add more images than what you specified when you created the image destination.

## See Also

### Adding Images to the Destination

- [CGImageDestinationAddImageFromSource(\_:\_:\_:\_:)](cgimagedestinationaddimagefromsource%28________%29.md): Adds an image from an image source to an image destination.

# CGImageDestinationAddImage (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an image to an image destination.

## Declaration

```objectivec
extern void CGImageDestinationAddImage(CGImageDestinationRef idst, CGImageRef image, CFDictionaryRef properties);
```

## Parameters

- `idst`: The image destination to modify.
- `image`: The image to add.
- `properties`: An optional dictionary that specifies the properties of the added image. Specify `NULL` to omit any additional properties. For a list of possible values, see [Image Properties](image-properties.md) and doc:CGImageDestination/Configuring-the-Image-Behaviors.

<a id="Discussion"></a>

## Discussion

The function logs an error if you add more images than what you specified when you created the image destination.

## See Also

### Adding Images to the Destination

- [CGImageDestinationAddImageFromSource](cgimagedestinationaddimagefromsource%28________%29.md): Adds an image from an image source to an image destination.
