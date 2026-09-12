> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelocalunitdirectoryinterface/1555668-unpublish](https://developer.apple.com/documentation/iokit/iofirewirelocalunitdirectoryinterface/1555668-unpublish)

# Unpublish

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Has the opposite effect from Publish(). This call removes a unit directory from the local machine's config ROM. Note that this call will cause a bus reset, after which the unit directory will no longer appear to devices on the bus.

## Declaration

```objectivec
IOReturn (*Unpublish)(IOFireWireLibLocalUnitDirectoryRef self);
```

## Parameters

- `self`: The local unit directory interface to use.

## See Also

### Miscellaneous

- [AddEntry_FWAddress](1555793-addentry_fwaddress.md): Append an offset leaf
- [AddEntry_Ptr](1555944-addentry_ptr.md): Append a data leaf
- [AddEntry_UInt32](1555917-addentry_uint32.md): Append an immediate leaf
- [Publish](1555590-publish.md): Causes a constructed or updated unit directory to appear in the local machine's config ROM. Note that this call will cause a bus reset, after which the unit directory will be visible to devices on the bus.
