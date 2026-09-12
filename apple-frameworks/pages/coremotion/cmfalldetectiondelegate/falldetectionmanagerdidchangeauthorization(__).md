> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmfalldetectiondelegate/falldetectionmanagerdidchangeauthorization(_:)](https://developer.apple.com/documentation/coremotion/cmfalldetectiondelegate/falldetectionmanagerdidchangeauthorization(_:))

# fallDetectionManagerDidChangeAuthorization(\_:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 7.2+

Indicates the fall detection authorization status changed.

## Declaration

```swift
optional func fallDetectionManagerDidChangeAuthorization(_ fallDetectionManager: CMFallDetectionManager)
```

## Parameters

- `fallDetectionManager`: The fall detection manager for the event.

<a id="Discussion"></a>

## Discussion

The system calls this method after the fall detection authorization status changes. Check the fall detection manager’s [authorizationStatus](../cmfalldetectionmanager/authorizationstatus.md) property to determine the current status.

# fallDetectionManagerDidChangeAuthorization: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 7.2+

Indicates the fall detection authorization status changed.

## Declaration

```objectivec
- (void) fallDetectionManagerDidChangeAuthorization:(CMFallDetectionManager *) fallDetectionManager;
```

## Parameters

- `fallDetectionManager`: The fall detection manager for the event.

<a id="Discussion"></a>

## Discussion

The system calls this method after the fall detection authorization status changes. Check the fall detection manager’s [authorizationStatus](../cmfalldetectionmanager/authorizationstatus.md) property to determine the current status.
