> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdlobjectcontainercomponent/add(_:)

# add(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified object as a child of this object.

## Declaration

```swift
func add(_ object: MDLObject)
```

## Parameters

- `object`: The object to add.

## See Also

### Working with Child Objects

- [objects](objects.md): This object’s array of child objects.
- [remove(\_:)](remove%28__%29.md): Removes the specified object from this object’s array of children.

# addObject: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds the specified object as a child of this object.

## Declaration

```objectivec
- (void) addObject:(MDLObject *) object;
```

## Parameters

- `object`: The object to add.

## See Also

### Working with Child Objects

- [objects](objects.md): This object’s array of child objects.
- [removeObject:](remove%28__%29.md): Removes the specified object from this object’s array of children.
