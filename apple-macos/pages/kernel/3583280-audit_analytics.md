> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3583280-audit_analytics](https://developer.apple.com/documentation/kernel/3583280-audit_analytics)

# audit_analytics

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
kern_return_t audit_analytics(mach_port_t audit_port, string_t caller_id, string_t caller_name);
```
