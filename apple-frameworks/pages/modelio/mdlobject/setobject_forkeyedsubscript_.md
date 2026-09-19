> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdlobject/setobject:forkeyedsubscript:

# setObject:forKeyedSubscript:

**Interface language:** Objective-C

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) setObject:(id<MDLComponent>) obj forKeyedSubscript:(Protocol *) key;
```

## See Also

### Object Instancing

- [objectAtPath:](atpath%28__%29.md): Returns the child object at the specified path.
- [enumerateChildObjectsOfClass:root:usingBlock:stopPointer:](enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [objectForKeyedSubscript:](subscript%28__%29.md)
