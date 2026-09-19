> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/discardediting

# discardEditing

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Causes the receiver to discard any changes, restoring the previous values.

## Declaration

```objectivec
- (void) discardEditing;
```

## See Also

### Related Documentation

- [Cocoa Bindings Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html#//apple_ref/doc/uid/10000167i)
- [commitEditing](commitediting.md): Deprecated. Returns whether the receiver was able to commit any pending edits.
