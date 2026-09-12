> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/default](https://developer.apple.com/documentation/watchconnectivity/wcsession/default)

# default (Swift)

**Framework:** Watch Connectivity  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the singleton session object for the current device.

## Declaration

```swift
class var `default`: WCSession { get }
```

<a id="return-value"></a>

## Return Value

The session object for the current device.

<a id="Discussion"></a>

## Discussion

Call the [isSupported()](issupported%28%29.md) method before calling this method to make sure you can use session objects for communication.

## See Also

### Getting the Default Session

- [isSupported()](issupported%28%29.md): Returns a Boolean value indicating whether the current iOS device is able to use a session object.

# defaultSession (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the singleton session object for the current device.

## Declaration

```objectivec
@property (class, readonly) WCSession * defaultSession;
```

<a id="return-value"></a>

## Return Value

The session object for the current device.

<a id="Discussion"></a>

## Discussion

Call the [isSupported](issupported%28%29.md) method before calling this method to make sure you can use session objects for communication.

## See Also

### Getting the Default Session

- [isSupported](issupported%28%29.md): Returns a Boolean value indicating whether the current iOS device is able to use a session object.
