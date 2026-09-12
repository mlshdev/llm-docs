> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice/placeallothers(onhold:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/placeallothers(onhold:))

# placeAllOthers(onHold:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Places all calls except the call with the specified index on hold.

## Declaration

```swift
func placeAllOthers(onHold index: Int32)
```

## Parameters

- `index`: The index of the call that remains active.

## See Also

### Holding Calls

- [holdCall()](holdcall%28%29.md): Places all active calls on hold and accepts a held or waiting call.
- [addHeldCall()](addheldcall%28%29.md): Adds held calls to the current conversation.

# placeAllOthersOnHold: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Places all calls except the call with the specified index on hold.

## Declaration

```objectivec
- (void) placeAllOthersOnHold:(int) index;
```

## Parameters

- `index`: The index of the call that remains active.

## See Also

### Holding Calls

- [holdCall](holdcall%28%29.md): Places all active calls on hold and accepts a held or waiting call.
- [addHeldCall](addheldcall%28%29.md): Adds held calls to the current conversation.
