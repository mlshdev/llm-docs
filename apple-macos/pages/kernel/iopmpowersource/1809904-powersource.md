> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmpowersource/1809904-powersource](https://developer.apple.com/documentation/kernel/iopmpowersource/1809904-powersource)

# powerSource

**Interface language:** Objective-C

**Framework:** Kernel

Creates a new IOPMPowerSource nub. Must be attached to IORegistry, and registered by provider.

## Declaration

```objectivec
static IOPMPowerSource *powerSource(
 void); 
```

## See Also

### Miscellaneous

- [setPSProperty](1809917-setpsproperty.md)
- [updateStatus](1809926-updatestatus.md): Must be called by physical battery controller when battery state has changed significantly.
