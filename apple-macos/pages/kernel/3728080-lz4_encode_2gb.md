> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3728080-lz4_encode_2gb

# lz4_encode_2gb

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.3+

## Declaration

```objectivec
void lz4_encode_2gb(uint8_t **dst_ptr, size_t dst_size, const uint8_t **src_ptr, const uint8_t *src_begin, size_t src_size, lz4_hash_entry_t hash_table[1024], int skip_final_literals);
```
