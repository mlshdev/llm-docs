> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/systemcoordinator/groupimmersionstyles](https://developer.apple.com/documentation/groupactivities/systemcoordinator/groupimmersionstyles)

# SystemCoordinator.GroupImmersionStyles

**Framework:** GroupActivities  
**Kind:** Structure  
**Availability:** visionOS 1.0+

An asynchronous sequence that contains one or more incoming immersion styles for you to process.

## Declaration

```swift
struct GroupImmersionStyles
```

<a id="overview"></a>

## Overview

When a participant in an activity changes the immersion style of their immersive space, the system adds the style to this sequence. Configure an asynchronous task to monitor this sequence and process results when they arrive.

The following example shows you how to configure this task and use it to iterate over the available items. The `systemCoordinator` variable contains the session’s [SystemCoordinator](../systemcoordinator.md) object.

```swift
Task.detached {
    for await immersionStyle in systemCoordinator.groupImmersionStyle {
        if let immersionStyle {
            // Open an immersive space with the same style.
        }
        else {
            // Dismiss the immersive space.
        }
    }
}
```

## Topics

### Classes

- [SystemCoordinator.GroupImmersionStyles.Iterator](groupimmersionstyles/iterator.md)

### Instance Methods

- [makeAsyncIterator()](groupimmersionstyles/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.

### Type Aliases

- [SystemCoordinator.GroupImmersionStyles.Element](groupimmersionstyles/element.md): The type of element produced by this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Getting the current immersion level

- [groupImmersionStyle](groupimmersionstyle.md): The presentation style to apply to an immersive space for the current activity.
