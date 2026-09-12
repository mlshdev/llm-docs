> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireconfigdirectoryinterface/1555633-getsubdirectories](https://developer.apple.com/documentation/iokit/iofirewireconfigdirectoryinterface/1555633-getsubdirectories)

# GetSubdirectories

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
IOReturn (*GetSubdirectories)(IOFireWireLibConfigDirectoryRef self, io_iterator_t *outIterator);
```

<a id="discussion"></a>

## Discussion

Description forthcoming

## See Also

### Miscellaneous

- [GetIndexEntry](1556035-getindexentry.md)
- [GetIndexKey](1555943-getindexkey.md)
- [GetIndexOffset_FWAddress](1555606-getindexoffset_fwaddress.md)
- [GetIndexOffset_UInt32](1556063-getindexoffset_uint32.md)
- [GetIndexType](1555964-getindextype.md)
- [GetIndexValue_ConfigDirectory](1556050-getindexvalue_configdirectory.md)
- [GetIndexValue_Data](1555603-getindexvalue_data.md)
- [GetIndexValue_String](1555859-getindexvalue_string.md)
- [GetIndexValue_UInt32](1555598-getindexvalue_uint32.md)
- [GetKeyOffset_FWAddress](1555952-getkeyoffset_fwaddress.md)
- [GetKeySubdirectories](1555612-getkeysubdirectories.md)
- [GetKeyType](1556099-getkeytype.md)
- [GetKeyValue_ConfigDirectory](1555984-getkeyvalue_configdirectory.md)
- [GetKeyValue_Data](1555838-getkeyvalue_data.md)
- [GetKeyValue_UInt32](1555586-getkeyvalue_uint32.md)
- [GetNumEntries](1555899-getnumentries.md)
- [GetType](1556044-gettype.md)
- [Update](1555972-update.md): Causes the ROM data to be updated through the specified byte offset. This function should not be called in normal usage.
