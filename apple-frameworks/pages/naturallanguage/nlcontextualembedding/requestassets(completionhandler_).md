> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembedding/requestassets(completionhandler:)](https://developer.apple.com/documentation/naturallanguage/nlcontextualembedding/requestassets(completionhandler:))

# requestAssets(completionHandler:) (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Requests embedding model assets and downloads them if available.

## Declaration

```swift
func requestAssets(completionHandler: @escaping @Sendable (NLContextualEmbedding.AssetsResult, (any Error)?) -> Void)
```

```swift
func requestAssets() async throws -> NLContextualEmbedding.AssetsResult
```

## Parameters

- `completionHandler`: A closure that notifies your app when the asset request completes.

<a id="Asynchronous-alternative"></a>

## Asynchronous alternative

You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:

```swift
func requestAssets() async throws -> NLContextualEmbedding.AssetsResult
```

For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

<a id="Discussion"></a>

## Discussion

You use a contextual embedding after loading the necessary assets onto the device. Use [hasAvailableAssets](hasavailableassets.md) to determine whether assets are available. This method returns immediately if the framework knows the state of the assets or if an error occurs.

## See Also

### Requesting assets

- [NLContextualEmbedding.AssetsResult](assetsresult.md): The availability of the contextual embedding model assets.

# requestEmbeddingAssetsWithCompletionHandler: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Requests embedding model assets and downloads them if available.

## Declaration

```objectivec
- (void) requestEmbeddingAssetsWithCompletionHandler:(void (^)(NLContextualEmbeddingAssetsResult result, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A closure that notifies your app when the asset request completes.

<a id="Asynchronous-alternative"></a>

## Asynchronous alternative

You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:

```swift
func requestAssets() async throws -> NLContextualEmbedding.AssetsResult
```

For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

<a id="Discussion"></a>

## Discussion

You use a contextual embedding after loading the necessary assets onto the device. Use [hasAvailableAssets](hasavailableassets.md) to determine whether assets are available. This method returns immediately if the framework knows the state of the assets or if an error occurs.

## See Also

### Requesting assets

- [NLContextualEmbeddingAssetsResult](assetsresult.md): The availability of the contextual embedding model assets.
