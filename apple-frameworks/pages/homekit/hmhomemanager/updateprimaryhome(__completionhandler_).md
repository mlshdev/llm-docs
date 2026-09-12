> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanager/updateprimaryhome(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhomemanager/updateprimaryhome(_:completionhandler:))

# updatePrimaryHome(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 16.1) · iPadOS 8.0+ (deprecated in 16.1) · Mac Catalyst 13.1+ (deprecated in 16.1) · tvOS 10.0+ (deprecated in 16.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 9.1)

Updates the primary home of this home manager.

> This method is no longer supported.

## Declaration

```swift
func updatePrimaryHome(_ home: HMHome, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updatePrimaryHome(_ home: HMHome) async throws
```

## Parameters

- `home`: The new primary home. Must be a home managed by this home manager.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing the primary home

- [primaryHome](primaryhome.md): Deprecated. The primary home managed by this home manager.

# updatePrimaryHome:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 16.1) · iPadOS 8.0+ (deprecated in 16.1) · Mac Catalyst 14.0+ (deprecated in 16.1) · tvOS 10.0+ (deprecated in 16.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 9.1)

Updates the primary home of this home manager.

> This method is no longer supported.

## Declaration

```objectivec
- (void) updatePrimaryHome:(HMHome *) home completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `home`: The new primary home. Must be a home managed by this home manager.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing the primary home

- [primaryHome](primaryhome.md): Deprecated. The primary home managed by this home manager.
