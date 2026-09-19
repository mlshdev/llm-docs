> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsgarbagecollector/enable

# enable

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Enables collection after collection has been disabled.

## Declaration

```objectivec
- (void) enable;
```

<a id="Discussion"></a>

## Discussion

This method balances a single invocation of [disable](disable.md). To reenable collection, this method must be invoked as many times as was [disable](disable.md).

## See Also

### Collection State

- [disable](disable.md): Deprecated. Temporarily disables collections.
- [isEnabled](isenabled.md): Deprecated. Returns a Boolean value that indicates whether garbage collection is currently enabled for the current process.
- [isCollecting](iscollecting.md): Deprecated. Returns a Boolean value that indicates whether a collection is currently in progress.
