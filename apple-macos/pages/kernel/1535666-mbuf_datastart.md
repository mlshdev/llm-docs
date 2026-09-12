> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535666-mbuf_datastart](https://developer.apple.com/documentation/kernel/1535666-mbuf_datastart)

# mbuf_datastart

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void * mbuf_datastart(mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf.

<a id="return_value"></a>

## Return Value

A pointer to smallest possible value for data.

<a id="discussion"></a>

## Discussion

Returns the start of the space set aside for storing data in an mbuf. An mbuf's data may come from a cluster or be embedded in the mbuf structure itself. The data pointer retrieved by mbuf_data may not be at the start of the data (mbuf_leadingspace will be non-zero). This function will return a pointer that matches mbuf_data() - mbuf_leadingspace().
