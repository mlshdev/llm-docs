> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/baassetpackmanager/getlocalsizeofassetpackwithidentifier:calculationmethod:completionhandler:

# getLocalSizeOfAssetPackWithIdentifier:calculationMethod:completionHandler:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

Calculates a locally available asset pack’s installation size.

## Declaration

```objectivec
- (void) getLocalSizeOfAssetPackWithIdentifier:(NSString *) assetPackIdentifier calculationMethod:(BASizeCalculationMethod) calculationMethod completionHandler:(void (^)(long long size, NSError *error)) completionHandler;
```

## Parameters

- `assetPackIdentifier`: The asset pack’s identifier.
- `calculationMethod`: The method to use to calculate the asset pack’s installation size.
- `completionHandler`: A block that receives the asset pack’s installation size in bytes or an error if one occurs. If the asset pack isn’t available locally, then the `error` parameter will point to an `NSError` object with [BAManagedErrorCodeAssetPackNotFound](../bamanagederrorcode/bamanagederrorcodeassetpacknotfound.md) as its code.

<a id="discussion"></a>

## Discussion

This is different than the download size, which could be smaller. Calculating the size of an asset pack that contains many files can take a long time.
