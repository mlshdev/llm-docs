> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioeventsource/1810760-checkforwork](https://developer.apple.com/documentation/kernel/ioeventsource/1810760-checkforwork)

# checkForWork

**Interface language:** Objective-C

**Framework:** Kernel

Virtual member function used by IOWorkLoop for work scheduling.

## Declaration

```objectivec
virtual bool checkForWork(); 
```

<a id="return_value"></a>

## Return Value

Return true if this function needs to be called again before all its outstanding events have been processed.

<a id="overview"></a>

## Overview

This function will be called to request a subclass to check its internal state for any work to do and then to call out the owner/action. If this event source never performs any work (e.g. IOCommandGate), this method should not be overridden. NOTE: This method is no longer declared pure virtual. A default implementation is provided in IOEventSource.

## See Also

### Miscellaneous

- [disable](1810784-disable.md): Disable event source.
- [enable](1810807-enable.md): Enable event source.
- [getAction](1810828-getaction.md): Get'ter for $link action variable.
- [getNext](1810847-getnext.md): Get'ter for $link eventChainNext variable.
- [getWorkLoop](1810872-getworkloop.md): Get'ter for $link workLoop variable.
- [init](1810895-init.md): Primary initialiser for the IOEventSource class.
- [isEnabled](1810913-isenabled.md): Get'ter for $link enable variable.
- [onThread](1810935-onthread.md): Convenience function for workLoop-\>onThread.
- [setAction](1810952-setaction.md): Set'ter for $link action variable.
- [setNext](1810967-setnext.md): Set'ter for $link eventChainNext variable.
- [setWorkLoop](1810984-setworkloop.md): Set'ter for $link workLoop variable.
