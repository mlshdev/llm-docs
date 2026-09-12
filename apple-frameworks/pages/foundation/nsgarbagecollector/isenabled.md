> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgarbagecollector/isenabled](https://developer.apple.com/documentation/foundation/nsgarbagecollector/isenabled)

# isEnabled

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Returns a Boolean value that indicates whether garbage collection is currently enabled for the current process.

## Declaration

```objectivec
- (BOOL) isEnabled;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if garbage collection is enabled for the current process, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if garbage collection is on, but has been temporarily suspended (using [disable](disable.md)).

To check whether the current process is using garbage collection check the result of `[NSGarbageCollector defaultCollector]`. If [defaultCollector](defaultcollector.md) is `nil`, then garbage collection is permanently off. If [defaultCollector](defaultcollector.md) is not `nil`, then the current process is using garbage collection—you can then use `isEnabled` to determine whether or not the collector is actually allowed to run right now.

## See Also

### Collection State

- [disable](disable.md): Deprecated. Temporarily disables collections.
- [enable](enable.md): Deprecated. Enables collection after collection has been disabled.
- [isCollecting](iscollecting.md): Deprecated. Returns a Boolean value that indicates whether a collection is currently in progress.
