> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iouserserver/create](https://developer.apple.com/documentation/driverkit/iouserserver/create)

# Create

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t Create(const char name[64], uint64_t tag, uint64_t options, OSString *bundleID, IOUserServer **server);
```

## See Also

### Configuring the User Server

- [init](init.md)
- [free](free.md)
