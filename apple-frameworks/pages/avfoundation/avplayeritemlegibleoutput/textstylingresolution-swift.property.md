> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutput/textstylingresolution-swift.property](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/textstylingresolution-swift.property)

# textStylingResolution (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A string identifier indicating the degree of text styling to be applied to attributed strings vended by the  object.

## Declaration

```swift
var textStylingResolution: AVPlayerItemLegibleOutput.TextStylingResolution { get set }
```

<a id="Discussion"></a>

## Discussion

Valid values are described in `Text Style Settings`.  An exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) is raised if this property is set to any other value.

The default value is [default](textstylingresolution-swift.struct/default.md), which indicates that attributed strings vended by the receiver includes the same level of styling information that would be used if the text was rendered by an instance of [AVPlayerLayer](../avplayerlayer.md).

> **Note**

>  This is an advanced feature and you should rarely need to change it from the default value.

## See Also

### Configuring text styling

- [AVPlayerItemLegibleOutput.TextStylingResolution](textstylingresolution-swift.struct.md): A text styling resolution.

# textStylingResolution (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A string identifier indicating the degree of text styling to be applied to attributed strings vended by the  object.

## Declaration

```objectivec
@property (nonatomic, copy) AVPlayerItemLegibleOutputTextStylingResolution textStylingResolution;
```

<a id="Discussion"></a>

## Discussion

Valid values are described in `Text Style Settings`.  An exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)) is raised if this property is set to any other value.

The default value is [AVPlayerItemLegibleOutputTextStylingResolutionDefault](textstylingresolution-swift.struct/default.md), which indicates that attributed strings vended by the receiver includes the same level of styling information that would be used if the text was rendered by an instance of [AVPlayerLayer](../avplayerlayer.md).

> **Note**

>  This is an advanced feature and you should rarely need to change it from the default value.

## See Also

### Configuring text styling

- [AVPlayerItemLegibleOutputTextStylingResolution](textstylingresolution-swift.struct.md): A text styling resolution.
