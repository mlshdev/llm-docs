> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpgridtemplate/maximumgridbuttonimagesize](https://developer.apple.com/documentation/carplay/cpgridtemplate/maximumgridbuttonimagesize)

# maximumGridButtonImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The expected image size for your @c CPGridButton.

## Declaration

```swift
class var maximumGridButtonImageSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

To properly size your list images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

# maximumGridButtonImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The expected image size for your @c CPGridButton.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CGSize maximumGridButtonImageSize;
```

<a id="discussion"></a>

## Discussion

To properly size your list images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].
