> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioeventsource/1810935-onthread](https://developer.apple.com/documentation/kernel/ioeventsource/1810935-onthread)

# onThread

**Interface language:** Objective-C

**Framework:** Kernel

Convenience function for workLoop-\>onThread.

## Declaration

```objectivec
virtual bool onThread() const; 
```

<a id="return_value"></a>

## Return Value

true if called on the work-loop thread.

## See Also

### Miscellaneous

- [checkForWork](1810760-checkforwork.md): Virtual member function used by IOWorkLoop for work scheduling.
- [disable](1810784-disable.md): Disable event source.
- [enable](1810807-enable.md): Enable event source.
- [getAction](1810828-getaction.md): Get'ter for $link action variable.
- [getNext](1810847-getnext.md): Get'ter for $link eventChainNext variable.
- [getWorkLoop](1810872-getworkloop.md): Get'ter for $link workLoop variable.
- [init](1810895-init.md): Primary initialiser for the IOEventSource class.
- [isEnabled](1810913-isenabled.md): Get'ter for $link enable variable.
- [setAction](1810952-setaction.md): Set'ter for $link action variable.
- [setNext](1810967-setnext.md): Set'ter for $link eventChainNext variable.
- [setWorkLoop](1810984-setworkloop.md): Set'ter for $link workLoop variable.
