> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phvideorequestoptions/deliverymode](https://developer.apple.com/documentation/photos/phvideorequestoptions/deliverymode)

# deliveryMode (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A mode specifying the requested video quality and delivery priority.

## Declaration

```swift
var deliveryMode: PHVideoRequestOptionsDeliveryMode { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to tell Photos to provide a video quickly (possibly sacrificing image quality) or to provide a high-quality video (possibly sacrificing speed). This option applies only when requesting the current version of the video (that is, only when the [version](version.md) property is [PHVideoRequestOptionsVersion.current](../phvideorequestoptionsversion/current.md)).

The default option is [PHVideoRequestOptionsDeliveryMode.automatic](../phvideorequestoptionsdeliverymode/automatic.md). See [PHVideoRequestOptionsDeliveryMode](../phvideorequestoptionsdeliverymode.md).

## See Also

### Specifying Video Request Options

- [version](version.md): The version of the video to request.
- [PHVideoRequestOptionsVersion](../phvideorequestoptionsversion.md): Options for requesting a video asset with or without adjustments, used by the [version](version.md) property.
- [PHVideoRequestOptionsDeliveryMode](../phvideorequestoptionsdeliverymode.md): Options for delivering requested video data, used by the [deliveryMode](deliverymode.md) property.

# deliveryMode (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A mode specifying the requested video quality and delivery priority.

## Declaration

```objectivec
@property (nonatomic, assign) PHVideoRequestOptionsDeliveryMode deliveryMode;
```

<a id="Discussion"></a>

## Discussion

Use this property to tell Photos to provide a video quickly (possibly sacrificing image quality) or to provide a high-quality video (possibly sacrificing speed). This option applies only when requesting the current version of the video (that is, only when the [version](version.md) property is [PHVideoRequestOptionsVersionCurrent](../phvideorequestoptionsversion/current.md)).

The default option is [PHVideoRequestOptionsDeliveryModeAutomatic](../phvideorequestoptionsdeliverymode/automatic.md). See [PHVideoRequestOptionsDeliveryMode](../phvideorequestoptionsdeliverymode.md).

## See Also

### Specifying Video Request Options

- [version](version.md): The version of the video to request.
- [PHVideoRequestOptionsVersion](../phvideorequestoptionsversion.md): Options for requesting a video asset with or without adjustments, used by the [version](version.md) property.
- [PHVideoRequestOptionsDeliveryMode](../phvideorequestoptionsdeliverymode.md): Options for delivering requested video data, used by the [deliveryMode](deliverymode.md) property.
