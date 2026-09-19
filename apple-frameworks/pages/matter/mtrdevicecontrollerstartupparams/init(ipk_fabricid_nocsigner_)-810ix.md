> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevicecontrollerstartupparams/init(ipk:fabricid:nocsigner:)-810ix

# init(ipk:fabricID:nocSigner:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
init(ipk: Data, fabricID: NSNumber, nocSigner: any MTRKeypair)
```

# initWithIPK:fabricID:nocSigner: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (instancetype) initWithIPK:(NSData *) ipk fabricID:(NSNumber *) fabricID nocSigner:(id<MTRKeypair>) nocSigner;
```
