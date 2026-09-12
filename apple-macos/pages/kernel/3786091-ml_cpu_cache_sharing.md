> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/3786091-ml_cpu_cache_sharing](https://developer.apple.com/documentation/kernel/3786091-ml_cpu_cache_sharing)

# ml_cpu_cache_sharing

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
unsigned int ml_cpu_cache_sharing(unsigned int level, cluster_type_t cluster_type, bool include_all_cpu_types);
```
