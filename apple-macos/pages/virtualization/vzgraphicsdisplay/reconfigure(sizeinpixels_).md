> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgraphicsdisplay/reconfigure(sizeinpixels:)](https://developer.apple.com/documentation/virtualization/vzgraphicsdisplay/reconfigure(sizeinpixels:))

# reconfigure(sizeInPixels:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Resize this display with the new dimensions you provide.

## Declaration

```swift
func reconfigure(sizeInPixels: CGSize) throws
```

## Parameters

- `sizeInPixels`: The new display width and height in pixels.

<a id="Discussion"></a>

## Discussion

If successful, the framework passes the new size to the guest but the guest may or may not respond to the new size. If the guest doesn’t use the new size, the Virtualization framework doesn’t return an error.

Resizing the display triggers a display state change that you can track by adopting the [VZGraphicsDisplayObserver](../vzgraphicsdisplayobserver.md) protocol.

## See Also

### Changing the display configuration

- [reconfigure(configuration:)](reconfigure%28configuration_%29.md): Reconfigure this display with the new display configuration you provide.

# reconfigureWithSizeInPixels:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Resize this display with the new dimensions you provide.

## Declaration

```objectivec
- (BOOL) reconfigureWithSizeInPixels:(CGSize) sizeInPixels error:(NSError **) error;
```

## Parameters

- `sizeInPixels`: The new display width and height in pixels.
- `error`: When you call this method from Objective-C, it returns `nil` if the reconfiguration was successful or the framework assigns an error object that describes why the new configuration isn’t valid.

<a id="return-value"></a>

## Return Value

When you call this method from Objective-C, it returns [true](https://developer.apple.com/documentation/swift/true) if the reconfiguration was successful, [false](https://developer.apple.com/documentation/swift/false) otherwise

<a id="Discussion"></a>

## Discussion

If successful, the framework passes the new size to the guest but the guest may or may not respond to the new size. If the guest doesn’t use the new size, the Virtualization framework doesn’t return an error.

Resizing the display triggers a display state change that you can track by adopting the [VZGraphicsDisplayObserver](../vzgraphicsdisplayobserver.md) protocol.

## See Also

### Changing the display configuration

- [reconfigureWithConfiguration:error:](reconfigure%28configuration_%29.md): Reconfigure this display with the new display configuration you provide.
