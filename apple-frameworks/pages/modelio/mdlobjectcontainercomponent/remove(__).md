> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdlobjectcontainercomponent/remove(_:)

# remove(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified object from this object’s array of children.

## Declaration

```swift
func remove(_ object: MDLObject)
```

## Parameters

- `object`: The object to remove.

## See Also

### Working with Child Objects

- [objects](objects.md): This object’s array of child objects.
- [add(\_:)](add%28__%29.md): Adds the specified object as a child of this object.

# removeObject: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified object from this object’s array of children.

## Declaration

```objectivec
- (void) removeObject:(MDLObject *) object;
```

## Parameters

- `object`: The object to remove.

## See Also

### Working with Child Objects

- [objects](objects.md): This object’s array of child objects.
- [addObject:](add%28__%29.md): Adds the specified object as a child of this object.
