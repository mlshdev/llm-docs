> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpreferences/allowsanimatedimagelooping](https://developer.apple.com/documentation/webkit/webpreferences/allowsanimatedimagelooping)

# allowsAnimatedImageLooping (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether or not the receiver allows animated images to loop.

## Declaration

```swift
var allowsAnimatedImageLooping: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the web view should loop animated images, [false](https://developer.apple.com/documentation/swift/false) otherwise.

If image looping is disabled, the web view displays it as a static image. The number of times that an image loops is determined by parameters of the image file itself and cannot be set in the web view.

## See Also

### Handling Images

- [allowsAnimatedImages](allowsanimatedimages.md): Deprecated. A Boolean that indicates whether or not the receiver allows animated images.
- [loadsImagesAutomatically](loadsimagesautomatically.md): Deprecated. A Boolean that indicates whether or not the web view allows images to be loaded automatically.

# allowsAnimatedImageLooping (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether or not the receiver allows animated images to loop.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsAnimatedImageLooping;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the web view should loop animated images, [false](https://developer.apple.com/documentation/swift/false) otherwise.

If image looping is disabled, the web view displays it as a static image. The number of times that an image loops is determined by parameters of the image file itself and cannot be set in the web view.

## See Also

### Handling Images

- [allowsAnimatedImages](allowsanimatedimages.md): Deprecated. A Boolean that indicates whether or not the receiver allows animated images.
- [loadsImagesAutomatically](loadsimagesautomatically.md): Deprecated. A Boolean that indicates whether or not the web view allows images to be loaded automatically.
