> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535787-mbuf_freem_list](https://developer.apple.com/documentation/kernel/1535787-mbuf_freem_list)

# mbuf_freem_list

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
int mbuf_freem_list(mbuf_t mbuf);
```

## Parameters

- `mbuf`: The first mbuf in the linked list to free.

<a id="return_value"></a>

## Return Value

The number of mbufs freed.

<a id="discussion"></a>

## Discussion

Frees linked list of mbuf chains. Walks through mnextpackt and does the equivalent of mbuf_freem to each.
