> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkimage/imagename](https://developer.apple.com/documentation/watchkit/wkimage/imagename)

# imageName (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The name of the image to load from the Watch app’s bundle.

## Declaration

```swift
var imageName: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property is set using the [init(imageName:)](init%28imagename_%29.md) method. For image objects created using other methods, this property is `nil`.

## See Also

### Getting the Image Data

- [image](image.md): The UIKit image object
- [imageData](imagedata.md): The data object containing the raw image data.

# imageName (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The name of the image to load from the Watch app’s bundle.

## Declaration

```objectivec
@property (readonly, nullable) NSString * imageName;
```

<a id="Discussion"></a>

## Discussion

The value in this property is set using the [imageWithImageName:](init%28imagename_%29.md) method. For image objects created using other methods, this property is `nil`.

## See Also

### Getting the Image Data

- [image](image.md): The UIKit image object
- [imageData](imagedata.md): The data object containing the raw image data.
