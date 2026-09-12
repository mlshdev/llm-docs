> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedasset/fragmentedassetwithurl:options:](https://developer.apple.com/documentation/avfoundation/avfragmentedasset/fragmentedassetwithurl:options:)

# fragmentedAssetWithURL:options:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a fragmented asset for the media at the specified URL.

## Declaration

```objectivec
+ (instancetype) fragmentedAssetWithURL:(NSURL *) URL options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `URL`: A URL that points to the desired media resource.
- `options`: A dictionary of keys for specifying initialization options. Valid values are [AVURLAssetPreferPreciseDurationAndTimingKey](../avurlassetpreferprecisedurationandtimingkey.md) and [AVURLAssetReferenceRestrictionsKey](../avurlassetreferencerestrictionskey.md).

<a id="return-value"></a>

## Return Value

A fragmented asset that models the media at the specified URL.
