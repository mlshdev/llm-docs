> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomedia/1813495-getcontent](https://developer.apple.com/documentation/kernel/iomedia/1813495-getcontent)

# getContent

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual const char * getContent() const; 
```

<a id="return_value"></a>

## Return Value

Description of media's contents.

<a id="overview"></a>

## Overview

Ask the media object for a description of its contents. The description is the same as the hint at the time of the object's creation, but it is possible that the description has been overridden by a client (which has probed the media and identified the content correctly) of the media object. It is more accurate than the hint for this reason. The string is formed in the likeness of Apple's "Apple_HFS" strings or in the likeness of a UUID.

The content description can be overridden by any client that matches onto this media object with a match category of kIOStorageCategory. The media object checks for a kIOMediaContentMaskKey property in the client, and if it finds one, it copies it into kIOMediaContentKey property.

## See Also

### Miscellaneous

- [copyPhysicalExtent](1813424-copyphysicalextent.md)
- [getAttributes](1813444-getattributes.md)
- [getBase](1813468-getbase.md)
- [getContentHint](1813522-getcontenthint.md)
- [getPreferredBlockSize](1813553-getpreferredblocksize.md)
- [getSize](1813585-getsize.md)
- [handleClose](1813614-handleclose.md)
- [handleIsOpen](1813630-handleisopen.md)
- [handleOpen](1813647-handleopen.md)
- [init](1813657-init.md)
- [isEjectable](1813664-isejectable.md)
- [isFormatted](1813670-isformatted.md)
- [isWhole](1813677-iswhole.md)
- [isWritable](1813683-iswritable.md)
- [lockPhysicalExtents](1813689-lockphysicalextents.md)
- [read](1813696-read.md)
- [synchronizeCache](1813702-synchronizecache.md)
- [unlockPhysicalExtents](1813710-unlockphysicalextents.md)
- [unmap](1813719-unmap.md)
- [write](1813725-write.md)
