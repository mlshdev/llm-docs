> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotorequestoptions/deliverymode](https://developer.apple.com/documentation/photos/phlivephotorequestoptions/deliverymode)

# deliveryMode (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The requested Live Photo quality and delivery priority.

## Declaration

```swift
var deliveryMode: PHImageRequestOptionsDeliveryMode { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to tell Photos to provide a Live Photo quickly (possibly sacrificing image quality), to provide a high-quality Live Photo (possibly sacrificing speed), or to provide both automatically if needed. See [PHImageRequestOptionsDeliveryMode](../phimagerequestoptionsdeliverymode.md).

## See Also

### Specifying Image Request Options

- [version](version.md): The version of the Live Photo to be requested.

# deliveryMode (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The requested Live Photo quality and delivery priority.

## Declaration

```objectivec
@property (nonatomic, assign) PHImageRequestOptionsDeliveryMode deliveryMode;
```

<a id="Discussion"></a>

## Discussion

Use this property to tell Photos to provide a Live Photo quickly (possibly sacrificing image quality), to provide a high-quality Live Photo (possibly sacrificing speed), or to provide both automatically if needed. See [PHImageRequestOptionsDeliveryMode](../phimagerequestoptionsdeliverymode.md).

## See Also

### Specifying Image Request Options

- [version](version.md): The version of the Live Photo to be requested.
