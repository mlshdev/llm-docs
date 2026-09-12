> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanager/getlocallyavailablelanguageswithcompletionhandler:](https://developer.apple.com/documentation/backgroundassets/baassetpackmanager/getlocallyavailablelanguageswithcompletionhandler:)

# getLocallyAvailableLanguagesWithCompletionHandler:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Gets the languages used by asset packs that are localized and are available locally.

## Declaration

```objectivec
- (void) getLocallyAvailableLanguagesWithCompletionHandler:(void (^)(NSArray<NSString *> *languageIdentifiers)) completionHandler;
```

## Parameters

- `completionHandler`: A block that receives an array of BCP-47 language identifiers.

## See Also

### Inspecting language support

- [resolvedLanguage](resolvedlanguage.md): The language asset packs that are localized for which the system automatically makes available locally, represented as a BCP-47 identifier.
- [reconcilePreferredLanguagesWithCompletionHandler:](reconcilepreferredlanguageswithcompletionhandler_.md): Reconciles the set of locally available asset packs with the current preferred languages.
