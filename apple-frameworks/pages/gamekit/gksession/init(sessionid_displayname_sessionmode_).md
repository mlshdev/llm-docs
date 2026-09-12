> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/init(sessionid:displayname:sessionmode:)](https://developer.apple.com/documentation/gamekit/gksession/init(sessionid:displayname:sessionmode:))

# init(sessionID:displayName:sessionMode:) (Swift)

**Framework:** GameKit  
**Kind:** Initializer  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

Initializes and returns a newly allocated session.

> No longer available

## Declaration

```swift
init!(sessionID: String!, displayName name: String!, sessionMode mode: GKSessionMode)
```

## Parameters

- `sessionID`: A unique string that identifies your application. Your `sessionID` should be the short name of an approved Bonjour service type. If `nil`, the session uses the application’s bundle identifier to create a `sessionID` string.
- `name`: A string identifying the user to display to other peers. If `nil`, the session uses the device name.
- `mode`: The mode the session should run in. See [GKSessionMode](../gksessionmode.md) for possible values.

<a id="return-value"></a>

## Return Value

An initialized session object, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

Only sessions running with the same `sessionID` are visible to your session.

# initWithSessionID:displayName:sessionMode: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

Initializes and returns a newly allocated session.

> No longer available

## Declaration

```objectivec
- (id) initWithSessionID:(NSString *) sessionID displayName:(NSString *) name sessionMode:(GKSessionMode) mode;
```

## Parameters

- `sessionID`: A unique string that identifies your application. Your `sessionID` should be the short name of an approved Bonjour service type. If `nil`, the session uses the application’s bundle identifier to create a `sessionID` string.
- `name`: A string identifying the user to display to other peers. If `nil`, the session uses the device name.
- `mode`: The mode the session should run in. See [GKSessionMode](../gksessionmode.md) for possible values.

<a id="return-value"></a>

## Return Value

An initialized session object, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

Only sessions running with the same `sessionID` are visible to your session.
