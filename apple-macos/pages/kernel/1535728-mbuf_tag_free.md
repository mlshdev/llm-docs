> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535728-mbuf_tag_free](https://developer.apple.com/documentation/kernel/1535728-mbuf_tag_free)

# mbuf_tag_free

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void mbuf_tag_free(mbuf_t mbuf, mbuf_tag_id_t module_id, mbuf_tag_type_t type);
```

## Parameters

- `mbuf`: The mbuf the tag was allocated on.
- `module_id`: The ID of the tag to free.
- `type`: The type of the tag to free.

<a id="discussion"></a>

## Discussion

Frees a previously allocated mbuf tag.
