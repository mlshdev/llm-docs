> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avprovideostorage/replenishcapacity(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avprovideostorage/replenishcapacity(completionhandler:))

# replenishCapacity(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Performs a best-effort attempt to restore Pro Video Storage to the initial capacity specified by the user in Settings app.

## Declaration

```swift
func replenishCapacity(completionHandler: (@Sendable (Int, (any Error)?) -> Void)? = nil)
```

```swift
func replenishCapacity() async throws -> Int
```

## Parameters

- `completionHandler`: The completion handler is called on an arbitrary dispatch queue when the replenish operation finishes. The `remainingCapacity` parameter reflects the new size in bytes, which may be less than [initialCapacity](initialcapacity.md). If the operation fails, the `error` parameter is set and `remainingCapacity` is unchanged or -1 if there was a failure retrieving the value.

<a id="discussion"></a>

## Discussion

If there is enough readily available free space on the file system, Pro Video Storage will be resized to [initialCapacity](initialcapacity.md). Otherwise, this method will attempt to resize it near that value.

Pro Video Storage is busy when the replenish operation starts and is no longer busy when the completion handler is called.

## See Also

### Inspecting capacity

- [initialCapacity](initialcapacity.md): Initial size of Pro Video Storage in bytes.
- [remainingCapacity](remainingcapacity.md): Current size of Pro Video Storage in bytes.

# replenishCapacityWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Performs a best-effort attempt to restore Pro Video Storage to the initial capacity specified by the user in Settings app.

## Declaration

```objectivec
- (void) replenishCapacityWithCompletionHandler:(void (^)(NSInteger remainingCapacity, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler is called on an arbitrary dispatch queue when the replenish operation finishes. The `remainingCapacity` parameter reflects the new size in bytes, which may be less than [initialCapacity](initialcapacity.md). If the operation fails, the `error` parameter is set and `remainingCapacity` is unchanged or -1 if there was a failure retrieving the value.

<a id="discussion"></a>

## Discussion

If there is enough readily available free space on the file system, Pro Video Storage will be resized to [initialCapacity](initialcapacity.md). Otherwise, this method will attempt to resize it near that value.

Pro Video Storage is busy when the replenish operation starts and is no longer busy when the completion handler is called.

## See Also

### Inspecting capacity

- [initialCapacity](initialcapacity.md): Initial size of Pro Video Storage in bytes.
- [remainingCapacity](remainingcapacity.md): Current size of Pro Video Storage in bytes.
