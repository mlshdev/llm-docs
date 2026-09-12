> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indailyroutinerelevanceprovider](https://developer.apple.com/documentation/intents/indailyroutinerelevanceprovider)

# INDailyRoutineRelevanceProvider (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The provider class that specifies a relevant daily routine.

## Declaration

```swift
class INDailyRoutineRelevanceProvider
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

<a id="overview"></a>

## Overview

Ask the user for permission to use their location before providing shortcuts to [INRelevantShortcutStore](inrelevantshortcutstore.md) that include a daily routine relevance provider. If the user gives your app permission to access their location Always, shortcuts your app provides can influence widget stacks.

## Topics

### Creating a Daily Routine Relevance Provider

- [init(situation:)](indailyroutinerelevanceprovider/init%28situation_%29.md): Creates a daily routine relevance provider with the specified situation.

### Getting the Situation

- [situation](indailyroutinerelevanceprovider/situation-swift.property.md): The relevant daily routine situation for the provider.
- [INDailyRoutineRelevanceProvider.Situation](indailyroutinerelevanceprovider/situation-swift.enum.md): Daily situations for a relevance provider.

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
- [INDateRelevanceProvider](indaterelevanceprovider.md): The provider class that specifies a relevant day and time.
- [INLocationRelevanceProvider](inlocationrelevanceprovider.md): The provider class that specifies a relevant location.

# INDailyRoutineRelevanceProvider (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The provider class that specifies a relevant daily routine.

## Declaration

```objectivec
@interface INDailyRoutineRelevanceProvider : INRelevanceProvider
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

<a id="overview"></a>

## Overview

Ask the user for permission to use their location before providing shortcuts to [INRelevantShortcutStore](inrelevantshortcutstore.md) that include a daily routine relevance provider. If the user gives your app permission to access their location Always, shortcuts your app provides can influence widget stacks.

## Topics

### Creating a Daily Routine Relevance Provider

- [initWithSituation:](indailyroutinerelevanceprovider/init%28situation_%29.md): Creates a daily routine relevance provider with the specified situation.

### Getting the Situation

- [situation](indailyroutinerelevanceprovider/situation-swift.property.md): The relevant daily routine situation for the provider.
- [INDailyRoutineSituation](indailyroutinerelevanceprovider/situation-swift.enum.md): Daily situations for a relevance provider.

## Relationships

### Inherits From

- [INRelevanceProvider](inrelevanceprovider.md)

## See Also

### Relevance Providers

- [INRelevanceProvider](inrelevanceprovider.md): An abstract class that represents a relevance provider.
- [INDateRelevanceProvider](indaterelevanceprovider.md): The provider class that specifies a relevant day and time.
- [INLocationRelevanceProvider](inlocationrelevanceprovider.md): The provider class that specifies a relevant location.
