> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundeventnodedefinition/children](https://developer.apple.com/documentation/phase/phasesoundeventnodedefinition/children)

# children (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An array of child sound event nodes.

## Declaration

```swift
var children: [PHASESoundEventNodeDefinition] { get }
```

<a id="Discussion"></a>

## Discussion

To add children, use the add subtree functions of the derived class. For example, add children to a container node using [addSubtree(\_:)](../phasecontainernodedefinition/addsubtree%28__%29.md).

# children (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An array of child sound event nodes.

## Declaration

```objectivec
@property (copy, readonly) NSArray<PHASESoundEventNodeDefinition *> * children;
```

<a id="Discussion"></a>

## Discussion

To add children, use the add subtree functions of the derived class. For example, add children to a container node using [addSubtree:](../phasecontainernodedefinition/addsubtree%28__%29.md).
