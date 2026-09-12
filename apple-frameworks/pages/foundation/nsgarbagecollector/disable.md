> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgarbagecollector/disable](https://developer.apple.com/documentation/foundation/nsgarbagecollector/disable)

# disable

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Temporarily disables collections.

## Declaration

```objectivec
- (void) disable;
```

<a id="Discussion"></a>

## Discussion

Invocations of this method can be nested. To reenable collection, you must send the collector an [enable](enable.md) message once for each invocation of this method.

## See Also

### Collection State

- [enable](enable.md): Deprecated. Enables collection after collection has been disabled.
- [isEnabled](isenabled.md): Deprecated. Returns a Boolean value that indicates whether garbage collection is currently enabled for the current process.
- [isCollecting](iscollecting.md): Deprecated. Returns a Boolean value that indicates whether a collection is currently in progress.
