> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel/close()](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/close())

# close() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initiates the close process on an open L2CAP channel.

## Declaration

```swift
func close() -> IOReturn
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess on success.

<a id="Discussion"></a>

## Discussion

This method may only be called by the client that opened the channel in the first place. In the future asynchronous and synchronous versions will be provided that let the client know when the close process has been finished.

# closeChannel (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initiates the close process on an open L2CAP channel.

## Declaration

```objectivec
- (IOReturn) closeChannel;
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess on success.

<a id="Discussion"></a>

## Discussion

This method may only be called by the client that opened the channel in the first place. In the future asynchronous and synchronous versions will be provided that let the client know when the close process has been finished.
