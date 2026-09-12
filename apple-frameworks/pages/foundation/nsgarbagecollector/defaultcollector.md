> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgarbagecollector/defaultcollector](https://developer.apple.com/documentation/foundation/nsgarbagecollector/defaultcollector)

# defaultCollector

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Returns the default garbage collector.

## Declaration

```objectivec
+ (id) defaultCollector;
```

<a id="return-value"></a>

## Return Value

The default garbage collector for the current process. Returns `nil` if the current process is not running with garbage collection.

<a id="Discussion"></a>

## Discussion

There is at most one garbage collector for Cocoa within a single process.
