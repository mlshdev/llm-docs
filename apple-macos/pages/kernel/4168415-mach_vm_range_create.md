> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4168415-mach_vm_range_create

# mach_vm_range_create

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 14.0+

## Declaration

```objectivec
kern_return_t mach_vm_range_create(vm_map_t target_task, mach_vm_range_flavor_t flavor, mach_vm_range_recipes_raw_t recipes, mach_msg_type_number_t recipesCnt);
```
