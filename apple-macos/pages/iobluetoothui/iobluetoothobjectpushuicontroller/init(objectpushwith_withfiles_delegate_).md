> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothobjectpushuicontroller/init(objectpushwith:withfiles:delegate:)](https://developer.apple.com/documentation/iobluetoothui/iobluetoothobjectpushuicontroller/init(objectpushwith:withfiles:delegate:))

# init(objectPushWith:withFiles:delegate:) (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Initializer  
**Availability:** macOS 10.2+

Creates and returns a new IOBluetoothObjectPush object

## Declaration

```swift
init!(objectPushWith inDevice: IOBluetoothDevice!, withFiles inFiles: [Any]!, delegate inDelegate: Any!)
```

## Parameters

- `inDevice`: The remote device to send the files to
- `inFiles`: An array of file paths to send
- `inDelegate`: A delegate object that implements the single method above. If no delegate is specified this object will release itself when the transaction is complete.

<a id="Discussion"></a>

## Discussion

The event delegate should implement a single delegate method:

- (void) objectPushComplete: (IOBluetoothObjectPushUIController\*) inPusher

The method will be called when the transaction is complete and should be used to release the push object by the delegate. If no delegate is set the object will release itself when the transfer is finished.

# initObjectPushWithBluetoothDevice:withFiles:delegate: (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Creates and returns a new IOBluetoothObjectPush object

## Declaration

```objectivec
- (IOBluetoothObjectPushUIController *) initObjectPushWithBluetoothDevice:(IOBluetoothDevice *) inDevice withFiles:(NSArray *) inFiles delegate:(id) inDelegate;
```

## Parameters

- `inDevice`: The remote device to send the files to
- `inFiles`: An array of file paths to send
- `inDelegate`: A delegate object that implements the single method above. If no delegate is specified this object will release itself when the transaction is complete.

<a id="Discussion"></a>

## Discussion

The event delegate should implement a single delegate method:

- (void) objectPushComplete: (IOBluetoothObjectPushUIController\*) inPusher

The method will be called when the transaction is complete and should be used to release the push object by the delegate. If no delegate is set the object will release itself when the transfer is finished.
