> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1538509-upl_commit_range

# upl_commit_range

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.1+

## Declaration

```objectivec
kern_return_t upl_commit_range(upl_t upl_object, upl_offset_t offset, upl_size_t size, integer_t cntrl_flags, upl_page_info_array_t page_list, mach_msg_type_number_t page_listCnt, boolean_t *empty);
```
