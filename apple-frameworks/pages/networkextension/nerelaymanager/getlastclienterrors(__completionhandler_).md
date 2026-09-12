> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelaymanager/getlastclienterrors(_:completionhandler:)](https://developer.apple.com/documentation/networkextension/nerelaymanager/getlastclienterrors(_:completionhandler:))

# getLastClientErrors(\_:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func getLastClientErrors(_ seconds: TimeInterval, completionHandler: @escaping @Sendable ([any Error]?) -> Void)
```

```swift
func lastClientErrors(_ seconds: TimeInterval) async -> [any Error]?
```

# getLastClientErrors:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
- (void) getLastClientErrors:(NSTimeInterval) seconds completionHandler:(void (^)(NSArray<NSError *> *errors)) completionHandler;
```
