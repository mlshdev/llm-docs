> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/mbuf_traffic_class_t](https://developer.apple.com/documentation/kernel/mbuf_traffic_class_t)

# mbuf_traffic_class_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Traffic class of a packet

## Declaration

```objectivec
typedef enum mbuf_traffic_class_t : unsigned int {
    ...
} mbuf_traffic_class_t;
```

<a id="overview"></a>

## Overview

Property that represent the category of traffic of a packet. This information may be used by the driver and at the link level.

## Topics

### Constants

- [MBUF_TC_BE](mbuf_traffic_class_t/mbuf_tc_be.md)
- [MBUF_TC_BK](mbuf_traffic_class_t/mbuf_tc_bk.md)
- [MBUF_TC_VI](mbuf_traffic_class_t/mbuf_tc_vi.md)
- [MBUF_TC_VO](mbuf_traffic_class_t/mbuf_tc_vo.md)
