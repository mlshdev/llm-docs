> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressreporter](https://developer.apple.com/documentation/foundation/progressreporter)

# ProgressReporter

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

ProgressReporter is a wrapper for ProgressManager that carries information about ProgressManager.

## Declaration

```swift
@dynamicMemberLookup final class ProgressReporter
```

<a id="overview"></a>

## Overview

It is read-only and can be added as a child of another ProgressManager.

## Topics

### Instance Properties

- [completedCount](progressreporter/completedcount.md): The completed units of work. If `self` is indeterminate, the value will be 0.
- [debugDescription](progressreporter/debugdescription.md): A textual representation of the progress reporter suitable for debugging.
- [description](progressreporter/description.md): A textual representation of the progress reporter.
- [fractionCompleted](progressreporter/fractioncompleted.md): The proportion of work completed. This takes into account the fraction completed in its children instances if children are present. If `self` is indeterminate, the value will be 0.
- [isFinished](progressreporter/isfinished.md): The state of completion of work. If `completedCount` \>= `totalCount`, the value will be `true`.
- [isIndeterminate](progressreporter/isindeterminate.md): The state of initialization of `totalCount`. If `totalCount` is `nil`, the value will be `true`.
- [totalCount](progressreporter/totalcount.md): The total units of work.

### Instance Methods

- [summary(of:)](progressreporter/summary%28of_%29-2qbq7.md): Returns a summary for the specified unsigned integer array property across the progress subtree.
- [summary(of:)](progressreporter/summary%28of_%29-4lsh2.md): Returns a summary for the specified double property across the progress subtree.
- [summary(of:)](progressreporter/summary%28of_%29-5klzp.md): Returns a summary for the specified string property across the progress subtree.
- [summary(of:)](progressreporter/summary%28of_%29-6x2a5.md): Returns a summary for the specified URL property across the progress subtree.
- [summary(of:)](progressreporter/summary%28of_%29-7u7bg.md): Returns a summary for the specified integer property across the progress subtree.
- [summary(of:)](progressreporter/summary%28of_%29-7xg8c.md): Returns a summary for the specified unsigned integer property across the progress subtree.
- [summary(of:)](progressreporter/summary%28of_%29-vlsj.md): Returns a summary for the specified duration property across the progress subtree.

### Subscripts

- [subscript(dynamicMember:)](progressreporter/subscript%28dynamicmember_%29-114si.md): Gets or sets custom string properties.
- [subscript(dynamicMember:)](progressreporter/subscript%28dynamicmember_%29-1ubk6.md): Gets or sets custom unsigned integer properties.
- [subscript(dynamicMember:)](progressreporter/subscript%28dynamicmember_%29-45eys.md): Gets or sets custom unsigned integer properties.
- [subscript(dynamicMember:)](progressreporter/subscript%28dynamicmember_%29-84opo.md): Gets or sets custom URL properties.
- [subscript(dynamicMember:)](progressreporter/subscript%28dynamicmember_%29-9fd3u.md): Gets or sets custom double properties.
- [subscript(dynamicMember:)](progressreporter/subscript%28dynamicmember_%29-9pcsi.md): Gets or sets custom integer properties.
- [subscript(dynamicMember:)](progressreporter/subscript%28dynamicmember_%29-cjlx.md): Gets or sets custom duration properties.

### Type Aliases

- [ProgressReporter.Property](progressreporter/property.md)

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
