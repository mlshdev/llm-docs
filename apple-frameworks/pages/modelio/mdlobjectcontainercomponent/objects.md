> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdlobjectcontainercomponent/objects

# objects (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

This object’s array of child objects.

## Declaration

```swift
var objects: [MDLObject] { get }
```

## See Also

### Working with Child Objects

- [add(\_:)](add%28__%29.md): Adds the specified object as a child of this object.
- [remove(\_:)](remove%28__%29.md): Removes the specified object from this object’s array of children.

# objects (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

This object’s array of child objects.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSArray<MDLObject *> * objects;
```

## See Also

### Working with Child Objects

- [addObject:](add%28__%29.md): Adds the specified object as a child of this object.
- [removeObject:](remove%28__%29.md): Removes the specified object from this object’s array of children.
