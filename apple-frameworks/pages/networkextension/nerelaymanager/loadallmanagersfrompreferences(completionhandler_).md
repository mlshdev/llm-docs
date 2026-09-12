> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelaymanager/loadallmanagersfrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nerelaymanager/loadallmanagersfrompreferences(completionhandler:))

# loadAllManagersFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Asynchronously reads all the relay configurations previously created and saved by the calling app.

## Declaration

```swift
class func loadAllManagersFromPreferences(completionHandler: @escaping @Sendable ([NERelayManager], (any Error)?) -> Void)
```

```swift
class func loadAllManagersFromPreferences() async throws -> [NERelayManager]
```

## Parameters

- `completionHandler`: A block that receives an array of [NERelayManager](../nerelaymanager.md) objects. If the system failed to read any [NERelay](../nerelay.md) configurations read from the disk, the array is passes to the block is empty. The [NSError](../../foundation/nserror.md) passed to this block is `nil` if the load operation succeeded, non-`nil` otherwise.

# loadAllManagersFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Asynchronously reads all the relay configurations previously created and saved by the calling app.

## Declaration

```objectivec
+ (void) loadAllManagersFromPreferencesWithCompletionHandler:(void (^)(NSArray<NERelayManager *> *managers, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that receives an array of [NERelayManager](../nerelaymanager.md) objects. If the system failed to read any [NERelay](../nerelay.md) configurations read from the disk, the array is passes to the block is empty. The [NSError](../../foundation/nserror.md) passed to this block is `nil` if the load operation succeeded, non-`nil` otherwise.
