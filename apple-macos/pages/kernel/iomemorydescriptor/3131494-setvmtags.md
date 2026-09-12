> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/3131494-setvmtags](https://developer.apple.com/documentation/kernel/iomemorydescriptor/3131494-setvmtags)

# setVMTags

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
void setVMTags(uint32_t kernelTag, uint32_t userTag);
```

## See Also

### Accessing the Buffer's Tag

- [getTag](1812815-gettag.md): Accessor to the retrieve the tag for the memory descriptor.
- [getTag](1442070-gettag.md): Accessor to the retrieve the tag for the memory descriptor.
- [setTag](1812873-settag.md): Set the tag for the memory descriptor.
- [setTag](1441787-settag.md): Set the tag for the memory descriptor.
- [getVMTag](3131493-getvmtag.md)
