> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/4395365-utf8_decodestr](https://developer.apple.com/documentation/kernel/4395365-utf8_decodestr)

# utf8_decodestr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 15.0+

## Declaration

```objectivec
int utf8_decodestr(const u_int8_t *utf8p, size_t utf8len, u_int16_t *ucsp, size_t *ucslen, size_t buflen, u_int16_t altslash, int flags);
```
