> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skarcadeservice/arcadesubscriptionstatus(withnonce:resulthandler:)](https://developer.apple.com/documentation/storekit/skarcadeservice/arcadesubscriptionstatus(withnonce:resulthandler:))

# arcadeSubscriptionStatus(withNonce:resultHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class func arcadeSubscriptionStatus(withNonce nonce: UInt64, resultHandler: @escaping (Data?, UInt32, Data?, UInt32, (any Error)?) -> Void)
```

## See Also

### Type Methods

- [registerArcadeAppWithRandom(fromLib:randomFromLibLength:resultHandler:)](registerarcadeappwithrandom%28fromlib_randomfromliblength_resulthandler_%29.md)
- [repairArcadeApp()](repairarcadeapp%28%29.md)

# arcadeSubscriptionStatusWithNonce:resultHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (void) arcadeSubscriptionStatusWithNonce:(uint64_t) nonce resultHandler:(void (^)(NSData *subscriptionStatus, uint32_t subscriptionStatusLength, NSData *cmacOfNonce, uint32_t cmacOfNonceLength, NSError *error)) resultHandler;
```

## See Also

### Type Methods

- [registerArcadeAppWithRandomFromLib:randomFromLibLength:resultHandler:](registerarcadeappwithrandom%28fromlib_randomfromliblength_resulthandler_%29.md)
- [repairArcadeApp](repairarcadeapp%28%29.md)
