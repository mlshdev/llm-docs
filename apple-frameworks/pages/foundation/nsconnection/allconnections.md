> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/allconnections](https://developer.apple.com/documentation/foundation/nsconnection/allconnections)

# allConnections

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns all valid `NSConnection` objects in the process.

## Declaration

```objectivec
+ (NSArray<NSConnection *> *) allConnections;
```

<a id="return-value"></a>

## Return Value

An array containing all valid `NSConnection` objects in the process.

## See Also

### Related Documentation

- [valid](valid.md): Deprecated. A Boolean value that indicates whether the receiver is known to be valid.
