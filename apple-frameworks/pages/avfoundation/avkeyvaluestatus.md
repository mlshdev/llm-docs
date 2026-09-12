> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avkeyvaluestatus](https://developer.apple.com/documentation/avfoundation/avkeyvaluestatus)

# AVKeyValueStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

Values that indicate the loaded status of a property.

> Use [AVAsyncProperty.Status](avasyncproperty/status.md) instead.

## Declaration

```swift
enum AVKeyValueStatus
```

## Topics

### Status values

- [AVKeyValueStatus.unknown](avkeyvaluestatus/unknown.md): Deprecated. The property value’s status is unknown.
- [AVKeyValueStatus.loading](avkeyvaluestatus/loading.md): Deprecated. The system is loading the property value.
- [AVKeyValueStatus.loaded](avkeyvaluestatus/loaded.md): Deprecated. The property value is ready to use.
- [AVKeyValueStatus.failed](avkeyvaluestatus/failed.md): Deprecated. The system is unable to load the property value.
- [AVKeyValueStatus.cancelled](avkeyvaluestatus/cancelled.md): Deprecated. You canceled loading a property value.

### Initializers

- [init(rawValue:)](avkeyvaluestatus/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [Deprecated symbols](avasynchronouskeyvalueloading-deprecated-symbols.md): Review unsupported symbols and their replacements.
- [loadValuesAsynchronously(forKeys:completionHandler:)](avasynchronouskeyvalueloading/loadvaluesasynchronously%28forkeys_completionhandler_%29.md): Deprecated. Tells the asset to load the values of all of the specified keys that aren’t already loaded.
- [statusOfValue(forKey:error:)](avasynchronouskeyvalueloading/statusofvalue%28forkey_error_%29.md): Deprecated. Returns a status that indicates whether a property value is immediately available without blocking the calling thread.

# AVKeyValueStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Values that indicate the loaded status of a property.

## Declaration

```objectivec
enum AVKeyValueStatus : NSInteger;
```

## Topics

### Status values

- [AVKeyValueStatusUnknown](avkeyvaluestatus/unknown.md): Deprecated. The property value’s status is unknown.
- [AVKeyValueStatusLoading](avkeyvaluestatus/loading.md): Deprecated. The system is loading the property value.
- [AVKeyValueStatusLoaded](avkeyvaluestatus/loaded.md): Deprecated. The property value is ready to use.
- [AVKeyValueStatusFailed](avkeyvaluestatus/failed.md): Deprecated. The system is unable to load the property value.
- [AVKeyValueStatusCancelled](avkeyvaluestatus/cancelled.md): Deprecated. You canceled loading a property value.

## See Also

### Deprecated

- [Deprecated symbols](avasynchronouskeyvalueloading-deprecated-symbols.md): Review unsupported symbols and their replacements.
- [loadValuesAsynchronouslyForKeys:completionHandler:](avasynchronouskeyvalueloading/loadvaluesasynchronously%28forkeys_completionhandler_%29.md): Deprecated. Tells the asset to load the values of all of the specified keys that aren’t already loaded.
- [statusOfValueForKey:error:](avasynchronouskeyvalueloading/statusofvalue%28forkey_error_%29.md): Deprecated. Returns a status that indicates whether a property value is immediately available without blocking the calling thread.
