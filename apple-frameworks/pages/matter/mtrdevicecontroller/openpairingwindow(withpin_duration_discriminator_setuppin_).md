> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontroller/openpairingwindow(withpin:duration:discriminator:setuppin:)](https://developer.apple.com/documentation/matter/mtrdevicecontroller/openpairingwindow(withpin:duration:discriminator:setuppin:))

# openPairingWindow(withPIN:duration:discriminator:setupPIN:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use MTRDevice or MTRBaseDevice openCommissioningWindowWithSetupPasscode

## Declaration

```swift
func openPairingWindow(withPIN deviceID: UInt64, duration: Int, discriminator: Int, setupPIN: Int) throws -> String
```

# openPairingWindowWithPIN:duration:discriminator:setupPIN:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use MTRDevice or MTRBaseDevice openCommissioningWindowWithSetupPasscode

## Declaration

```objectivec
- (NSString *) openPairingWindowWithPIN:(uint64_t) deviceID duration:(NSUInteger) duration discriminator:(NSUInteger) discriminator setupPIN:(NSUInteger) setupPIN error:(NSError **) error;
```
