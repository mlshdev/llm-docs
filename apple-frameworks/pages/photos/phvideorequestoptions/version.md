> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phvideorequestoptions/version](https://developer.apple.com/documentation/photos/phvideorequestoptions/version)

# version (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The version of the video to request.

## Declaration

```swift
var version: PHVideoRequestOptionsVersion { get set }
```

<a id="Discussion"></a>

## Discussion

If a video asset has been edited, use this property to request a video with or without adjustments.

The default option is [PHVideoRequestOptionsVersion.current](../phvideorequestoptionsversion/current.md). See [PHVideoRequestOptionsVersion](../phvideorequestoptionsversion.md).

## See Also

### Specifying Video Request Options

- [PHVideoRequestOptionsVersion](../phvideorequestoptionsversion.md): Options for requesting a video asset with or without adjustments, used by the [version](version.md) property.
- [deliveryMode](deliverymode.md): A mode specifying the requested video quality and delivery priority.
- [PHVideoRequestOptionsDeliveryMode](../phvideorequestoptionsdeliverymode.md): Options for delivering requested video data, used by the [deliveryMode](deliverymode.md) property.

# version (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The version of the video to request.

## Declaration

```objectivec
@property (nonatomic, assign) PHVideoRequestOptionsVersion version;
```

<a id="Discussion"></a>

## Discussion

If a video asset has been edited, use this property to request a video with or without adjustments.

The default option is [PHVideoRequestOptionsVersionCurrent](../phvideorequestoptionsversion/current.md). See [PHVideoRequestOptionsVersion](../phvideorequestoptionsversion.md).

## See Also

### Specifying Video Request Options

- [PHVideoRequestOptionsVersion](../phvideorequestoptionsversion.md): Options for requesting a video asset with or without adjustments, used by the [version](version.md) property.
- [deliveryMode](deliverymode.md): A mode specifying the requested video quality and delivery priority.
- [PHVideoRequestOptionsDeliveryMode](../phvideorequestoptionsdeliverymode.md): Options for delivering requested video data, used by the [deliveryMode](deliverymode.md) property.
