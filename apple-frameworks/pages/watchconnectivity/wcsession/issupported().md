> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/issupported()](https://developer.apple.com/documentation/watchconnectivity/wcsession/issupported())

# isSupported() (Swift)

**Framework:** Watch Connectivity  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the current iOS device is able to use a session object.

## Declaration

```swift
class func isSupported() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a session object is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Before retrieving the default session object, call this method to verify that the current device supports watch connectivity. Session objects are always available on Apple Watch. They are also available on iPhones that support pairing with an Apple Watch. For all other devices, this method returns [false](https://developer.apple.com/documentation/swift/false) to indicate that you cannot use the classes and methods of this framework.

## See Also

### Getting the Default Session

- [default](default.md): Returns the singleton session object for the current device.

# isSupported (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the current iOS device is able to use a session object.

## Declaration

```objectivec
+ (BOOL) isSupported;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a session object is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Before retrieving the default session object, call this method to verify that the current device supports watch connectivity. Session objects are always available on Apple Watch. They are also available on iPhones that support pairing with an Apple Watch. For all other devices, this method returns [false](https://developer.apple.com/documentation/swift/false) to indicate that you cannot use the classes and methods of this framework.

## See Also

### Getting the Default Session

- [defaultSession](default.md): Returns the singleton session object for the current device.
