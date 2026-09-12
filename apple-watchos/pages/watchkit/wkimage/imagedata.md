> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkimage/imagedata](https://developer.apple.com/documentation/watchkit/wkimage/imagedata)

# imageData (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The data object containing the raw image data.

## Declaration

```swift
var imageData: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property is set using the [init(imageData:)](init%28imagedata_%29.md) method. For image objects created using other methods, this property is `nil`.

## See Also

### Getting the Image Data

- [image](image.md): The UIKit image object
- [imageName](imagename.md): The name of the image to load from the Watch app’s bundle.

# imageData (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The data object containing the raw image data.

## Declaration

```objectivec
@property (readonly, nullable) NSData * imageData;
```

<a id="Discussion"></a>

## Discussion

The value in this property is set using the [imageWithImageData:](init%28imagedata_%29.md) method. For image objects created using other methods, this property is `nil`.

## See Also

### Getting the Image Data

- [image](image.md): The UIKit image object
- [imageName](imagename.md): The name of the image to load from the Watch app’s bundle.
