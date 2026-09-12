> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1585516-vm_read_list](https://developer.apple.com/documentation/kernel/1585516-vm_read_list)

# vm_read_list

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t vm_read_list(vm_map_read_t target_task, vm_read_entry_t data_list, natural_t count);
```

## See Also

### Reads and Writes

- [vm_read](1585350-vm_read.md)
- [vm_read_overwrite](1585371-vm_read_overwrite.md)
- [vm_write](1585462-vm_write.md)
