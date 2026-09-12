> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioi2cbustiming/1410318-bittimeout](https://developer.apple.com/documentation/iokit/ioi2cbustiming/1410318-bittimeout)

# bitTimeout

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Maximum time a client can delay (by pulling the clock line low) a single bit response.

## Declaration

```objectivec
AbsoluteTime bitTimeout;
```

## See Also

### Fields

- [byteTimeout](1410362-bytetimeout.md): Maximum time a client can delay (by pulling the clock line low) the first bit of a byte response.
- [acknowledgeTimeout](1410369-acknowledgetimeout.md): Maximum time to wait for a client to respond with an ACK after writing a byte.
- [startTimeout](1410316-starttimeout.md): Maximum time to wait for a client to respond after a start signal.
- [riseFallTime](1410322-risefalltime.md): Time to wait after any change in output signal.
- [\__reservedA](../ioi2cinterface_h_user-space/ioi2cbustiming/1812622-_reserveda.md): Set to zero.
