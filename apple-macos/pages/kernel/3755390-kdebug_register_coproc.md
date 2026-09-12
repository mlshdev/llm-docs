> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3755390-kdebug_register_coproc](https://developer.apple.com/documentation/kernel/3755390-kdebug_register_coproc)

# kdebug_register_coproc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
int kdebug_register_coproc(const char *name, kdebug_coproc_flags_t flags, kd_callback_fn callback, void *context);
```
