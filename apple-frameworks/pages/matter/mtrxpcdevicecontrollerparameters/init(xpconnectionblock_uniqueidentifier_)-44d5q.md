> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcdevicecontrollerparameters/init(xpconnectionblock:uniqueidentifier:)-44d5q](https://developer.apple.com/documentation/matter/mtrxpcdevicecontrollerparameters/init(xpconnectionblock:uniqueidentifier:)-44d5q)

# init(xpConnectionBlock:uniqueIdentifier:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 18.2+ (deprecated in 26.0) · iPadOS 18.2+ (deprecated in 26.0) · Mac Catalyst 18.2+ (deprecated in 26.0) · macOS 15.2+ (deprecated in 26.0) · tvOS 18.2+ (deprecated in 26.0) · visionOS 2.2+ (deprecated in 26.0) · watchOS 11.2+ (deprecated in 26.0)

> Please use initWithXPCConnectionBlock:uniqueIdentifier:

## Declaration

```swift
init(xpConnectionBlock xpcConnectionBlock: @escaping () -> NSXPCConnection, uniqueIdentifier: UUID)
```

# initWithXPConnectionBlock:uniqueIdentifier: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ (deprecated in 26.0) · iPadOS 18.2+ (deprecated in 26.0) · Mac Catalyst 18.2+ (deprecated in 26.0) · macOS 15.2+ (deprecated in 26.0) · tvOS 18.2+ (deprecated in 26.0) · visionOS 2.2+ (deprecated in 26.0) · watchOS 11.2+ (deprecated in 26.0)

> Please use initWithXPCConnectionBlock:uniqueIdentifier:

## Declaration

```objectivec
- (instancetype) initWithXPConnectionBlock:(NSXPCConnection * (^)()) xpcConnectionBlock uniqueIdentifier:(NSUUID *) uniqueIdentifier;
```
