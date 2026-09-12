> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostinterface/setidletimeout(_:)](https://developer.apple.com/documentation/iousbhost/iousbhostinterface/setidletimeout(_:))

# setIdleTimeout(\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Sets the desired idle suspend timeout for the interface.

## Declaration

```swift
func setIdleTimeout(_ idleTimeout: TimeInterval) throws
```

## Parameters

- `idleTimeout`: The amount of time after all pipes are idle to wait before suspending the device.

<a id="Discussion"></a>

## Discussion

After the interface idles, it defers electrical suspension of the device for the specified duration.

## See Also

### Enabling Power Savings

- [idleTimeout](idletimeout.md): The current idle suspend timeout.

# setIdleTimeout:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Sets the desired idle suspend timeout for the interface.

## Declaration

```objectivec
- (BOOL) setIdleTimeout:(NSTimeInterval) idleTimeout error:(NSError **) error;
```

## Parameters

- `idleTimeout`: The amount of time after all pipes are idle to wait before suspending the device.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) in Objective-C that contains an [IOReturn](https://developer.apple.com/documentation/iokit/ioreturn) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

After the interface idles, it defers electrical suspension of the device for the specified duration.

## See Also

### Enabling Power Savings

- [idleTimeout](idletimeout.md): The current idle suspend timeout.
