> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/referencerestrictions](https://developer.apple.com/documentation/avfoundation/avasset/referencerestrictions)

# referenceRestrictions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The restrictions that an asset places on how it resolves references to external media.

## Declaration

```swift
var referenceRestrictions: AVAssetReferenceRestrictions { get }
```

<a id="Discussion"></a>

## Discussion

For [AVURLAsset](../avurlasset.md), this property reflects the value passed in for [AVURLAssetReferenceRestrictionsKey](../avurlassetreferencerestrictionskey.md), if any.

The default value for this property is [defaultPolicy](../avassetreferencerestrictions/defaultpolicy.md). See [AVURLAssetReferenceRestrictionsKey](../avurlassetreferencerestrictionskey.md) for more information about reference restrictions.

## See Also

### Retrieving reference restrictions

- [AVAssetReferenceRestrictions](../avassetreferencerestrictions.md): Restrictions to use when resolving references to external media data.

# referenceRestrictions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The restrictions that an asset places on how it resolves references to external media.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAssetReferenceRestrictions referenceRestrictions;
```

<a id="Discussion"></a>

## Discussion

For [AVURLAsset](../avurlasset.md), this property reflects the value passed in for [AVURLAssetReferenceRestrictionsKey](../avurlassetreferencerestrictionskey.md), if any.

The default value for this property is [AVAssetReferenceRestrictionDefaultPolicy](../avassetreferencerestrictions/defaultpolicy.md). See [AVURLAssetReferenceRestrictionsKey](../avurlassetreferencerestrictionskey.md) for more information about reference restrictions.

## See Also

### Retrieving reference restrictions

- [AVAssetReferenceRestrictions](../avassetreferencerestrictions.md): Restrictions to use when resolving references to external media data.
