> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpskeyedunarchiver](https://developer.apple.com/documentation/metalperformanceshaders/mpskeyedunarchiver)

# MPSKeyedUnarchiver (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A keyed archiver that supports Metal Performance Shaders kernel decoding.

## Declaration

```swift
class MPSKeyedUnarchiver
```

## Topics

### Initializers

- [init(device:)](mpskeyedunarchiver/init%28device_%29.md): Deprecated.
- [init(forReadingFrom:device:error:)](mpskeyedunarchiver/init%28forreadingfrom_device_error_%29.md)
- [init(forReadingFromData:device:error:)](mpskeyedunarchiver/init%28forreadingfromdata_device_error_%29.md)
- [init(forReadingWith:device:)](mpskeyedunarchiver/init%28forreadingwith_device_%29.md): Deprecated.
- [init(forReadingWithData:device:)](mpskeyedunarchiver/init%28forreadingwithdata_device_%29.md): Deprecated.

### Instance Methods

- [mpsMTLDevice()](mpskeyedunarchiver/mpsmtldevice%28%29.md)

### Type Methods

- [unarchiveObject(with:device:)](mpskeyedunarchiver/unarchiveobject%28with_device_%29.md): Deprecated.
- [unarchiveObject(withFile:device:)](mpskeyedunarchiver/unarchiveobject%28withfile_device_%29.md): Deprecated.
- [unarchiveTopLevelObject(with:device:)](mpskeyedunarchiver/unarchivetoplevelobject%28with_device_%29.md): Deprecated.
- [unarchivedObject(of:from:device:)](mpskeyedunarchiver/unarchivedobject%28of_from_device_%29.md)
- [unarchivedObject(ofClasses:from:device:)](mpskeyedunarchiver/unarchivedobject%28ofclasses_from_device_%29.md)

## Relationships

### Inherits From

- [NSKeyedUnarchiver](../foundation/nskeyedunarchiver.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MPSDeviceProvider](mpsdeviceprovider.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Keyed Archivers

- [NSKeyedArchiver](../foundation/nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [MPSDeviceProvider](mpsdeviceprovider.md): An interface that enables the setting of a Metal device for unarchived objects.

# MPSKeyedUnarchiver (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A keyed archiver that supports Metal Performance Shaders kernel decoding.

## Declaration

```objectivec
@interface MPSKeyedUnarchiver : NSKeyedUnarchiver
```

## Topics

### Instance Methods

- [initWithDevice:](mpskeyedunarchiver/init%28device_%29.md): Deprecated.
- [initForReadingFromData:device:error:](mpskeyedunarchiver/init%28forreadingfrom_device_error_%29.md)
- [initForReadingWithData:device:](mpskeyedunarchiver/init%28forreadingwith_device_%29.md): Deprecated.
- [mpsMTLDevice](mpskeyedunarchiver/mpsmtldevice%28%29.md)

### Type Methods

- [unarchiveObjectWithData:device:](mpskeyedunarchiver/unarchiveobject%28with_device_%29.md): Deprecated.
- [unarchiveObjectWithFile:device:](mpskeyedunarchiver/unarchiveobject%28withfile_device_%29.md): Deprecated.
- [unarchiveTopLevelObjectWithData:device:error:](mpskeyedunarchiver/unarchivetoplevelobject%28with_device_%29.md): Deprecated.
- [unarchivedObjectOfClass:fromData:device:error:](mpskeyedunarchiver/unarchivedobject%28of_from_device_%29.md)
- [unarchivedObjectOfClasses:fromData:device:error:](mpskeyedunarchiver/unarchivedobject%28ofclasses_from_device_%29.md)

## Relationships

### Inherits From

- [NSKeyedUnarchiver](../foundation/nskeyedunarchiver.md)

### Conforms To

- [MPSDeviceProvider](mpsdeviceprovider.md)

## See Also

### Keyed Archivers

- [NSKeyedArchiver](../foundation/nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [MPSDeviceProvider](mpsdeviceprovider.md): An interface that enables the setting of a Metal device for unarchived objects.
