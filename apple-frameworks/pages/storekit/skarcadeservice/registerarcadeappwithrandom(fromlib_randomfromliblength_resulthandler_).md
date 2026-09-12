> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skarcadeservice/registerarcadeappwithrandom(fromlib:randomfromliblength:resulthandler:)](https://developer.apple.com/documentation/storekit/skarcadeservice/registerarcadeappwithrandom(fromlib:randomfromliblength:resulthandler:))

# registerArcadeAppWithRandom(fromLib:randomFromLibLength:resultHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class func registerArcadeAppWithRandom(fromLib randomFromLib: Data, randomFromLibLength: UInt32, resultHandler: @escaping (Data?, UInt32, Data?, UInt32, (any Error)?) -> Void)
```

## See Also

### Type Methods

- [arcadeSubscriptionStatus(withNonce:resultHandler:)](arcadesubscriptionstatus%28withnonce_resulthandler_%29.md)
- [repairArcadeApp()](repairarcadeapp%28%29.md)

# registerArcadeAppWithRandomFromLib:randomFromLibLength:resultHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (void) registerArcadeAppWithRandomFromLib:(NSData *) randomFromLib randomFromLibLength:(uint32_t) randomFromLibLength resultHandler:(void (^)(NSData *randomFromFP, uint32_t randomFromFPLength, NSData *cmacOfAppPID, uint32_t cmacOfAppPIDLength, NSError *error)) resultHandler;
```

## See Also

### Type Methods

- [arcadeSubscriptionStatusWithNonce:resultHandler:](arcadesubscriptionstatus%28withnonce_resulthandler_%29.md)
- [repairArcadeApp](repairarcadeapp%28%29.md)
