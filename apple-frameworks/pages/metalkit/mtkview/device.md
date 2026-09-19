> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalkit/mtkview/device

# device (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The device object the view uses to create its Metal objects.

## Declaration

```swift
var device: (any MTLDevice)? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. You must explicitly set the device object.

## See Also

### Configuring the Metal Device

- [preferredDevice](preferreddevice.md): The device object that the system recommends using for this view.

# device (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The device object the view uses to create its Metal objects.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLDevice> device;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. You must explicitly set the device object.

## See Also

### Configuring the Metal Device

- [preferredDevice](preferreddevice.md): The device object that the system recommends using for this view.
