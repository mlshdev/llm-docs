> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanager/removehome(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhomemanager/removehome(_:completionhandler:))

# removeHome(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Removes a home from this home manager.

## Declaration

```swift
func removeHome(_ home: HMHome, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeHome(_ home: HMHome) async throws
```

## Parameters

- `home`: The home to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

This method returns an error if the specified home is not managed by the home manager.

## See Also

### Adding and removing homes

- [addHome(withName:completionHandler:)](addhome%28withname_completionhandler_%29.md): Adds a new home to this home manager.

# removeHome:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes a home from this home manager.

## Declaration

```objectivec
- (void) removeHome:(HMHome *) home completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `home`: The home to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

This method returns an error if the specified home is not managed by the home manager.

## See Also

### Adding and removing homes

- [addHomeWithName:completionHandler:](addhome%28withname_completionhandler_%29.md): Adds a new home to this home manager.
