> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535662-mbuf_pkthdr_header](https://developer.apple.com/documentation/kernel/1535662-mbuf_pkthdr_header)

# mbuf_pkthdr_header

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void * mbuf_pkthdr_header(const mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf containing the packet header.

<a id="return_value"></a>

## Return Value

A pointer to the packet header.

<a id="discussion"></a>

## Discussion

Returns a pointer to the packet header.
