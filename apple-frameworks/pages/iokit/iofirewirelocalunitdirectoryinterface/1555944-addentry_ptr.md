> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelocalunitdirectoryinterface/1555944-addentry_ptr](https://developer.apple.com/documentation/iokit/iofirewirelocalunitdirectoryinterface/1555944-addentry_ptr)

# AddEntry_Ptr

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Append a data leaf

## Declaration

```objectivec
IOReturn (*AddEntry_Ptr)(IOFireWireLibLocalUnitDirectoryRef self, int key, void *inBuffer, size_t inLen, CFStringRef inDesc);
```

## Parameters

- `self`: The local unit directory interface to use.
- `key`: The config ROM key for the data to be added.
- `inBuffer`: A pointer to the data to be placed in the added leaf.
- `inLen`: Length of the data being added.
- `inDesc`: Reserved; set to NULL.

<a id="discussion"></a>

## Discussion

Appends a leaf data node to a unit directory

## See Also

### Miscellaneous

- [AddEntry_FWAddress](1555793-addentry_fwaddress.md): Append an offset leaf
- [AddEntry_UInt32](1555917-addentry_uint32.md): Append an immediate leaf
- [Publish](1555590-publish.md): Causes a constructed or updated unit directory to appear in the local machine's config ROM. Note that this call will cause a bus reset, after which the unit directory will be visible to devices on the bus.
- [Unpublish](1555668-unpublish.md): Has the opposite effect from Publish(). This call removes a unit directory from the local machine's config ROM. Note that this call will cause a bus reset, after which the unit directory will no longer appear to devices on the bus.
