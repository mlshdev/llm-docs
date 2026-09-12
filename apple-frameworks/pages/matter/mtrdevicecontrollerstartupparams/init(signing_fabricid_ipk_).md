> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerstartupparams/init(signing:fabricid:ipk:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerstartupparams/init(signing:fabricid:ipk:))

# init(signing:fabricId:ipk:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use initWithIPK:fabricID:nocSigner:

## Declaration

```swift
init(signing nocSigner: any MTRKeypair, fabricId: UInt64, ipk: Data)
```

# initWithSigningKeypair:fabricId:ipk: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use initWithIPK:fabricID:nocSigner:

## Declaration

```objectivec
- (instancetype) initWithSigningKeypair:(id<MTRKeypair>) nocSigner fabricId:(uint64_t) fabricId ipk:(NSData *) ipk;
```
