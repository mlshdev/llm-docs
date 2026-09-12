> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/objectdidbeginediting:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/objectdidbeginediting:)

# objectDidBeginEditing:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

This message should be sent to the receiver when `editor` has uncommitted changes that can affect the receiver.

## Declaration

```objectivec
- (void) objectDidBeginEditing:(id<NSEditor>) editor;
```

## See Also

### Related Documentation

- [Cocoa Bindings Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html#//apple_ref/doc/uid/10000167i)
- [objectDidEndEditing:](objectdidendediting_.md): Deprecated. This message should be sent to the receiver when `editor` has finished editing a property belonging to the receiver.
