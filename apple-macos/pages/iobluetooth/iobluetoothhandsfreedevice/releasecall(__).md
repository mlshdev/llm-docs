> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice/releasecall(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/releasecall(_:))

# releaseCall(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Ends the call with the specified index.

## Declaration

```swift
func releaseCall(_ index: Int32)
```

## Parameters

- `index`: The index of the call to end.

## See Also

### Ending Calls

- [endCall()](endcall%28%29.md): Ends the current call or refuses an incoming call.
- [releaseActiveCalls()](releaseactivecalls%28%29.md): Ends all active calls and accepts a held or waiting call.
- [releaseHeldCalls()](releaseheldcalls%28%29.md): Ends all calls that are on hold or returns a busy signal for a waiting call.

# releaseCall: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Ends the call with the specified index.

## Declaration

```objectivec
- (void) releaseCall:(int) index;
```

## Parameters

- `index`: The index of the call to end.

## See Also

### Ending Calls

- [endCall](endcall%28%29.md): Ends the current call or refuses an incoming call.
- [releaseActiveCalls](releaseactivecalls%28%29.md): Ends all active calls and accepts a held or waiting call.
- [releaseHeldCalls](releaseheldcalls%28%29.md): Ends all calls that are on hold or returns a busy signal for a waiting call.
