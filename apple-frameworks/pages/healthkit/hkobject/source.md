> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobject/source](https://developer.apple.com/documentation/healthkit/hkobject/source)

# source (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A HealthKit source, representing the app or device that created this object.

> This property is deprecated. Use [sourceRevision](sourcerevision.md) instead.

## Declaration

```swift
var source: HKSource { get }
```

<a id="Discussion"></a>

## Discussion

The `source` property is only available on objects you have retrieved from the HealthKit store. When you create a new object, the source is set to `nil`. The system automatically sets the source property when you save the object to the HealthKit store. The source is then available the next time the object is retrieved from the store.

## See Also

### Accessing Properties

- [uuid](uuid.md): The universally unique identifier (UUID) for this HealthKit object.
- [metadata](metadata.md): The metadata for this HealthKit object.
- [device](device.md): The device that generated the data for this object.
- [sourceRevision](sourcerevision.md): The app or device that created this object.

# source (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A HealthKit source, representing the app or device that created this object.

> This property is deprecated. Use [sourceRevision](sourcerevision.md) instead.

## Declaration

```objectivec
@property (strong, readonly) HKSource * source;
```

<a id="Discussion"></a>

## Discussion

The `source` property is only available on objects you have retrieved from the HealthKit store. When you create a new object, the source is set to `nil`. The system automatically sets the source property when you save the object to the HealthKit store. The source is then available the next time the object is retrieved from the store.

## See Also

### Accessing Properties

- [UUID](uuid.md): The universally unique identifier (UUID) for this HealthKit object.
- [metadata](metadata.md): The metadata for this HealthKit object.
- [device](device.md): The device that generated the data for this object.
- [sourceRevision](sourcerevision.md): The app or device that created this object.
