> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/invalidateallpersistablecontentkeys(forapp:options:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/invalidateallpersistablecontentkeys(forapp:options:completionhandler:))

# invalidateAllPersistableContentKeys(forApp:options:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Invalidates all of an app’s persistable content keys and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.

## Declaration

```swift
func invalidateAllPersistableContentKeys(forApp appIdentifier: Data, options: [AVContentKeySessionServerPlaybackContextOption : Any]? = nil, completionHandler handler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func invalidateAllPersistableContentKeys(forApp appIdentifier: Data, options: [AVContentKeySessionServerPlaybackContextOption : Any]? = nil) async throws -> Data
```

## Parameters

- `appIdentifier`: An opaque identifier for the app.
- `options`: Additional data necessary to generate the server playback context. Pass `nil` to indicate no additional options.

  See [AVContentKeySessionServerPlaybackContextOption](../avcontentkeysessionserverplaybackcontextoption.md) for supported options.
- `handler`: The completion handler callback.

## See Also

### Invalidating content keys

- [invalidatePersistableContentKey(\_:options:completionHandler:)](invalidatepersistablecontentkey%28__options_completionhandler_%29.md): Invalidates the persistable content key and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.
- [AVContentKeySessionServerPlaybackContextOption](../avcontentkeysessionserverplaybackcontextoption.md): Options for specifying additional information for generating server playback context (SPC).

# invalidateAllPersistableContentKeysForApp:options:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Invalidates all of an app’s persistable content keys and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.

## Declaration

```objectivec
- (void) invalidateAllPersistableContentKeysForApp:(NSData *) appIdentifier options:(NSDictionary<NSString *,id> *) options completionHandler:(void (^)(NSData *secureTokenData, NSError *error)) handler;
```

## Parameters

- `appIdentifier`: An opaque identifier for the app.
- `options`: Additional data necessary to generate the server playback context. Pass `nil` to indicate no additional options.

  See [AVContentKeySessionServerPlaybackContextOption](../avcontentkeysessionserverplaybackcontextoption.md) for supported options.
- `handler`: The completion handler callback.

## See Also

### Invalidating content keys

- [invalidatePersistableContentKey:options:completionHandler:](invalidatepersistablecontentkey%28__options_completionhandler_%29.md): Invalidates the persistable content key and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.
- [AVContentKeySessionServerPlaybackContextOption](../avcontentkeysessionserverplaybackcontextoption.md): Options for specifying additional information for generating server playback context (SPC).
