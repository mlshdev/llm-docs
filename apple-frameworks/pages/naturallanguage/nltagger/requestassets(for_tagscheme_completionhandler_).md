> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/requestassets(for:tagscheme:completionhandler:)](https://developer.apple.com/documentation/naturallanguage/nltagger/requestassets(for:tagscheme:completionhandler:))

# requestAssets(for:tagScheme:completionHandler:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Asks the Natural Language framework to load any missing assets for a tag scheme onto the device for the given language.

## Declaration

```swift
class func requestAssets(for language: NLLanguage, tagScheme: NLTagScheme, completionHandler: @escaping @Sendable (NLTagger.AssetsResult, (any Error)?) -> Void)
```

```swift
class func requestAssets(for language: NLLanguage, tagScheme: NLTagScheme) async throws -> NLTagger.AssetsResult
```

## Parameters

- `language`: The language of the tag scheme that you’re asking the framework to load onto the device.
- `tagScheme`: The tag scheme that you’re asking the framework to load onto the device.
- `completionHandler`: A closure the framework uses to notify your app when the tag scheme request has completed.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func requestAssets(for language: NLLanguage, tagScheme: NLTagScheme) async throws -> NLTagger.AssetsResult
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Before using this method, use [availableTagSchemes(for:language:)](availabletagschemes%28for_language_%29.md) to check whether a tag scheme is available on the device. When a tag scheme is unavailable for a specific language, it may be because the framework hasn’t loaded the support for that language.

Use this method to ask the [Natural Language](../../naturallanguage.md) framework to load any missing assets for that tag scheme. This method returns immediately but the framework may need time to complete the request. When the framework completes the request, it notifies your app with the `completionHandler` you provided to the method. In your completion handler, use the `result` parameter to check whether the tag scheme is now available.

The [Natural Language](../../naturallanguage.md) framework may call your `completionHandler` immediately if it knows the state of the tag scheme’s assets or if it experiences an error.

## See Also

### Getting the tag schemes

- [availableTagSchemes(for:language:)](availabletagschemes%28for_language_%29.md): Retrieves the tag schemes available for a particular unit (like word or sentence) and language on the current device.
- [NLTagger.AssetsResult](assetsresult.md): The response to an asset request.
- [tagSchemes](tagschemes.md): The tag schemes configured for this linguistic tagger.
- [NLTagScheme](../nltagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.

# requestAssetsForLanguage:tagScheme:completionHandler: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Asks the Natural Language framework to load any missing assets for a tag scheme onto the device for the given language.

## Declaration

```objectivec
+ (void) requestAssetsForLanguage:(NLLanguage) language tagScheme:(NLTagScheme) tagScheme completionHandler:(void (^)(NLTaggerAssetsResult result, NSError *error)) completionHandler;
```

## Parameters

- `language`: The language of the tag scheme that you’re asking the framework to load onto the device.
- `tagScheme`: The tag scheme that you’re asking the framework to load onto the device.
- `completionHandler`: A closure the framework uses to notify your app when the tag scheme request has completed.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func requestAssets(for language: NLLanguage, tagScheme: NLTagScheme) async throws -> NLTagger.AssetsResult
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Before using this method, use [availableTagSchemesForUnit:language:](availabletagschemes%28for_language_%29.md) to check whether a tag scheme is available on the device. When a tag scheme is unavailable for a specific language, it may be because the framework hasn’t loaded the support for that language.

Use this method to ask the [Natural Language](../../naturallanguage.md) framework to load any missing assets for that tag scheme. This method returns immediately but the framework may need time to complete the request. When the framework completes the request, it notifies your app with the `completionHandler` you provided to the method. In your completion handler, use the `result` parameter to check whether the tag scheme is now available.

The [Natural Language](../../naturallanguage.md) framework may call your `completionHandler` immediately if it knows the state of the tag scheme’s assets or if it experiences an error.

## See Also

### Getting the tag schemes

- [availableTagSchemesForUnit:language:](availabletagschemes%28for_language_%29.md): Retrieves the tag schemes available for a particular unit (like word or sentence) and language on the current device.
- [NLTaggerAssetsResult](assetsresult.md): The response to an asset request.
- [tagSchemes](tagschemes.md): The tag schemes configured for this linguistic tagger.
- [NLTagScheme](../nltagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.
