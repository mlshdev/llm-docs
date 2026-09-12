> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1644526-anonymous/mbuf_csum_ip_good](https://developer.apple.com/documentation/kernel/1644526-anonymous/mbuf_csum_ip_good)

# MBUF_CSUM_IP_GOOD

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
MBUF_CSUM_IP_GOOD = 0x0200
```

<a id="discussion"></a>

## Discussion

Indicates whether or not the IP checksum was good or bad. Only valid when MBUF_CSUM_DID_IP is set.
