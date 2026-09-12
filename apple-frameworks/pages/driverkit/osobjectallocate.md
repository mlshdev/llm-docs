> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osobjectallocate](https://developer.apple.com/documentation/driverkit/osobjectallocate)

# OSObjectAllocate

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

Helper function for OSTypeAlloc(). Not to be called directly.

## Declaration

```objectivec
extern kern_return_t OSObjectAllocate(OSMetaClass *meta, OSObject **pObject);
```

## See Also

### Object Support

- [OSObjectRetain](osobjectretain.md)
- [OSObjectRelease](osobjectrelease.md)
