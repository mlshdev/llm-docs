> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachbootstrapserver/sharedinstance](https://developer.apple.com/documentation/foundation/nsmachbootstrapserver/sharedinstance)

# sharedInstance

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns the shared instance of the bootstrap server.

## Declaration

```objectivec
+ (id) sharedInstance;
```

<a id="return-value"></a>

## Return Value

The shared instance of `NSMachBootstrapServer` with which you register and look up `NSMachPort` objects.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)
