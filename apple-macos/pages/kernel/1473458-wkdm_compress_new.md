> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1473458-wkdm_compress_new](https://developer.apple.com/documentation/kernel/1473458-wkdm_compress_new)

# WKdm_compress_new

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
int WKdm_compress_new(const WK_word *src_buf, WK_word *dest_buf, WK_word *scratch, unsigned int limit);
```

## See Also

### Compression

- [WKdm_decompress_new](1473454-wkdm_decompress_new.md)
