> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/idletimeout](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/idletimeout)

# idleTimeout (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

A property that retrieves the current idle suspend timeout.

## Declaration

```swift
var idleTimeout: TimeInterval { get }
```

<a id="return-value"></a>

## Return Value

The amount of time after all pipes are idle to wait before suspending the device.

## See Also

### Enabling Power Savings

- [setIdleTimeout(\_:)](setidletimeout%28__%29.md): Sets the desired idle suspend timeout for the interface.

# idleTimeout (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

A property that retrieves the current idle suspend timeout.

## Declaration

```objectivec
@property (readonly) NSTimeInterval idleTimeout;
```

<a id="return-value"></a>

## Return Value

The amount of time after all pipes are idle to wait before suspending the device.

## See Also

### Enabling Power Savings

- [setIdleTimeout:error:](setidletimeout%28__%29.md): Sets the desired idle suspend timeout for the interface.
