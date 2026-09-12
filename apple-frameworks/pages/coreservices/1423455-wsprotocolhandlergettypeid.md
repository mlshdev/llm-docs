> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1423455-wsprotocolhandlergettypeid](https://developer.apple.com/documentation/coreservices/1423455-wsprotocolhandlergettypeid)

# WSProtocolHandlerGetTypeID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Returns a `CFTypeID` for the current `WSProtocolHandlerRef`.

## Declaration

```objectivec
CFTypeID WSProtocolHandlerGetTypeID(void);
```

<a id="return_value"></a>

## Return Value

A `CFTypeID`.

<a id="discussion"></a>

## Discussion

Returns the `CFTypeID` of the opaque `WSProtocolHandlerRef` most recently created by `WSProtocolHandlerCreate`. `CFTypeIDs` are only valid during a particular instance of a process and should not be used as static values.
