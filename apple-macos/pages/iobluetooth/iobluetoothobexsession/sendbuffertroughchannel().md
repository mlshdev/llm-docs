> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothobexsession/sendbuffertroughchannel()](https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/sendbuffertroughchannel())

# sendBufferTroughChannel() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sends the next block of data through the rfcomm channel.

## Declaration

```swift
func sendBufferTroughChannel() -> IOReturn
```

<a id="Discussion"></a>

## Discussion

Since a send in the rfcomm channel is broken in multiple write calls (this actually is true only if the size is grater than the rfcomm MTU). Each write call is performed by sendBufferTroughChannel. This should never need to be overwritten.

# sendBufferTroughChannel (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sends the next block of data through the rfcomm channel.

## Declaration

```objectivec
- (IOReturn) sendBufferTroughChannel;
```

<a id="Discussion"></a>

## Discussion

Since a send in the rfcomm channel is broken in multiple write calls (this actually is true only if the size is grater than the rfcomm MTU). Each write call is performed by sendBufferTroughChannel. This should never need to be overwritten.
