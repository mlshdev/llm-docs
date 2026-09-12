> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlwritable](https://developer.apple.com/documentation/coreml/mlwritable)

# MLWritable (Swift)

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A set of methods that saves a machine learning type to the file system.

## Declaration

```swift
protocol MLWritable : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You use [MLWritable](mlwritable.md) to save any [MLModel](mlmodel.md) instance that adopts the protocol to the file system.

## Topics

### Saving to a file

- [write(to:)](mlwritable/write%28to_%29.md): Exports a machine learning file to the file system.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Saving an updated model

- [model](mlupdatecontext/model.md): The underlying Core ML model stored in memory.

# MLWritable (Objective-C)

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A set of methods that saves a machine learning type to the file system.

## Declaration

```objectivec
@protocol MLWritable <NSObject>
```

<a id="overview"></a>

## Overview

You use [MLWritable](mlwritable.md) to save any [MLModel](mlmodel.md) instance that adopts the protocol to the file system.

## Topics

### Saving to a file

- [writeToURL:error:](mlwritable/write%28to_%29.md): Exports a machine learning file to the file system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Saving an updated model

- [model](mlupdatecontext/model.md): The underlying Core ML model stored in memory.
