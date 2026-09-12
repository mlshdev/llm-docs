> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager](https://developer.apple.com/documentation/foundation/progressmanager)

# ProgressManager

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An object that conveys ongoing progress to the user for a specified task.

## Declaration

```swift
@dynamicMemberLookup final class ProgressManager
```

## Topics

### Protocols

- [ProgressManager.Property](progressmanager/property.md): A type that conveys additional task-specific information on progress.

### Initializers

- [init(totalCount:)](progressmanager/init%28totalcount_%29.md): Initializes `self` with `totalCount`.

### Instance Properties

- [completedCount](progressmanager/completedcount.md): The completed units of work.
- [fractionCompleted](progressmanager/fractioncompleted.md): The proportion of work completed. This takes into account the fraction completed in its children instances if children are present. If `self` is indeterminate, the value will be 0.0.
- [isFinished](progressmanager/isfinished.md): The state of completion of work. If `completedCount` \>= `totalCount`, the value will be `true`.
- [isIndeterminate](progressmanager/isindeterminate.md): The state of initialization of `totalCount`. If `totalCount` is `nil`, the value will be `true`.
- [reporter](progressmanager/reporter.md): A `ProgressReporter` instance, used for providing read-only observation of progress updates or composing into other `ProgressManager`s.
- [totalCount](progressmanager/totalcount.md): The total units of work.

### Instance Methods

- [assign(count:to:)](progressmanager/assign%28count_to_%29-87zdf.md): Adds a Foundation’s `Progress` instance as a child which constitutes a certain `count` of `self`’s `totalCount`.
- [assign(count:to:)](progressmanager/assign%28count_to_%29-98a77.md): Adds a `ProgressReporter` as a child, with its progress representing a portion of `self`’s progress.
- [complete(count:)](progressmanager/complete%28count_%29.md): Increases `completedCount` by `count`.
- [setCounts(\_:)](progressmanager/setcounts%28__%29.md)
- [subprogress(assigningCount:)](progressmanager/subprogress%28assigningcount_%29.md): Returns a `Subprogress` representing a portion of `self` which can be passed to any method that reports progress.
- [summary(of:)](progressmanager/summary%28of_%29-3kyy8.md): Returns a summary for a custom URL property across the progress subtree.
- [summary(of:)](progressmanager/summary%28of_%29-3r60q.md): Returns a summary for a custom integer property across the progress subtree.
- [summary(of:)](progressmanager/summary%28of_%29-3voby.md): Returns a summary for a custom double property across the progress subtree.
- [summary(of:)](progressmanager/summary%28of_%29-73lzs.md): Returns a summary for a custom duration property across the progress subtree.
- [summary(of:)](progressmanager/summary%28of_%29-7jb53.md): Returns a summary for a custom unsigned integer property across the progress subtree.
- [summary(of:)](progressmanager/summary%28of_%29-bfr7.md): Returns a summary for a custom string property across the progress subtree.
- [summary(of:)](progressmanager/summary%28of_%29-txm5.md): Returns a summary for a custom unsigned integer property across the progress subtree.

### Subscripts

- [subscript(dynamicMember:)](progressmanager/subscript%28dynamicmember_%29-1qb7p.md): Gets or sets custom integer properties.
- [subscript(dynamicMember:)](progressmanager/subscript%28dynamicmember_%29-5rh0j.md): Gets or sets custom string properties.
- [subscript(dynamicMember:)](progressmanager/subscript%28dynamicmember_%29-5rw99.md): Gets or sets custom duration properties.
- [subscript(dynamicMember:)](progressmanager/subscript%28dynamicmember_%29-62at9.md): Gets or sets custom double properties.
- [subscript(dynamicMember:)](progressmanager/subscript%28dynamicmember_%29-7h16n.md): Gets or sets custom unsigned integer properties.
- [subscript(dynamicMember:)](progressmanager/subscript%28dynamicmember_%29-7r4v2.md): Gets or sets custom URL properties.
- [subscript(dynamicMember:)](progressmanager/subscript%28dynamicmember_%29-8tb3b.md): Gets or sets custom unsigned integer properties.

### Enumerations

- [ProgressManager.Properties](progressmanager/properties.md)

### Default Implementations

- [CustomDebugStringConvertible Implementations](progressmanager/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](progressmanager/customstringconvertible-implementations.md)
- [Equatable Implementations](progressmanager/equatable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
