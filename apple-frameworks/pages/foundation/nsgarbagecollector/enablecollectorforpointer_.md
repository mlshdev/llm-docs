> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgarbagecollector/enablecollectorforpointer:](https://developer.apple.com/documentation/foundation/nsgarbagecollector/enablecollectorforpointer:)

# enableCollectorForPointer:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Specifies that a given pointer may be collected.

## Declaration

```objectivec
- (void) enableCollectorForPointer:(const void *) ptr;
```

## Parameters

- `ptr`: A pointer to the memory that may be collected.

<a id="Discussion"></a>

## Discussion

You use this method to make memory that was previously marked as uncollectable. For example, given the address of the global dictionary created in [disableCollectorForPointer:](disablecollectorforpointer_.md), you could make the dictionary collectable as follows:

```objc
[[NSGarbageCollector defaultCollector]
    enableCollectorForPointer:globalDictionary];
```

For more about root objects and scanned memory, see Garbage Collection Programming Guide.

## See Also

### Manipulating External References

- [disableCollectorForPointer:](disablecollectorforpointer_.md): Deprecated. Specifies that a given pointer will not be collected.
