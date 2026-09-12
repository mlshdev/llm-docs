> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/discardediting](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/discardediting)

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
