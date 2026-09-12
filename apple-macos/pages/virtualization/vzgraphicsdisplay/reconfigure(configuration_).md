> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgraphicsdisplay/reconfigure(configuration:)](https://developer.apple.com/documentation/virtualization/vzgraphicsdisplay/reconfigure(configuration:))

# reconfigure(configuration:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Reconfigure this display with the new display configuration you provide.

## Declaration

```swift
func reconfigure(configuration: VZGraphicsDisplayConfiguration) throws
```

## Parameters

- `configuration`: The new [VZGraphicsDisplayConfiguration](../vzgraphicsdisplayconfiguration.md) configuration.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The type of configuration you pass to this method needs to match the corresponding type that you used to create this display.

If successful, the framework passes the new configuration to the guest, but the guest may or may not respond to parts of the configuration. If the guest doesn’t use the new configuration, the Virtualization framework doesn’t return an error.

Reconfiguration of the display triggers a display state change that you can track by adopting the [VZGraphicsDisplayObserver](../vzgraphicsdisplayobserver.md) protocol.

## See Also

### Changing the display configuration

- [reconfigure(sizeInPixels:)](reconfigure%28sizeinpixels_%29.md): Resize this display with the new dimensions you provide.

# reconfigureWithConfiguration:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Reconfigure this display with the new display configuration you provide.

## Declaration

```objectivec
- (BOOL) reconfigureWithConfiguration:(VZGraphicsDisplayConfiguration *) configuration error:(NSError **) error;
```

## Parameters

- `configuration`: The new [VZGraphicsDisplayConfiguration](../vzgraphicsdisplayconfiguration.md) configuration.
- `error`: When you call this method from Objective-C, it returns `nil` if the reconfiguration was successful or the framework assigns an error object that describes why the new configuration isn’t valid.

<a id="return-value"></a>

## Return Value

When you call this method from Objective-C, it returns [true](https://developer.apple.com/documentation/swift/true) if the reconfiguration was successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Important**

>  The type of configuration you pass to this method needs to match the corresponding type that you used to create this display.

If successful, the framework passes the new configuration to the guest, but the guest may or may not respond to parts of the configuration. If the guest doesn’t use the new configuration, the Virtualization framework doesn’t return an error.

Reconfiguration of the display triggers a display state change that you can track by adopting the [VZGraphicsDisplayObserver](../vzgraphicsdisplayobserver.md) protocol.

## See Also

### Changing the display configuration

- [reconfigureWithSizeInPixels:error:](reconfigure%28sizeinpixels_%29.md): Resize this display with the new dimensions you provide.
