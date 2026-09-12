> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronouskeyvalueloading/loadvaluesasynchronously(forkeys:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avasynchronouskeyvalueloading/loadvaluesasynchronously(forkeys:completionhandler:))

# loadValuesAsynchronously(forKeys:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

Tells the asset to load the values of all of the specified keys that aren’t already loaded.

> Use [load(\_:isolation:)](load%28__isolation_%29.md) instead.

## Declaration

```swift
func loadValuesAsynchronously(forKeys keys: [String], completionHandler handler: (@Sendable () -> Void)? = nil)
```

```swift
func loadValues(forKeys keys: [String]) async
```

## Parameters

- `keys`: An array of strings containing the keys to load. The keys are the property names of a class that adopts the protocol.
- `handler`: The closure the system calls when the load request completes.

## Mentioned In

- [Loading media data asynchronously](../loading-media-data-asynchronously.md)

<a id="Discussion"></a>

## Discussion

Regardless of the number of keys specified, the system calls the completion handler only once per invocation of this method. The system calls this method:

- Synchronously if the asset already loaded the specified keys, or if an I/O error or other format-related error occurs immediately.
- Asynchronously when the values of the specified keys become loaded, if a loading error occurs at a later stage of processing, or you cancel loading. The system calls the closure on a background queue, so you should dispatch control back to the main queue before performing any user interface-related operations.

The completion states of the specified keys aren’t necessarily the same—some may return loaded, and others may have failed. Check the status of each key individually using the [statusOfValue(forKey:error:)](statusofvalue%28forkey_error_%29.md) method.

The following example shows how to use this method to load an asset’s [isPlayable](../avasset/isplayable.md) key:

```objc
// Load the asset's "commonMetadata" key
[asset loadValuesAsynchronouslyForKeys:@[@"commonMetadata"] completionHandler:^{
    NSError *error = nil;
    AVKeyValueStatus status =
        [asset statusOfValueForKey:@"commonMetadata" error:&error];
    switch (status) {
        case AVKeyValueStatusLoaded:
            // The property successfully loaded. Continue processing.
             break;
        case AVKeyValueStatusFailed:
            // Examine the NSError pointer to determine the failure.
            break;
        case AVKeyValueStatusCancelled:
            // The asset canceled loading.
            break;
        default:
            // Handle all other cases.
            break;
    }
}];
```

## See Also

### Deprecated

- [Deprecated symbols](../avasynchronouskeyvalueloading-deprecated-symbols.md): Review unsupported symbols and their replacements.
- [statusOfValue(forKey:error:)](statusofvalue%28forkey_error_%29.md): Deprecated. Returns a status that indicates whether a property value is immediately available without blocking the calling thread.
- [AVKeyValueStatus](../avkeyvaluestatus.md): Deprecated. Values that indicate the loaded status of a property.

# loadValuesAsynchronouslyForKeys:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the asset to load the values of all of the specified keys that aren’t already loaded.

## Declaration

```objectivec
- (void) loadValuesAsynchronouslyForKeys:(NSArray<NSString *> *) keys completionHandler:(void (^)()) handler;
```

## Parameters

- `keys`: An array of strings containing the keys to load. The keys are the property names of a class that adopts the protocol.
- `handler`: The closure the system calls when the load request completes.

## Mentioned In

- [Loading media data asynchronously](../loading-media-data-asynchronously.md)

<a id="Discussion"></a>

## Discussion

Regardless of the number of keys specified, the system calls the completion handler only once per invocation of this method. The system calls this method:

- Synchronously if the asset already loaded the specified keys, or if an I/O error or other format-related error occurs immediately.
- Asynchronously when the values of the specified keys become loaded, if a loading error occurs at a later stage of processing, or you cancel loading. The system calls the closure on a background queue, so you should dispatch control back to the main queue before performing any user interface-related operations.

The completion states of the specified keys aren’t necessarily the same—some may return loaded, and others may have failed. Check the status of each key individually using the [statusOfValueForKey:error:](statusofvalue%28forkey_error_%29.md) method.

The following example shows how to use this method to load an asset’s [playable](../avasset/isplayable.md) key:

```objc
// Load the asset's "commonMetadata" key
[asset loadValuesAsynchronouslyForKeys:@[@"commonMetadata"] completionHandler:^{
    NSError *error = nil;
    AVKeyValueStatus status =
        [asset statusOfValueForKey:@"commonMetadata" error:&error];
    switch (status) {
        case AVKeyValueStatusLoaded:
            // The property successfully loaded. Continue processing.
             break;
        case AVKeyValueStatusFailed:
            // Examine the NSError pointer to determine the failure.
            break;
        case AVKeyValueStatusCancelled:
            // The asset canceled loading.
            break;
        default:
            // Handle all other cases.
            break;
    }
}];
```

## See Also

### Deprecated

- [Deprecated symbols](../avasynchronouskeyvalueloading-deprecated-symbols.md): Review unsupported symbols and their replacements.
- [statusOfValueForKey:error:](statusofvalue%28forkey_error_%29.md): Deprecated. Returns a status that indicates whether a property value is immediately available without blocking the calling thread.
- [AVKeyValueStatus](../avkeyvaluestatus.md): Deprecated. Values that indicate the loaded status of a property.
