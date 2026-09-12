> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkinterface/1503003-if_input_poll](https://developer.apple.com/documentation/kernel/ionetworkinterface/1503003-if_input_poll)

# if_input_poll

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void if_input_poll(ifnet_t ifp, uint32_t flags, uint32_t max_count, mbuf_t *first_packet, mbuf_t *last_packet, uint32_t *cnt, uint32_t *len);
```
