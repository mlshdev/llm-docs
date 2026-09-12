> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaserandomnodedefinition/addsubtree(_:weight:)](https://developer.apple.com/documentation/phase/phaserandomnodedefinition/addsubtree(_:weight:))

# addSubtree(\_:weight:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds a node tree that’s one of the random-selection options.

## Declaration

```swift
func addSubtree(_ subtree: PHASESoundEventNodeDefinition, weight: NSNumber)
```

## Parameters

- `subtree`: The child node, which itself can contain a hierarchical tree of descendent nodes.
- `weight`: A number that implements favoritism in the random selection.

# addSubtree:weight: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds a node tree that’s one of the random-selection options.

## Declaration

```objectivec
- (void) addSubtree:(PHASESoundEventNodeDefinition *) subtree weight:(NSNumber *) weight;
```

## Parameters

- `subtree`: The child node, which itself can contain a hierarchical tree of descendent nodes.
- `weight`: A number that implements favoritism in the random selection.
