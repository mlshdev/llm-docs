> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdeviceresponsehandler](https://developer.apple.com/documentation/matter/mtrdeviceresponsehandler)

# MTRDeviceResponseHandler (Swift)

**Framework:** Matter  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
typealias MTRDeviceResponseHandler = ([[String : Any]]?, (any Error)?) -> Void
```

# MTRDeviceResponseHandler (Objective-C)

**Framework:** Matter  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
typedef void (^)(NSArray<NSDictionary<NSString *,id> *> *, NSError *) MTRDeviceResponseHandler;
```
