> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfigurationmanager/joinaccessoryhotspot(_:passphrase:completionhandler:)](https://developer.apple.com/documentation/networkextension/nehotspotconfigurationmanager/joinaccessoryhotspot(_:passphrase:completionhandler:))

# joinAccessoryHotspot(\_:passphrase:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```swift
func joinAccessoryHotspot(_ accessory: ASAccessory, passphrase: String, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func joinAccessoryHotspot(_ accessory: ASAccessory, passphrase: String) async throws
```

# joinAccessoryHotspot:passphrase:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```objectivec
- (void) joinAccessoryHotspot:(ASAccessory *) accessory passphrase:(NSString *) passphrase completionHandler:(void (^)(NSError *error)) completionHandler;
```
