> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/invalidatepersistablecontentkey(_:options:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/invalidatepersistablecontentkey(_:options:completionhandler:))

# invalidatePersistableContentKey(\_:options:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Invalidates the persistable content key and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.

## Declaration

```swift
func invalidatePersistableContentKey(_ persistableContentKeyData: Data, options: [AVContentKeySessionServerPlaybackContextOption : Any]? = nil, completionHandler handler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func invalidatePersistableContentKey(_ persistableContentKeyData: Data, options: [AVContentKeySessionServerPlaybackContextOption : Any]? = nil) async throws -> Data
```

## Parameters

- `persistableContentKeyData`: The persistable content key data to invalidate.
- `options`: Additional options to use when generating the server playback context. Pass `nil` to indicate no additional options.
- `handler`: The completion handler callback.

## See Also

### Invalidating content keys

- [invalidateAllPersistableContentKeys(forApp:options:completionHandler:)](invalidateallpersistablecontentkeys%28forapp_options_completionhandler_%29.md): Invalidates all of an app’s persistable content keys and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.
- [AVContentKeySessionServerPlaybackContextOption](../avcontentkeysessionserverplaybackcontextoption.md): Options for specifying additional information for generating server playback context (SPC).

# invalidatePersistableContentKey:options:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Invalidates the persistable content key and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.

## Declaration

```objectivec
- (void) invalidatePersistableContentKey:(NSData *) persistableContentKeyData options:(NSDictionary<NSString *,id> *) options completionHandler:(void (^)(NSData *secureTokenData, NSError *error)) handler;
```

## Parameters

- `persistableContentKeyData`: The persistable content key data to invalidate.
- `options`: Additional options to use when generating the server playback context. Pass `nil` to indicate no additional options.
- `handler`: The completion handler callback.

## See Also

### Invalidating content keys

- [invalidateAllPersistableContentKeysForApp:options:completionHandler:](invalidateallpersistablecontentkeys%28forapp_options_completionhandler_%29.md): Invalidates all of an app’s persistable content keys and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.
- [AVContentKeySessionServerPlaybackContextOption](../avcontentkeysessionserverplaybackcontextoption.md): Options for specifying additional information for generating server playback context (SPC).
