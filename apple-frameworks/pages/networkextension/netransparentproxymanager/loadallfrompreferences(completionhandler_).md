> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netransparentproxymanager/loadallfrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/netransparentproxymanager/loadallfrompreferences(completionhandler:))

# loadAllFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Loads all previously-saved transparent proxy configurations.

## Declaration

```swift
class func loadAllFromPreferences(completionHandler: @escaping @Sendable ([NETransparentProxyManager]?, (any Error)?) -> Void)
```

```swift
class func loadAllFromPreferences() async throws -> [NETransparentProxyManager]
```

## Parameters

- `completionHandler`: A Swift closure or an ObjectiveC block that receives as parameters an array of transparent proxy manager instances loaded from disk and an error. If the error is `nil`, no error occurred.

<a id="Discussion"></a>

## Discussion

This method asychronously reads all previously-saved transparent proxy configurations associated with the calling app.

# loadAllFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Loads all previously-saved transparent proxy configurations.

## Declaration

```objectivec
+ (void) loadAllFromPreferencesWithCompletionHandler:(void (^)(NSArray<NETransparentProxyManager *> *managers, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A Swift closure or an ObjectiveC block that receives as parameters an array of transparent proxy manager instances loaded from disk and an error. If the error is `nil`, no error occurred.

<a id="Discussion"></a>

## Discussion

This method asychronously reads all previously-saved transparent proxy configurations associated with the calling app.
