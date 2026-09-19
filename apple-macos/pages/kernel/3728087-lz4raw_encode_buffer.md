> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3728087-lz4raw_encode_buffer

# lz4raw_encode_buffer

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.3+

## Declaration

```objectivec
size_t lz4raw_encode_buffer(uint8_t *dst_buffer, size_t dst_size, const uint8_t *src_buffer, size_t src_size, lz4_hash_entry_t hash_table[1024]);
```
