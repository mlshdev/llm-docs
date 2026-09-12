> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityviewcontroller/init(activityitems:applicationactivities:)](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller/init(activityitems:applicationactivities:))

# init(activityItems:applicationActivities:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new activity view controller object that acts on the specified data.

## Declaration

```swift
init(activityItems: [Any], applicationActivities: [UIActivity]?)
```

## Parameters

- `activityItems`: The array of data objects on which to perform the activity. The type of objects in the array is variable and dependent on the data your application manages. For example, the data might consist of one or more string or image objects representing the currently selected content.

  Instead of actual data objects, the objects in this array can be objects that adopt the [UIActivityItemSource](../uiactivityitemsource.md) protocol, such as [UIActivityItemProvider](../uiactivityitemprovider.md) objects. Source and provider objects act as proxies for the corresponding data in situations where you do not want to provide that data until it is needed. Note that you should not reuse an activity view controller object that includes a [UIActivityItemProvider](../uiactivityitemprovider.md) object in its `activityItems` array.

  This array must not be `nil` and must contain at least one object.
- `applicationActivities`: An array of [UIActivity](../uiactivity.md) objects representing the custom services that your application supports. This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

The activity view controller to present.

<a id="Discussion"></a>

## Discussion

It is your responsibility to present and dismiss the view controller using the appropriate means for the given device idiom. On iPad, you must present the view controller in a popover. On other devices, you must present it modally.

## See Also

### Initializing the activity view controller

- [init(activityItemsConfiguration:)](init%28activityitemsconfiguration_%29.md): Initializes a new activity view controller object that acts on the specified configuration.
- [UIActivityItemsConfiguration](../uiactivityitemsconfiguration.md): A configuration that allows a responder to export data through a variety of interactions.
- [UIActivityItemsConfigurationReading](../uiactivityitemsconfigurationreading.md): A set of methods adopted by an object so that the object can act as an activity items configuration.

# initWithActivityItems:applicationActivities: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new activity view controller object that acts on the specified data.

## Declaration

```objectivec
- (instancetype) initWithActivityItems:(NSArray *) activityItems applicationActivities:(NSArray<__kindof UIActivity *> *) applicationActivities;
```

## Parameters

- `activityItems`: The array of data objects on which to perform the activity. The type of objects in the array is variable and dependent on the data your application manages. For example, the data might consist of one or more string or image objects representing the currently selected content.

  Instead of actual data objects, the objects in this array can be objects that adopt the [UIActivityItemSource](../uiactivityitemsource.md) protocol, such as [UIActivityItemProvider](../uiactivityitemprovider.md) objects. Source and provider objects act as proxies for the corresponding data in situations where you do not want to provide that data until it is needed. Note that you should not reuse an activity view controller object that includes a [UIActivityItemProvider](../uiactivityitemprovider.md) object in its `activityItems` array.

  This array must not be `nil` and must contain at least one object.
- `applicationActivities`: An array of [UIActivity](../uiactivity.md) objects representing the custom services that your application supports. This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

The activity view controller to present.

<a id="Discussion"></a>

## Discussion

It is your responsibility to present and dismiss the view controller using the appropriate means for the given device idiom. On iPad, you must present the view controller in a popover. On other devices, you must present it modally.

## See Also

### Initializing the activity view controller

- [initWithActivityItemsConfiguration:](init%28activityitemsconfiguration_%29.md): Initializes a new activity view controller object that acts on the specified configuration.
- [UIActivityItemsConfiguration](../uiactivityitemsconfiguration.md): A configuration that allows a responder to export data through a variety of interactions.
- [UIActivityItemsConfigurationReading](../uiactivityitemsconfigurationreading.md): A set of methods adopted by an object so that the object can act as an activity items configuration.
