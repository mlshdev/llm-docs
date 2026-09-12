> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwpseudoaddressspaceaux/1812922-setarxreqintcompletehandler](https://developer.apple.com/documentation/kernel/iofwpseudoaddressspaceaux/1812922-setarxreqintcompletehandler)

# setARxReqIntCompleteHandler

**Interface language:** Objective-C

**Framework:** Kernel

Installs a callback to receive notification, when FWIM has completed ARxReqInt processing and no incoming packets are left in the queue.

## Declaration

```objectivec
virtual void setARxReqIntCompleteHandler(
 void *refcon,
 IOFWARxReqIntCompleteHandlerhandler ); 
```

## Parameters

- `refcon`: Client's callback object.
- `handler`: Client callback to be invoked, at the end of interrupt processing.

<a id="return_value"></a>

## Return Value

none.
