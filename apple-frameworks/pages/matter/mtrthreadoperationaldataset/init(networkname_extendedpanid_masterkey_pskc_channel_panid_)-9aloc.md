> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrthreadoperationaldataset/init(networkname:extendedpanid:masterkey:pskc:channel:panid:)-9aloc](https://developer.apple.com/documentation/matter/mtrthreadoperationaldataset/init(networkname:extendedpanid:masterkey:pskc:channel:panid:)-9aloc)

# init(networkName:extendedPANID:masterKey:psKc:channel:panID:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use initWithNetworkName:extendedPANID:masterKey:PSKc:channelNumber:panID

## Declaration

```swift
init?(networkName: String, extendedPANID: Data, masterKey: Data, psKc PSKc: Data, channel: UInt16, panID: Data)
```

# initWithNetworkName:extendedPANID:masterKey:PSKc:channel:panID: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use initWithNetworkName:extendedPANID:masterKey:PSKc:channelNumber:panID

## Declaration

```objectivec
- (instancetype) initWithNetworkName:(NSString *) networkName extendedPANID:(NSData *) extendedPANID masterKey:(NSData *) masterKey PSKc:(NSData *) PSKc channel:(uint16_t) channel panID:(NSData *) panID;
```
