> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext/loadbroadcastingapplicationinfo(completion:)](https://developer.apple.com/documentation/foundation/nsextensioncontext/loadbroadcastingapplicationinfo(completion:))

# loadBroadcastingApplicationInfo(completion:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

> No longer supported

## Declaration

```swift
func loadBroadcastingApplicationInfo(completion handler: @escaping @Sendable (String, String, UIImage?) -> Void)
```

```swift
func loadBroadcastingApplicationInfo() async -> (String, String, UIImage?)
```

```swift
func loadBroadcastingApplicationInfo(completion handler: @escaping @Sendable (String, String, NSImage?) -> Void)
```

```swift
func loadBroadcastingApplicationInfo() async -> (String, String, NSImage?)
```

<a id="Discussion"></a>

## Discussion

## See Also

### Supporting broadcasting

- [completeRequest(withBroadcast:setupInfo:)](completerequest%28withbroadcast_setupinfo_%29.md): Deprecated.

# loadBroadcastingApplicationInfoWithCompletion: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

> No longer supported

## Declaration

```objectivec
- (void) loadBroadcastingApplicationInfoWithCompletion:(void (^)(NSString *bundleID, NSString *displayName, UIImage *appIcon)) handler;
```

```objectivec
- (void) loadBroadcastingApplicationInfoWithCompletion:(void (^)(NSString *bundleID, NSString *displayName, NSImage *appIcon)) handler;
```

<a id="Discussion"></a>

## Discussion

## See Also

### Supporting broadcasting

- [completeRequestWithBroadcastURL:setupInfo:](completerequest%28withbroadcast_setupinfo_%29.md): Deprecated.
