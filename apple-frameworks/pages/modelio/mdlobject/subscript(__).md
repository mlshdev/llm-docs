> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobject/subscript(_:)](https://developer.apple.com/documentation/modelio/mdlobject/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
subscript(key: Protocol) -> (any MDLComponent)? { get set }
```

## See Also

### Object Instancing

- [atPath(\_:)](atpath%28__%29.md): Returns the child object at the specified path.
- [enumerateChildObjects(of:root:using:stopPointer:)](enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.

# objectForKeyedSubscript: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
- (id<MDLComponent>) objectForKeyedSubscript:(Protocol *) key;
```

## See Also

### Object Instancing

- [objectAtPath:](atpath%28__%29.md): Returns the child object at the specified path.
- [enumerateChildObjectsOfClass:root:usingBlock:stopPointer:](enumeratechildobjects%28of_root_using_stoppointer_%29.md): Executes the specified block using each object in this object’s child hierarchy.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md)
