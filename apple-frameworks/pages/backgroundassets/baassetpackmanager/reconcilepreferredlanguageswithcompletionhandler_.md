> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanager/reconcilepreferredlanguageswithcompletionhandler:](https://developer.apple.com/documentation/backgroundassets/baassetpackmanager/reconcilepreferredlanguageswithcompletionhandler:)

# reconcilePreferredLanguagesWithCompletionHandler:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Reconciles the set of locally available asset packs with the current preferred languages.

## Declaration

```objectivec
- (void) reconcilePreferredLanguagesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that’s called when the the system has successfully reconciled the set of locally available asset packs with the user’s preferred languages or that receives an error if one occurs.

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../reducing-download-and-storage-demands-with-localized-asset-packs.md)

<a id="discussion"></a>

## Discussion

This method downloads any missing localized asset packs, waits for those downloads to finish, and removes any unneeded ones. If you’ve overridden the preferred languages by setting [resolvedLanguage](resolvedlanguage.md), then this method respects that selection. Don’t use this method if your application offers split-language functionality; instead, handle the reconciliation manually.

## See Also

### Inspecting language support

- [getLocallyAvailableLanguagesWithCompletionHandler:](getlocallyavailablelanguageswithcompletionhandler_.md): Gets the languages used by asset packs that are localized and are available locally.
- [resolvedLanguage](resolvedlanguage.md): The language asset packs that are localized for which the system automatically makes available locally, represented as a BCP-47 identifier.
