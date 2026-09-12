> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkimage/image](https://developer.apple.com/documentation/watchkit/wkimage/image)

# image (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The UIKit image object

## Declaration

```swift
var image: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property is set using the [init(image:)](init%28image_%29.md) method. For image objects created using other methods, this property is `nil`.

## See Also

### Getting the Image Data

- [imageData](imagedata.md): The data object containing the raw image data.
- [imageName](imagename.md): The name of the image to load from the Watch app’s bundle.

# image (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The UIKit image object

## Declaration

```objectivec
@property (readonly, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

The value in this property is set using the [imageWithImage:](init%28image_%29.md) method. For image objects created using other methods, this property is `nil`.

## See Also

### Getting the Image Data

- [imageData](imagedata.md): The data object containing the raw image data.
- [imageName](imagename.md): The name of the image to load from the Watch app’s bundle.
