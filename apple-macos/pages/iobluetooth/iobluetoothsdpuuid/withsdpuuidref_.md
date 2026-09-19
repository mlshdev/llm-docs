> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/withsdpuuidref:

# withSDPUUIDRef:

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Method call to convert an IOBluetoothSDPUUIDRef into an IOBluetoothSDPUUID \*.

## Declaration

```objectivec
+ (instancetype) withSDPUUIDRef:(IOBluetoothSDPUUIDRef) sdpUUIDRef;
```

## Parameters

- `sdpUUIDRef`: IOBluetoothSDPUUIDRef for which an IOBluetoothSDPUUID \* is desired.

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothSDPUUID \* for the given IOBluetoothSDPUUIDRef.
