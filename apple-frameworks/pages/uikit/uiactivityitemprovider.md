> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemprovider](https://developer.apple.com/documentation/uikit/uiactivityitemprovider)

# UIActivityItemProvider (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A proxy for data that passes to an activity view controller.

## Declaration

```swift
class UIActivityItemProvider
```

<a id="overview"></a>

## Overview

You can use a provider object in situations where you want to make data available for use by an activity but you want to delay providing that data until it’s actually needed. For example, you might use a provider object to represent a large video file that needs to be processed before it can be shared to a user’s social media account.

When you initialize a [UIActivityViewController](uiactivityviewcontroller.md) object, you can pass a provider object in addition to any other data objects. When the user selects an activity, the activity view controller adds your provider object (which is also an operation object) to an operation queue so that it can begin to gather or process the needed data.

<a id="Subclassing-notes"></a>

### Subclassing notes

You must subclass `UIActivityItemProvider` and implement its [item](uiactivityitemprovider/item.md) method, which is called to generate the item data. You implement this method instead of the normal [main()](../foundation/operation/main%28%29.md) method you’d implement for an operation object. (The [main()](../foundation/operation/main%28%29.md) method calls the [item](uiactivityitemprovider/item.md) method when the operation object is executed.) Your implementation of the [item](uiactivityitemprovider/item.md) method should do whatever work is necessary to create and return the data.

## Topics

### Initializing the provider

- [init(placeholderItem:)](uiactivityitemprovider/init%28placeholderitem_%29.md): Initializes and returns a provider object with the specified placeholder data.

### Accessing the provider attributes

- [item](uiactivityitemprovider/item.md): Generates and returns the actual data-bearing object.
- [placeholderItem](uiactivityitemprovider/placeholderitem.md): The placeholder object you specified at initialization time.
- [activityType](uiactivityitemprovider/activitytype.md): The type of the activity object that is expecting the data.

## Relationships

### Inherits From

- [Operation](../foundation/operation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemSource](uiactivityitemsource.md)

## See Also

### Services

- [UIActivity](uiactivity.md): An abstract class that you subclass to implement app-specific services.
- [UIActivityViewController](uiactivityviewcontroller.md): A view controller that you use to offer standard services from your app.
- [UIActivityItemSource](uiactivityitemsource.md): A set of methods that an activity view controller uses to retrieve the data items to act on.

# UIActivityItemProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A proxy for data that passes to an activity view controller.

## Declaration

```objectivec
@interface UIActivityItemProvider : NSOperation
```

<a id="overview"></a>

## Overview

You can use a provider object in situations where you want to make data available for use by an activity but you want to delay providing that data until it’s actually needed. For example, you might use a provider object to represent a large video file that needs to be processed before it can be shared to a user’s social media account.

When you initialize a [UIActivityViewController](uiactivityviewcontroller.md) object, you can pass a provider object in addition to any other data objects. When the user selects an activity, the activity view controller adds your provider object (which is also an operation object) to an operation queue so that it can begin to gather or process the needed data.

<a id="Subclassing-notes"></a>

### Subclassing notes

You must subclass `UIActivityItemProvider` and implement its [item](uiactivityitemprovider/item.md) method, which is called to generate the item data. You implement this method instead of the normal [main](../foundation/operation/main%28%29.md) method you’d implement for an operation object. (The [main](../foundation/operation/main%28%29.md) method calls the [item](uiactivityitemprovider/item.md) method when the operation object is executed.) Your implementation of the [item](uiactivityitemprovider/item.md) method should do whatever work is necessary to create and return the data.

## Topics

### Initializing the provider

- [initWithPlaceholderItem:](uiactivityitemprovider/init%28placeholderitem_%29.md): Initializes and returns a provider object with the specified placeholder data.

### Accessing the provider attributes

- [item](uiactivityitemprovider/item.md): Generates and returns the actual data-bearing object.
- [placeholderItem](uiactivityitemprovider/placeholderitem.md): The placeholder object you specified at initialization time.
- [activityType](uiactivityitemprovider/activitytype.md): The type of the activity object that is expecting the data.

## Relationships

### Inherits From

- [NSOperation](../foundation/operation.md)

### Conforms To

- [UIActivityItemSource](uiactivityitemsource.md)

## See Also

### Services

- [UIActivity](uiactivity.md): An abstract class that you subclass to implement app-specific services.
- [UIActivityViewController](uiactivityviewcontroller.md): A view controller that you use to offer standard services from your app.
- [UIActivityItemSource](uiactivityitemsource.md): A set of methods that an activity view controller uses to retrieve the data items to act on.
