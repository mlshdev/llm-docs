> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssocketportnameserver/sharedinstance](https://developer.apple.com/documentation/foundation/nssocketportnameserver/sharedinstance)

# sharedInstance

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Returns the shared socket port name server.

> Apple discourages the use of this symbol.

## Declaration

```objectivec
+ (id) sharedInstance;
```

<a id="return-value"></a>

## Return Value

The single instance of `NSSocketPortNameServer` with which you register and look up `NSSocketPort` objects.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)
