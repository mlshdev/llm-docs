> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1538454-upl_commit](https://developer.apple.com/documentation/kernel/1538454-upl_commit)

# upl_commit

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.1+

## Declaration

```objectivec
kern_return_t upl_commit(upl_t upl_object, upl_page_info_array_t page_list, mach_msg_type_number_t page_listCnt);
```
