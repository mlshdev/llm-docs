> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontroller/computepaseverifier(forsetuppasscode:iterations:salt:)](https://developer.apple.com/documentation/matter/mtrdevicecontroller/computepaseverifier(forsetuppasscode:iterations:salt:))

# computePASEVerifier(forSetupPasscode:iterations:salt:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class func computePASEVerifier(forSetupPasscode setupPasscode: NSNumber, iterations: NSNumber, salt: Data) throws -> Data
```

# computePASEVerifierForSetupPasscode:iterations:salt:error: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
+ (NSData *) computePASEVerifierForSetupPasscode:(NSNumber *) setupPasscode iterations:(NSNumber *) iterations salt:(NSData *) salt error:(NSError **) error;
```
