> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535787-mbuf_freem_list

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
