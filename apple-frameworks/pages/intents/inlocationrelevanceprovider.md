> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlocationrelevanceprovider](https://developer.apple.com/documentation/intents/inlocationrelevanceprovider)

# INLocationRelevanceProvider (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · watchOS 5.0+

The provider class that specifies a relevant location.

## Declaration

```swift
class INLocationRelevanceProvider
```

<a id="overview"></a>

## Overview

Ask the user for permission to use their location before providing shortcuts to [INRelevantShortcutStore](inrelevantshortcutstore.md) that include a location relevance provider. If the user gives your app permission to access their location While In Use or Always\_,\_ shortcuts your app provides can influence widget stacks and the Siri watch face.

## Topics

### Creating a Location Relevance Provider

- [init(region:)](inlocationrelevanceprovider/init%28region_%29.md): Creates a relevance provider for a location specified as a region.

### Getting the Relevant Region

- [region](inlocationrelevanceprovider/region.md): The region representing the relevant location.

## Relationships

### Inherits From

- [INRelevanceProvider](inrelevanceprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Relevance Providers

- [INRelevanceProvider](inrelevanceprovider.md): An abstract class that represents a relevance provider.
- [INDailyRoutineRelevanceProvider](indailyroutinerelevanceprovider.md): The provider class that specifies a relevant daily routine.
- [INDateRelevanceProvider](indaterelevanceprovider.md): The provider class that specifies a relevant day and time.

# INLocationRelevanceProvider (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · watchOS 5.0+

The provider class that specifies a relevant location.

## Declaration

```objectivec
@interface INLocationRelevanceProvider : INRelevanceProvider
```

<a id="overview"></a>

## Overview

Ask the user for permission to use their location before providing shortcuts to [INRelevantShortcutStore](inrelevantshortcutstore.md) that include a location relevance provider. If the user gives your app permission to access their location While In Use or Always\_,\_ shortcuts your app provides can influence widget stacks and the Siri watch face.

## Topics

### Creating a Location Relevance Provider

- [initWithRegion:](inlocationrelevanceprovider/init%28region_%29.md): Creates a relevance provider for a location specified as a region.

### Getting the Relevant Region

- [region](inlocationrelevanceprovider/region.md): The region representing the relevant location.

## Relationships

### Inherits From

- [INRelevanceProvider](inrelevanceprovider.md)

## See Also

### Relevance Providers

- [INRelevanceProvider](inrelevanceprovider.md): An abstract class that represents a relevance provider.
- [INDailyRoutineRelevanceProvider](indailyroutinerelevanceprovider.md): The provider class that specifies a relevant daily routine.
- [INDateRelevanceProvider](indaterelevanceprovider.md): The provider class that specifies a relevant day and time.
