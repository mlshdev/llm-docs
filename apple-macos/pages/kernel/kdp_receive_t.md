> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/kdp_receive_t](https://developer.apple.com/documentation/kernel/kdp_receive_t)

# kdp_receive_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.5+

## Declaration

```objectivec
typedef void (*kdp_receive_t)(void *pkt, unsigned int *pkt_len, unsigned int timeout);
```
