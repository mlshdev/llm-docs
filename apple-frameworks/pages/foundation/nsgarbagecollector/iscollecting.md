> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsgarbagecollector/iscollecting

# isCollecting

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.6)

Returns a Boolean value that indicates whether a collection is currently in progress.

## Declaration

```objectivec
- (BOOL) isCollecting;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a collection is currently in progress, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Collection State

- [disable](disable.md): Deprecated. Temporarily disables collections.
- [enable](enable.md): Deprecated. Enables collection after collection has been disabled.
- [isEnabled](isenabled.md): Deprecated. Returns a Boolean value that indicates whether garbage collection is currently enabled for the current process.
