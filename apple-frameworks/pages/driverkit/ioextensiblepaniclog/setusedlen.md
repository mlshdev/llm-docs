> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioextensiblepaniclog/setusedlen

# SetUsedLen

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t SetUsedLen(uint32_t used_len);
```

## Parameters

- `used_len`: The length of the buffer used by the client.

<a id="return-value"></a>

## Return Value

0 in case of success. Negative in case of an error.

<a id="discussion"></a>

## Discussion

This function is called to set the used len of the buffer
