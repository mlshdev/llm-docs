> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nehotspotconfigurationmanager/joinaccessoryhotspotwithoutsecurity(_:completionhandler:)

# joinAccessoryHotspotWithoutSecurity(\_:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```swift
func joinAccessoryHotspotWithoutSecurity(_ accessory: ASAccessory, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func joinAccessoryHotspotWithoutSecurity(_ accessory: ASAccessory) async throws
```

# joinAccessoryHotspotWithoutSecurity:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```objectivec
- (void) joinAccessoryHotspotWithoutSecurity:(ASAccessory *) accessory completionHandler:(void (^)(NSError *error)) completionHandler;
```
