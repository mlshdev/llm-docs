> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446239-aecreatedescfromexternalptr](https://developer.apple.com/documentation/coreservices/1446239-aecreatedescfromexternalptr)

# AECreateDescFromExternalPtr(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Creates a new descriptor that uses a memory buffer supplied by the caller.

## Declaration

```swift
func AECreateDescFromExternalPtr(_ descriptorType: OSType, _ dataPtr: UnsafeRawPointer!, _ dataLength: Size, _ disposeCallback: AEDisposeExternalUPP!, _ disposeRefcon: SRefCon!, _ theDesc: UnsafeMutablePointer<AEDesc>!) -> OSStatus
```

## Parameters

- `descriptorType`: The descriptor type for the new descriptor.
- `dataPtr`: A pointer to the data for the new descriptor. The memory that is pointed to cannot be a `Handle` (which may move in memory), cannot be modified by the caller, and must be preserved in place (and not freed), until the `disposeCallback` function is called.

  If possible, the descriptor will be mapped into the address space of the recipient using shared memory, avoiding an actual memory copy.

  The pointer that is passed in does not need to be aligned to any particular boundary, but is optimized to transfer data on a page boundary. You can get the current page size (4096 on all current macOS systems) with the `getpagesize(3)` call. (Type` man 3 getpagesize` in a Terminal window for documentation.)
- `dataLength`: The length, in bytes, of the data for the new descriptor.
- `disposeCallback`: A universal procedure pointer to a dispose callback function of type [AEDisposeExternalProcPtr](aedisposeexternalprocptr.md). Your callback function will be called when the block of memory provided by `dataPtr` is no longer needed by the Apple Event Manager. The function can be called at any time, including during creation of the descriptor.
- `disposeRefcon`: A reference constant the Apple Event Manager passes to the `disposeCallback` function whenever it calls the function. If your dispose function doesn’t require a reference constant, pass 0 for this parameter.
- `theDesc`: A pointer to a descriptor. On successful return, a descriptor that incorporates the data specified by the `dataPtr` parameter. On error, a null descriptor. If the function returns successfully, your application should call the [AEDisposeDesc(\_:)](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

This function is different than [AECreateDesc(\_:\_:\_:\_:)](1448535-aecreatedesc.md), in that it creates a descriptor that uses the data block provided by the caller “in place,” rather than allocate a block of memory and copy the data to it. This function can provide dramatically improved performance if you’re working with large chunks of data. It attempts to copy the descriptor to the address space of any recipient process using virtual memory APIs, avoiding an actual memory copy. For example, you might want to use this function to pass a large image in an Apple event.

You can use the [AEGetDescDataRange(\_:\_:\_:\_:)](1446560-aegetdescdatarange.md) function to access a specific section of a large block of data.

<a id="1770173"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Creating and Duplicating Descriptors

- [AECreateDesc(\_:\_:\_:\_:)](1448535-aecreatedesc.md): Creates a new descriptor that incorporates the specified data.
- [AEDuplicateDesc(\_:\_:)](1442661-aeduplicatedesc.md): Creates a copy of a descriptor.

# AECreateDescFromExternalPtr (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Creates a new descriptor that uses a memory buffer supplied by the caller.

## Declaration

```objectivec
OSStatus AECreateDescFromExternalPtr(OSType descriptorType, const void *dataPtr, Size dataLength, AEDisposeExternalUPP disposeCallback, SRefCon disposeRefcon, AEDesc *theDesc);
```

## Parameters

- `descriptorType`: The descriptor type for the new descriptor.
- `dataPtr`: A pointer to the data for the new descriptor. The memory that is pointed to cannot be a `Handle` (which may move in memory), cannot be modified by the caller, and must be preserved in place (and not freed), until the `disposeCallback` function is called.

  If possible, the descriptor will be mapped into the address space of the recipient using shared memory, avoiding an actual memory copy.

  The pointer that is passed in does not need to be aligned to any particular boundary, but is optimized to transfer data on a page boundary. You can get the current page size (4096 on all current macOS systems) with the `getpagesize(3)` call. (Type` man 3 getpagesize` in a Terminal window for documentation.)
- `dataLength`: The length, in bytes, of the data for the new descriptor.
- `disposeCallback`: A universal procedure pointer to a dispose callback function of type [AEDisposeExternalProcPtr](aedisposeexternalprocptr.md). Your callback function will be called when the block of memory provided by `dataPtr` is no longer needed by the Apple Event Manager. The function can be called at any time, including during creation of the descriptor.
- `disposeRefcon`: A reference constant the Apple Event Manager passes to the `disposeCallback` function whenever it calls the function. If your dispose function doesn’t require a reference constant, pass 0 for this parameter.
- `theDesc`: A pointer to a descriptor. On successful return, a descriptor that incorporates the data specified by the `dataPtr` parameter. On error, a null descriptor. If the function returns successfully, your application should call the [AEDisposeDesc](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

This function is different than [AECreateDesc](1448535-aecreatedesc.md), in that it creates a descriptor that uses the data block provided by the caller “in place,” rather than allocate a block of memory and copy the data to it. This function can provide dramatically improved performance if you’re working with large chunks of data. It attempts to copy the descriptor to the address space of any recipient process using virtual memory APIs, avoiding an actual memory copy. For example, you might want to use this function to pass a large image in an Apple event.

You can use the [AEGetDescDataRange](1446560-aegetdescdatarange.md) function to access a specific section of a large block of data.

<a id="1770173"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Creating and Duplicating Descriptors

- [AECreateDesc](1448535-aecreatedesc.md): Creates a new descriptor that incorporates the specified data.
- [AEDuplicateDesc](1442661-aeduplicatedesc.md): Creates a copy of a descriptor.
