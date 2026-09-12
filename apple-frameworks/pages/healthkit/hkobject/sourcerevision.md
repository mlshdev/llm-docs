> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobject/sourcerevision](https://developer.apple.com/documentation/healthkit/hkobject/sourcerevision)

# sourceRevision (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The app or device that created this object.

## Declaration

```swift
var sourceRevision: HKSourceRevision { get }
```

<a id="Discussion"></a>

## Discussion

For samples saved by an app, the source revision is set to the version of the app that saved the object. For devices that write directly to HealthKit, the source revision is set to the version of the device that saved the object, while more complete device information is saved to the [device](device.md) property.

The source revision property is only available on objects you have retrieved from the HealthKit store. When you create a new object, the source revision is set to `nil`. The system automatically sets this property to represent the current version of the app that saved the object to the HealthKit store. The source revision is then available the next time the object is retrieved from the store.

## See Also

### Accessing Properties

- [uuid](uuid.md): The universally unique identifier (UUID) for this HealthKit object.
- [metadata](metadata.md): The metadata for this HealthKit object.
- [device](device.md): The device that generated the data for this object.
- [source](source.md): Deprecated. A HealthKit source, representing the app or device that created this object.

# sourceRevision (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The app or device that created this object.

## Declaration

```objectivec
@property (strong, readonly) HKSourceRevision * sourceRevision;
```

<a id="Discussion"></a>

## Discussion

For samples saved by an app, the source revision is set to the version of the app that saved the object. For devices that write directly to HealthKit, the source revision is set to the version of the device that saved the object, while more complete device information is saved to the [device](device.md) property.

The source revision property is only available on objects you have retrieved from the HealthKit store. When you create a new object, the source revision is set to `nil`. The system automatically sets this property to represent the current version of the app that saved the object to the HealthKit store. The source revision is then available the next time the object is retrieved from the store.

## See Also

### Accessing Properties

- [UUID](uuid.md): The universally unique identifier (UUID) for this HealthKit object.
- [metadata](metadata.md): The metadata for this HealthKit object.
- [device](device.md): The device that generated the data for this object.
- [source](source.md): Deprecated. A HealthKit source, representing the app or device that created this object.
