> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535633-mbuf_nextpkt](https://developer.apple.com/documentation/kernel/1535633-mbuf_nextpkt)

# mbuf_nextpkt

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
mbuf_t mbuf_nextpkt(const mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf.

<a id="return_value"></a>

## Return Value

The nextpkt.

<a id="discussion"></a>

## Discussion

Gets the next packet from the mbuf.
