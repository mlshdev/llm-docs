> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/baassetpackmanager/localversionofassetpackwithidentifier:error:

# localVersionOfAssetPackWithIdentifier:error:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

Returns a locally available asset pack’s version number.

## Declaration

```objectivec
- (NSInteger) localVersionOfAssetPackWithIdentifier:(NSString *) assetPackIdentifier error:(NSError **) error;
```

## Parameters

- `assetPackIdentifier`: The asset pack’s identifier.
- `error`: A pointer to an error that will be set if an error occurs. If the asset pack isn’t available locally, then `error` will point to an `NSError` object with [BAManagedErrorCodeAssetPackNotFound](../bamanagederrorcode/bamanagederrorcodeassetpacknotfound.md) as its code.

<a id="return-value"></a>

## Return Value

The asset pack’s version number. A return value of `-1` indicates that an error occurred.
