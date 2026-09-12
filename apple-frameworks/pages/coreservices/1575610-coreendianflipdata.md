> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1575610-coreendianflipdata](https://developer.apple.com/documentation/coreservices/1575610-coreendianflipdata)

# CoreEndianFlipData

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Calls the flipper callback associated with the specifieddata type.

## Declaration

```objectivec
OSStatus CoreEndianFlipData(OSType dataDomain, OSType dataType, SInt16 id, void *data, ByteCount dataLen, Boolean currentlyNative);
```

## Parameters

- `dataDomain`: An `OSType` value that specifies the domain of the flipper callback you want to invoke. Pass [kCoreEndianResourceManagerDomain](1575588-domain_types/kcoreendianresourcemanagerdomain.md)	if your callback applies to resource data. Pass [kCoreEndianAppleEventManagerDomain](1575588-domain_types/kcoreendianappleeventmanagerdomain.md) if your callback applies to Apple event data. See [Domain Types](1575588-domain_types.md) for more information.
- `dataType`: An `OSType` value that specifies the type of data that needs to be byte-swapped. This is the four character code of the resource type or Apple event. This never needs to be byte-swapped even though GDB and Xcode display the resource in byte-swapped order.
- `id`: The resource ID of the data type. The Resource Manager byte-swaps this for you so you can compare the resource ID against constants in your code. If the data is not a resource, pass `0`.
- `data`: A pointer to the first byte of the data to be byte swapped.
- `dataLen`: The length of the data (in bytes) to be byte swapped.
- `currentlyNative`: A Boolean value that indicates the direction to byte swap. Pass `true` when the data specified by the `data` parameter uses the byte ordering of the currently executing code. On a PowerPC system, `true` specifies that the data is in big-endian format. On an x86 system, `true` specifies that the data is in little-endian format.

<a id="return_value"></a>

## Return Value

A result code. Returns `noErr` ifthe data is byte swapped and `handlerNotFound` ifthe data is not byte swapped. Note that data is only byte swappedif it needs to be byte swapped.

## See Also

### Working With Flippers

- [CoreEndianInstallFlipper](1575602-coreendianinstallflipper.md): Deprecated. Installs a flipper callback for the specified data type.
- [CoreEndianGetFlipper](1575564-coreendiangetflipper.md): Deprecated. Obtains the flipper callback that is installed for thespecified data type.
