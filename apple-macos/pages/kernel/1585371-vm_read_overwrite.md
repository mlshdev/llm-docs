> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1585371-vm_read_overwrite](https://developer.apple.com/documentation/kernel/1585371-vm_read_overwrite)

# vm_read_overwrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t vm_read_overwrite(vm_map_read_t target_task, vm_address_t address, vm_size_t size, vm_address_t data, vm_size_t *outsize);
```

## See Also

### Reads and Writes

- [vm_read](1585350-vm_read.md)
- [vm_read_list](1585516-vm_read_list.md)
- [vm_write](1585462-vm_write.md)
