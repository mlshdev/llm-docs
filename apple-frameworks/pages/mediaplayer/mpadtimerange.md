> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpadtimerange](https://developer.apple.com/documentation/mediaplayer/mpadtimerange)

# MPAdTimeRange (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a time range where an ad break exists in the current player.

## Declaration

```swift
class MPAdTimeRange
```

<a id="overview"></a>

## Overview

This value must be in bounds of the duration of the current player item.

## Topics

### Creating an Ad Time Range

- [init(\_:)](mpadtimerange/init%28__%29.md): Creates a Media Player time range that indicates where an ad break exists in the current player.

### Inspecting an Ad Time Range

- [timeRange](mpadtimerange/timerange.md): A Media Player time range that indicates where an ad break exists in the current player.

### Initializers

- [init(timeRange:)](mpadtimerange/init%28timerange_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MPAdTimeRange (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a time range where an ad break exists in the current player.

## Declaration

```objectivec
@interface MPAdTimeRange : NSObject
```

<a id="overview"></a>

## Overview

This value must be in bounds of the duration of the current player item.

## Topics

### Creating an Ad Time Range

- [initWithTimeRange:](mpadtimerange/init%28__%29.md): Creates a Media Player time range that indicates where an ad break exists in the current player.

### Inspecting an Ad Time Range

- [timeRange](mpadtimerange/timerange.md): A Media Player time range that indicates where an ad break exists in the current player.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
