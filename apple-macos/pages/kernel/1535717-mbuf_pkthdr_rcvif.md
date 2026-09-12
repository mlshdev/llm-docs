> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535717-mbuf_pkthdr_rcvif](https://developer.apple.com/documentation/kernel/1535717-mbuf_pkthdr_rcvif)

# mbuf_pkthdr_rcvif

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
ifnet_t mbuf_pkthdr_rcvif(const mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf containing the packet header.

<a id="return_value"></a>

## Return Value

A reference to the interface.

<a id="discussion"></a>

## Discussion

Returns the interface the packet was received on. This funciton does not modify the reference count of the interface. The interface is only valid for as long as the mbuf is not freed and the rcvif for the mbuf is not changed. Take a reference on the interface that you will release later before doing any of the following: free the mbuf, change the rcvif, pass the mbuf to any function that may free the mbuf or change the rcvif.
