> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronouskeyvalueloading/statusofvalue(forkey:error:)](https://developer.apple.com/documentation/avfoundation/avasynchronouskeyvalueloading/statusofvalue(forkey:error:))

# statusOfValue(forKey:error:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

Returns a status that indicates whether a property value is immediately available without blocking the calling thread.

> Use [status(of:)](status%28of_%29.md) instead.

## Declaration

```swift
func statusOfValue(forKey key: String, error outError: NSErrorPointer) -> AVKeyValueStatus
```

## Parameters

- `key`: The property whose status you want.
- `outError`: If the status of the value for the `key` is [AVKeyValueStatus.failed](../avkeyvaluestatus/failed.md), the system sets this pointer to an [NSError](../../foundation/nserror.md) object that describes the failure.

<a id="return-value"></a>

## Return Value

The current status of the requested key.

## See Also

### Deprecated

- [Deprecated symbols](../avasynchronouskeyvalueloading-deprecated-symbols.md): Review unsupported symbols and their replacements.
- [loadValuesAsynchronously(forKeys:completionHandler:)](loadvaluesasynchronously%28forkeys_completionhandler_%29.md): Deprecated. Tells the asset to load the values of all of the specified keys that aren’t already loaded.
- [AVKeyValueStatus](../avkeyvaluestatus.md): Deprecated. Values that indicate the loaded status of a property.

# statusOfValueForKey:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a status that indicates whether a property value is immediately available without blocking the calling thread.

## Declaration

```objectivec
- (AVKeyValueStatus) statusOfValueForKey:(NSString *) key error:(NSError **) outError;
```

## Parameters

- `key`: The property whose status you want.
- `outError`: If the status of the value for the `key` is [AVKeyValueStatusFailed](../avkeyvaluestatus/failed.md), the system sets this pointer to an [NSError](../../foundation/nserror.md) object that describes the failure.

<a id="return-value"></a>

## Return Value

The current status of the requested key.

## See Also

### Deprecated

- [Deprecated symbols](../avasynchronouskeyvalueloading-deprecated-symbols.md): Review unsupported symbols and their replacements.
- [loadValuesAsynchronouslyForKeys:completionHandler:](loadvaluesasynchronously%28forkeys_completionhandler_%29.md): Deprecated. Tells the asset to load the values of all of the specified keys that aren’t already loaded.
- [AVKeyValueStatus](../avkeyvaluestatus.md): Deprecated. Values that indicate the loaded status of a property.
