> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice/releaseheldcalls()](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/releaseheldcalls())

# releaseHeldCalls() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Ends all calls that are on hold or returns a busy signal for a waiting call.

## Declaration

```swift
func releaseHeldCalls()
```

## See Also

### Ending Calls

- [endCall()](endcall%28%29.md): Ends the current call or refuses an incoming call.
- [releaseCall(\_:)](releasecall%28__%29.md): Ends the call with the specified index.
- [releaseActiveCalls()](releaseactivecalls%28%29.md): Ends all active calls and accepts a held or waiting call.

# releaseHeldCalls (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Ends all calls that are on hold or returns a busy signal for a waiting call.

## Declaration

```objectivec
- (void) releaseHeldCalls;
```

## See Also

### Ending Calls

- [endCall](endcall%28%29.md): Ends the current call or refuses an incoming call.
- [releaseCall:](releasecall%28__%29.md): Ends the call with the specified index.
- [releaseActiveCalls](releaseactivecalls%28%29.md): Ends all active calls and accepts a held or waiting call.
