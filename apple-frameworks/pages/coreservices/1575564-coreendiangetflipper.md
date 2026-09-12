> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1575564-coreendiangetflipper](https://developer.apple.com/documentation/coreservices/1575564-coreendiangetflipper)

# CoreEndianGetFlipper

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Obtains the flipper callback that is installed for thespecified data type.

## Declaration

```objectivec
OSStatus CoreEndianGetFlipper(OSType dataDomain, OSType dataType, CoreEndianFlipProc *proc, void **refcon);
```

## Parameters

- `dataDomain`: An `OSType` value that specifies the domain of the flipper callback you want to obtain. Pass [kCoreEndianResourceManagerDomain](1575588-domain_types/kcoreendianresourcemanagerdomain.md)	to obtain a callback that applies to resource data. Pass [kCoreEndianAppleEventManagerDomain](1575588-domain_types/kcoreendianappleeventmanagerdomain.md) to obtain a callback that applies to Apple event data. See [Domain Types](1575588-domain_types.md) for more information.
- `dataType`: An `OSType` value that specifies the type of data associated with the flipper callback you want to obtain. This is the four character code of the resource type or Apple event. This never needs to be byte-swapped even though GDB and Xcode display the resource in byte-swapped order.
- `proc`: On output, points to the flipper callback that is installed for the data type specified by the `dataType` parameter.
- `refCon`: On output, points to a 32-bit value that references callback-specific data.

<a id="return_value"></a>

## Return Value

A result code. Returns `noErr` ifthe flipper callback is found.

<a id="discussion"></a>

## Discussion

You can call the function `CoreEndianGetFlipper` todetermine whether a flipper for a given data type is available.

## See Also

### Working With Flippers

- [CoreEndianInstallFlipper](1575602-coreendianinstallflipper.md): Deprecated. Installs a flipper callback for the specified data type.
- [CoreEndianFlipData](1575610-coreendianflipdata.md): Deprecated. Calls the flipper callback associated with the specifieddata type.
