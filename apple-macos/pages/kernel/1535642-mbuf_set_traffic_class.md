> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535642-mbuf_set_traffic_class](https://developer.apple.com/documentation/kernel/1535642-mbuf_set_traffic_class)

# mbuf_set_traffic_class

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t mbuf_set_traffic_class(mbuf_t mbuf, mbuf_traffic_class_t tc);
```

## Parameters

- `mbuf`: The mbuf to set the traffic class on. @tc The traffic class

<a id="return_value"></a>

## Return Value

0 on success, EINVAL if bad parameter is passed

<a id="discussion"></a>

## Discussion

Set the traffic class of an mbuf packet.
