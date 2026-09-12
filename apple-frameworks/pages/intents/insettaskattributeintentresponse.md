> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintentresponse](https://developer.apple.com/documentation/intents/insettaskattributeintentresponse)

# INSetTaskAttributeIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Your response to a request to modify the attributes of an existing task.

> INSetTaskAttributeIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INSetTaskAttributeIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSetTaskAttributeIntentResponse](insettaskattributeintentresponse.md) object to return information about your attempt to update an existing task. Siri communicates the information from your response to the user at appropriate times.

You create an [INSetTaskAttributeIntentResponse](insettaskattributeintentresponse.md) object in the [confirm(intent:completion:)](insettaskattributeintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insettaskattributeintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSetTaskAttributeIntentHandling](insettaskattributeintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insettaskattributeintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insettaskattributeintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetTaskAttributeIntentResponseCode](insettaskattributeintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Providing the Task Details

- [modifiedTask](insettaskattributeintentresponse/modifiedtask.md): Deprecated. The modified task.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

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

### Task Attributes

- [INSetTaskAttributeIntentHandling](insettaskattributeintenthandling.md): Deprecated. The handler interface for updating the attributes of an existing task.
- [INSetTaskAttributeIntent](insettaskattributeintent.md): Deprecated. A request to modify the attributes of a task.

# INSetTaskAttributeIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Your response to a request to modify the attributes of an existing task.

> INSetTaskAttributeIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INSetTaskAttributeIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSetTaskAttributeIntentResponse](insettaskattributeintentresponse.md) object to return information about your attempt to update an existing task. Siri communicates the information from your response to the user at appropriate times.

You create an [INSetTaskAttributeIntentResponse](insettaskattributeintentresponse.md) object in the [confirmSetTaskAttribute:completion:](insettaskattributeintenthandling/confirm%28intent_completion_%29.md) and [handleSetTaskAttribute:completion:](insettaskattributeintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSetTaskAttributeIntentHandling](insettaskattributeintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insettaskattributeintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insettaskattributeintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSetTaskAttributeIntentResponseCode](insettaskattributeintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Providing the Task Details

- [modifiedTask](insettaskattributeintentresponse/modifiedtask.md): Deprecated. The modified task.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Task Attributes

- [INSetTaskAttributeIntentHandling](insettaskattributeintenthandling.md): Deprecated. The handler interface for updating the attributes of an existing task.
- [INSetTaskAttributeIntent](insettaskattributeintent.md): Deprecated. A request to modify the attributes of a task.
