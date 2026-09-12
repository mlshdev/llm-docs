> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuilocation](https://developer.apple.com/documentation/xcuiautomation/xcuilocation)

# XCUILocation (Swift)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A proxy that simulates a device’s location in terms of its longitude, latitude, and course information.

## Declaration

```swift
@MainActor class XCUILocation
```

## Topics

### Creating a location

- [init(location:)](xcuilocation/init%28location_%29.md): Initializes a proxy that simulates latitude, longitude, and course information based on the location object you provide.

### Determining the location

- [location](xcuilocation/location.md): Returns the object that contains the latitude, longitude, and course information this proxy simulates for the device.
- [debugDescription](xcuilocation/debugdescription.md): A textual description of the location suitable for debugging.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Rotating and changing location

- [orientation](xcuidevice/orientation.md): The orientation of the device.
- [location](xcuidevice/location.md): The proxy location a test uses to simulate longitude, latitude, and course information for the device.

# XCUILocation (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A proxy that simulates a device’s location in terms of its longitude, latitude, and course information.

## Declaration

```objectivec
@interface XCUILocation : NSObject
```

## Topics

### Creating a location

- [initWithLocation:](xcuilocation/init%28location_%29.md): Initializes a proxy that simulates latitude, longitude, and course information based on the location object you provide.

### Determining the location

- [location](xcuilocation/location.md): Returns the object that contains the latitude, longitude, and course information this proxy simulates for the device.
- [debugDescription](xcuilocation/debugdescription.md): A textual description of the location suitable for debugging.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Rotating and changing location

- [orientation](xcuidevice/orientation.md): The orientation of the device.
- [location](xcuidevice/location.md): The proxy location a test uses to simulate longitude, latitude, and course information for the device.
