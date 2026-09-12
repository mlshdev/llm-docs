> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanager/addhome(withname:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhomemanager/addhome(withname:completionhandler:))

# addHome(withName:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Adds a new home to this home manager.

## Declaration

```swift
func addHome(withName homeName: String, completionHandler completion: @escaping @Sendable (HMHome?, (any Error)?) -> Void)
```

```swift
func addHome(named homeName: String) async throws -> HMHome
```

## Parameters

- `homeName`: The name of the new home. Must not match the name of an existing home.
- `completion`: The block executed after the request is processed.

  - **home**: The newly created home; may be `nil` if creation failed.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Adding and removing homes

- [removeHome(\_:completionHandler:)](removehome%28__completionhandler_%29.md): Removes a home from this home manager.

# addHomeWithName:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds a new home to this home manager.

## Declaration

```objectivec
- (void) addHomeWithName:(NSString *) homeName completionHandler:(void (^)(HMHome *home, NSError *error)) completion;
```

## Parameters

- `homeName`: The name of the new home. Must not match the name of an existing home.
- `completion`: The block executed after the request is processed.

  - **home**: The newly created home; may be `nil` if creation failed.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Adding and removing homes

- [removeHome:completionHandler:](removehome%28__completionhandler_%29.md): Removes a home from this home manager.
