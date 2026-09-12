> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquiry/start()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/start())

# start() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Tells inquiry object to begin the inquiry and name updating process, if specified.

## Declaration

```swift
func start() -> IOReturn
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if start was successful. Returns kIOReturnBusy if the object is already in process. May return other IOReturn values, as appropriate.

<a id="Discussion"></a>

## Discussion

Calling start multiple times in rapid succession or back-to-back will probably not produce the intended results. Inquiries are throttled if they are called too quickly in succession.

# start (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Tells inquiry object to begin the inquiry and name updating process, if specified.

## Declaration

```objectivec
- (IOReturn) start;
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if start was successful. Returns kIOReturnBusy if the object is already in process. May return other IOReturn values, as appropriate.

<a id="Discussion"></a>

## Discussion

Calling start multiple times in rapid succession or back-to-back will probably not produce the intended results. Inquiries are throttled if they are called too quickly in succession.
