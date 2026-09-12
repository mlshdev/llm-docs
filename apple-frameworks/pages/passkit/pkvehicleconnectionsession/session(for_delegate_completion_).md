> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkvehicleconnectionsession/session(for:delegate:completion:)](https://developer.apple.com/documentation/passkit/pkvehicleconnectionsession/session(for:delegate:completion:))

# session(for:delegate:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS · visionOS 1.0+ · watchOS 8.5+

## Declaration

```swift
class func session(for pass: PKSecureElementPass, delegate: any PKVehicleConnectionDelegate, completion: @escaping @Sendable (PKVehicleConnectionSession?, (any Error)?) -> Void)
```

```swift
class func session(for pass: PKSecureElementPass, delegate: any PKVehicleConnectionDelegate) async throws -> PKVehicleConnectionSession
```

# sessionForPass:delegate:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS · visionOS 1.0+ · watchOS 8.5+

## Declaration

```objectivec
+ (void) sessionForPass:(PKSecureElementPass *) pass delegate:(id<PKVehicleConnectionDelegate>) delegate completion:(void (^)(PKVehicleConnectionSession *session, NSError *error)) completion;
```
