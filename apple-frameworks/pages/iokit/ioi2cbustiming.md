> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioi2cbustiming](https://developer.apple.com/documentation/iokit/ioi2cbustiming)

# IOI2CBusTiming

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
typedef struct IOI2CBusTiming {
    ...
} IOI2CBusTiming;
```

## Topics

### Instance Properties

- [acknowledgeTimeout](ioi2cbustiming/1410369-acknowledgetimeout.md): Maximum time to wait for a client to respond with an ACK after writing a byte.
- [bitTimeout](ioi2cbustiming/1410318-bittimeout.md): Maximum time a client can delay (by pulling the clock line low) a single bit response.
- [byteTimeout](ioi2cbustiming/1410362-bytetimeout.md): Maximum time a client can delay (by pulling the clock line low) the first bit of a byte response.
- [holdTime](ioi2cbustiming/1410335-holdtime.md)
- [riseFallTime](ioi2cbustiming/1410322-risefalltime.md): Time to wait after any change in output signal.
- [startTimeout](ioi2cbustiming/1410316-starttimeout.md): Maximum time to wait for a client to respond after a start signal.
