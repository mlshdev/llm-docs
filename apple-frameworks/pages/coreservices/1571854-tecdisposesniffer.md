> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571854-tecdisposesniffer](https://developer.apple.com/documentation/coreservices/1571854-tecdisposesniffer)

# TECDisposeSniffer

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Disposes of a sniffer object.

## Declaration

```objectivec
OSStatus TECDisposeSniffer(TECSnifferObjectRef encodingSniffer);
```

## Parameters

- `encodingSniffer`: The sniffer object reference you want to remove.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

This function releases all memory allocated to the snifferobject created by the  [TECCreateSniffer](1571832-teccreatesniffer.md) function.

## See Also

### Using Sniffers to Investigate Encodings

- [TECCreateSniffer](1571832-teccreatesniffer.md): Creates a sniffer object and returns a reference to it.
- [TECClearSnifferContextInfo](1571850-tecclearsniffercontextinfo.md): Resets a sniffer object to its initial settings so youcan reuse it.
- [TECCountAvailableSniffers](1571795-teccountavailablesniffers.md): Counts and returns the number of sniffers available inall installed plug-ins.
- [TECGetAvailableSniffers](1571841-tecgetavailablesniffers.md): Returns the list of sniffers available in all installedplug-ins.
- [TECSniffTextEncoding](1571836-tecsnifftextencoding.md): Analyzes a text stream and returns the probable encodingsin a ranked list, based on an array of possible encodings you supply.It also returns the number of errors and features for each encoding.
