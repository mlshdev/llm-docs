> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioworkgroup/join](https://developer.apple.com/documentation/driverkit/ioworkgroup/join)

# Join

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
kern_return_t Join(void *token);
```

## Parameters

- `token`: The workgroup token.

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Join the workgroup.

Before calling this method, the caller must allocate a token. This token must be passed to this method. When leaving a workgroup with Leave(), use the same token that was passed to Join().
