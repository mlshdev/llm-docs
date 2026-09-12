> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraganimating](https://developer.apple.com/documentation/uikit/uidraganimating)

# UIDragAnimating (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for providing custom animation alongside the system’s lift, drop, and cancellation animations.

## Declaration

```swift
@MainActor protocol UIDragAnimating : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You can use a [UIDragAnimating](uidraganimating.md) object to animate your own changes to the preview displayed during system-provided drag and drop animations.

## Topics

### Adding animations

- [addAnimations(\_:)](uidraganimating/addanimations%28__%29.md): Adds an animation block for modifying a view animation while it’s running.
- [addCompletion(\_:)](uidraganimating/addcompletion%28__%29.md): Adds an animation completion block to run when a view animation has ended.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UICollectionViewDropPlaceholderContext](uicollectionviewdropplaceholdercontext.md)
- [UITableViewDropPlaceholderContext](uitableviewdropplaceholdercontext.md)

## See Also

### Drag sources

- [UIDragItem](uidragitem.md): A representation of an underlying data item as a person drags it from one location to another.
- [UIDragDropSession](uidragdropsession.md): The common interface for querying the state of both drag sessions and drop sessions.
- [UIDragSession](uidragsession.md): The interface for configuring a drag session.

# UIDragAnimating (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for providing custom animation alongside the system’s lift, drop, and cancellation animations.

## Declaration

```objectivec
@protocol UIDragAnimating <NSObject>
```

<a id="overview"></a>

## Overview

You can use a [UIDragAnimating](uidraganimating.md) object to animate your own changes to the preview displayed during system-provided drag and drop animations.

## Topics

### Adding animations

- [addAnimations:](uidraganimating/addanimations%28__%29.md): Adds an animation block for modifying a view animation while it’s running.
- [addCompletion:](uidraganimating/addcompletion%28__%29.md): Adds an animation completion block to run when a view animation has ended.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UICollectionViewDropPlaceholderContext](uicollectionviewdropplaceholdercontext.md)
- [UITableViewDropPlaceholderContext](uitableviewdropplaceholdercontext.md)

## See Also

### Drag sources

- [UIDragItem](uidragitem.md): A representation of an underlying data item as a person drags it from one location to another.
- [UIDragDropSession](uidragdropsession.md): The common interface for querying the state of both drag sessions and drop sessions.
- [UIDragSession](uidragsession.md): The interface for configuring a drag session.
