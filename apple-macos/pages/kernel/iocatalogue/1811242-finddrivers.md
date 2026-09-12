> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocatalogue/1811242-finddrivers](https://developer.apple.com/documentation/kernel/iocatalogue/1811242-finddrivers)

# findDrivers(OSDictionary \*, SInt32 \*)

**Interface language:** Objective-C

**Framework:** Kernel

A more general purpose interface which allows one to retreive driver personalities based the intersection of the 'matching' dictionary and the personality's own property list.

## Declaration

```objectivec
OSOrderedSet * findDrivers(
 OSDictionary *matching,
 SInt32 *generationCount ); 
```

## Parameters

- `matching`: A dictionary containing only keys and values which are to be used for matching. For example, a matching dictionary containing 'IOProviderClass'='IOPCIDevice' will return all personalities with an IOProviderClass key and a value of IOPCIDevice.
- `generationCount`: Returns a reference to the current generation of the database. The generation count increases only when personalities are added to the database \*and\* IOService matching has been initiated.

<a id="return_value"></a>

## Return Value

Returns an ordered set of driver personalities ranked on probe-scores. The ordered set must be released by the receiver.

## See Also

### Miscellaneous

- [addDrivers](1811204-adddrivers.md): Adds an array of driver personalities to the database.
- [findDrivers(IOService \*, SInt32 \*)](1811225-finddrivers.md): This is the primary entry point for IOService.
- [free](1811255-free.md): Cleans up the database and deallocates memory allocated at initialization. This is never called in normal operation of the system.
- [getGenerationCount](1811265-getgenerationcount.md): Get the current generation count of the database.
- [init](1811279-init.md): Initializes the database object.
- [initialize](1811287-initialize.md): Creates and initializes the database object and poputates it with in-kernel driver personalities.
- [isModuleLoaded](1811295-ismoduleloaded.md): Reports if a kernel module has been loaded for a particular personality.
- [isModuleLoaded(const char \*)](1811303-ismoduleloaded.md): Reports if a kernel module has been loaded.
- [isModuleLoaded(OSString \*)](1811312-ismoduleloaded.md): Reports if a kernel module has been loaded.
- [moduleHasLoaded(const char \*)](1811319-modulehasloaded.md): Callback function called after a IOKit dependent kernel module is loaded.
- [moduleHasLoaded(OSString \*)](1811324-modulehasloaded.md): Callback function called after a IOKit dependent kernel module is loaded.
- [removeDrivers](1811332-removedrivers.md): Remove driver personalities from the database based on matching information provided.
- [reset](1811342-reset.md): Return the Catalogue to its initial state.
- [resetAndAddDrivers](1811349-resetandadddrivers.md): Replace personalities in IOCatalog with those provided.
- [serialize](1811365-serialize.md): Serializes the catalog for transport to the user.
- [startMatching](1811371-startmatching.md): Starts an IOService matching thread where matching keys and values are provided by the matching dictionary.
- [terminateDrivers](1811385-terminatedrivers.md): Terminates all instances of a driver which match the contents of the matching dictionary. Does not unload module.
- [terminateDriversForModule(const char \*, bool)](1811392-terminatedriversformodule.md): Terminates all instances of a driver which depends on a particular module and unloads the module.
- [terminateDriversForModule(OSString \*, bool)](1811401-terminatedriversformodule.md): Terminates all instances of a driver which depends on a particular module and unloads the module.
- [unloadModule](1811417-unloadmodule.md): Unloads the reqested module if no driver instances are currently depending on it.
