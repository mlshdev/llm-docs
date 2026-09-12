> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanager/findvendoraccessory(happublickey:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhomemanager/findvendoraccessory(happublickey:completionhandler:))

# findVendorAccessory(hapPublicKey:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.1+

## Declaration

```swift
func findVendorAccessory(hapPublicKey: Data, completionHandler completion: @escaping @Sendable (HMAccessory?, (any Error)?) -> Void)
```

```swift
func findVendorAccessory(hapPublicKey: Data) async throws -> HMAccessory?
```

## Parameters

- `hapPublicKey`: The HAP Long Term Public Key of the accessory. This has a length of 32 bytes. Refer to the HomeKit Accessory Protocol Specification for details.

<a id="discussion"></a>

## Discussion

Finds a vendor HAP accessory based on its Long Term Public Key.

If no matching accessory exists, or if the current process does not have vendor-level access to the matching accessory, the result will be nil.

An error will be returned if this method is used before available homes have been retrieved by the HMHomeManager, i.e. before the homeManagerDidUpdateHomes: delegate method has been invoked.

# findVendorAccessoryWithHAPPublicKey:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.1+

## Declaration

```objectivec
- (void) findVendorAccessoryWithHAPPublicKey:(NSData *) hapPublicKey completionHandler:(void (^)(HMAccessory *, NSError *)) completion;
```

## Parameters

- `hapPublicKey`: The HAP Long Term Public Key of the accessory. This has a length of 32 bytes. Refer to the HomeKit Accessory Protocol Specification for details.

<a id="discussion"></a>

## Discussion

Finds a vendor HAP accessory based on its Long Term Public Key.

If no matching accessory exists, or if the current process does not have vendor-level access to the matching accessory, the result will be nil.

An error will be returned if this method is used before available homes have been retrieved by the HMHomeManager, i.e. before the homeManagerDidUpdateHomes: delegate method has been invoked.
