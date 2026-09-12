> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1575602-coreendianinstallflipper](https://developer.apple.com/documentation/coreservices/1575602-coreendianinstallflipper)

# CoreEndianInstallFlipper

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Installs a flipper callback for the specified data type.

## Declaration

```objectivec
OSStatus CoreEndianInstallFlipper(OSType dataDomain, OSType dataType, CoreEndianFlipProc proc, void *refcon);
```

## Parameters

- `dataDomain`: An `OSType` value that specifies the domain to which the flipper callback applies. Pass [kCoreEndianResourceManagerDomain](1575588-domain_types/kcoreendianresourcemanagerdomain.md)if your callback applies to resource data. Pass [kCoreEndianAppleEventManagerDomain](1575588-domain_types/kcoreendianappleeventmanagerdomain.md) if your callback applies to Apple event data. See [Domain Types](1575588-domain_types.md) for more information.
- `dataType`: An `OSType` value that specifies the type of data for which you want your flipper callback installed. This is the four character code of the resource type or Apple event.
- `proc`: A pointer to your flipper callback. The flipper callback is installed into a per-process table that is searched before the system table.
- `refCon`: A 32-bit value containing or referring to data needed by the callback.

<a id="return_value"></a>

## Return Value

A result code. Returns `noErr` ifyour flipper callback is installed.

<a id="discussion"></a>

## Discussion

You should install the callback by calling the function `CoreEndianInstallFlipper` when yourapplication calls its initialization routine or when you open yourresource file.

## See Also

### Working With Flippers

- [CoreEndianGetFlipper](1575564-coreendiangetflipper.md): Deprecated. Obtains the flipper callback that is installed for thespecified data type.
- [CoreEndianFlipData](1575610-coreendianflipdata.md): Deprecated. Calls the flipper callback associated with the specifieddata type.
