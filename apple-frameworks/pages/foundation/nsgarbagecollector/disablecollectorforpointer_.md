> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgarbagecollector/disablecollectorforpointer:](https://developer.apple.com/documentation/foundation/nsgarbagecollector/disablecollectorforpointer:)

# disableCollectorForPointer:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Specifies that a given pointer will not be collected.

## Declaration

```objectivec
- (void) disableCollectorForPointer:(const void *) ptr;
```

## Parameters

- `ptr`: A pointer to the memory that should not be collected.

<a id="Discussion"></a>

## Discussion

You use this method to ensure that memory at a given address will not be collected. You can use this, for example, to create new root objects:

```objc
NSMutableDictionary *globalDictionary;
globalDictionary = [NSMutableDictionary dictionary];
[[NSGarbageCollector defaultCollector]
    disableCollectorForPointer:globalDictionary];
```

The new dictionary will not be collectable and will persist for the lifetime of the application unless it is subsequently passed as the argument to [enableCollectorForPointer:](enablecollectorforpointer_.md). For more about root objects and scanned memory, see Garbage Collection Programming Guide.

## See Also

### Manipulating External References

- [enableCollectorForPointer:](enablecollectorforpointer_.md): Deprecated. Specifies that a given pointer may be collected.
