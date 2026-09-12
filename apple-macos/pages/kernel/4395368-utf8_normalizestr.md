> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4395368-utf8_normalizestr](https://developer.apple.com/documentation/kernel/4395368-utf8_normalizestr)

# utf8_normalizestr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
int utf8_normalizestr(const u_int8_t *instr, size_t inlen, u_int8_t *outstr, size_t *outlen, size_t buflen, int flags);
```
