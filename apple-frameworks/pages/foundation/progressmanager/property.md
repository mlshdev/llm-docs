> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/property](https://developer.apple.com/documentation/foundation/progressmanager/property)

# ProgressManager.Property

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that conveys additional task-specific information on progress.

## Declaration

```swift
protocol Property : SendableMetatype
```

<a id="overview"></a>

## Overview

The `Property` protocol defines custom properties that can be associated with progress tracking. These properties allow you to store and aggregate additional information alongside the standard progress metrics such as `totalCount` and `completedCount`.

## Topics

### Associated Types

- [Summary](property/summary.md): The type used for aggregated summaries of this property.
- [Value](property/value.md): The type used for individual values of this property.

### Type Properties

- [defaultSummary](property/defaultsummary.md): The default summary value for this property type.
- [defaultValue](property/defaultvalue.md): The default value to return when property is not set to a specific value.
- [key](property/key.md): A unique identifier for this property type.

### Type Methods

- [finalSummary(\_:\_:)](property/finalsummary%28____%29.md): Determines how to handle summary data when a progress manager is deinitialized.
- [merge(\_:\_:)](property/merge%28____%29.md): Merges two summary values into a single combined summary.
- [reduce(into:value:)](property/reduce%28into_value_%29.md): Reduces a property value into an accumulating summary.

## Relationships

### Inherits From

- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [ProgressManager.Properties.CompletedByteCount](properties/completedbytecount-swift.enum.md)
- [ProgressManager.Properties.CompletedFileCount](properties/completedfilecount-swift.enum.md)
- [ProgressManager.Properties.EstimatedTimeRemaining](properties/estimatedtimeremaining-swift.enum.md)
- [ProgressManager.Properties.Throughput](properties/throughput-swift.enum.md)
- [ProgressManager.Properties.TotalByteCount](properties/totalbytecount-swift.enum.md)
- [ProgressManager.Properties.TotalFileCount](properties/totalfilecount-swift.enum.md)
