> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535785-mbuf_flags](https://developer.apple.com/documentation/kernel/1535785-mbuf_flags)

# mbuf_flags

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
mbuf_flags_t mbuf_flags(const mbuf_t mbuf);
```

## Parameters

- `mbuf`: The mbuf.

<a id="return_value"></a>

## Return Value

The flags.

<a id="discussion"></a>

## Discussion

Returns the set flags.
