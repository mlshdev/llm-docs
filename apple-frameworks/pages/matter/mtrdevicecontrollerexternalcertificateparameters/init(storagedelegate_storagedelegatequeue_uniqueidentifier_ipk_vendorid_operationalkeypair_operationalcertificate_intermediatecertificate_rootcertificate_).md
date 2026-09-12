> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerexternalcertificateparameters/init(storagedelegate:storagedelegatequeue:uniqueidentifier:ipk:vendorid:operationalkeypair:operationalcertificate:intermediatecertificate:rootcertificate:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerexternalcertificateparameters/init(storagedelegate:storagedelegatequeue:uniqueidentifier:ipk:vendorid:operationalkeypair:operationalcertificate:intermediatecertificate:rootcertificate:))

# init(storageDelegate:storageDelegateQueue:uniqueIdentifier:ipk:vendorID:operationalKeypair:operationalCertificate:intermediateCertificate:rootCertificate:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
init(storageDelegate: any MTRDeviceControllerStorageDelegate, storageDelegateQueue: dispatch_queue_t, uniqueIdentifier: UUID, ipk: Data, vendorID: NSNumber, operationalKeypair: any MTRKeypair, operationalCertificate: Data, intermediateCertificate: Data?, rootCertificate: Data)
```

# initWithStorageDelegate:storageDelegateQueue:uniqueIdentifier:ipk:vendorID:operationalKeypair:operationalCertificate:intermediateCertificate:rootCertificate: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (instancetype) initWithStorageDelegate:(id<MTRDeviceControllerStorageDelegate>) storageDelegate storageDelegateQueue:(dispatch_queue_t) storageDelegateQueue uniqueIdentifier:(NSUUID *) uniqueIdentifier ipk:(NSData *) ipk vendorID:(NSNumber *) vendorID operationalKeypair:(id<MTRKeypair>) operationalKeypair operationalCertificate:(MTRCertificateDERBytes) operationalCertificate intermediateCertificate:(MTRCertificateDERBytes) intermediateCertificate rootCertificate:(MTRCertificateDERBytes) rootCertificate;
```
