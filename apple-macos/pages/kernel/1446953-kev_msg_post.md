> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1446953-kev_msg_post](https://developer.apple.com/documentation/kernel/1446953-kev_msg_post)

# kev_msg_post

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.9+

## Declaration

```objectivec
errno_t kev_msg_post(struct kev_msg *event_msg);
```

## Parameters

- `event_msg`: A structure defining the kernel event message to post.

<a id="return_value"></a>

## Return Value

Will return zero upon success. May return a number of errors depending on the type of failure. EINVAL indicates that there was something wrong with the kerne event. The vendor code of the kernel event must be assigned using kev_vendor_code_find. If the message is too large, EMSGSIZE will be returned.

<a id="discussion"></a>

## Discussion

Post a kernel event message.
