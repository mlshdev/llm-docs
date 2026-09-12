> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535767-mbuf_leadingspace](https://developer.apple.com/documentation/kernel/1535767-mbuf_leadingspace)

# mbuf_leadingspace

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
size_t mbuf_leadingspace(const mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf.

<a id="return_value"></a>

## Return Value

The number of unused bytes at the start of the mbuf.

<a id="discussion"></a>

## Discussion

Determines the space available in the mbuf proceeding the current data.
