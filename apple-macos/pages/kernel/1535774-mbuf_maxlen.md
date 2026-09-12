> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535774-mbuf_maxlen](https://developer.apple.com/documentation/kernel/1535774-mbuf_maxlen)

# mbuf_maxlen

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
size_t mbuf_maxlen(const mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf.

<a id="return_value"></a>

## Return Value

The maximum lenght of data for this mbuf.

<a id="discussion"></a>

## Discussion

Retrieves the maximum length of data that may be stored in this mbuf. This value assumes that the data pointer was set to the start of the possible range for that pointer (mbuf_data_start).
