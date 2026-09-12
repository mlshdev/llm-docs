> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembedding/load()](https://developer.apple.com/documentation/naturallanguage/nlcontextualembedding/load())

# load() (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The instance method that loads the embedding model.

## Declaration

```swift
func load() throws
```

<a id="discussion"></a>

## Discussion

The method fails if the necessary assets aren’t on device for the model you specify. Use [hasAvailableAssets](hasavailableassets.md) and [requestAssets(completionHandler:)](requestassets%28completionhandler_%29.md) to manage the assets.

## See Also

### Loading and unloading assets

- [unload()](unload%28%29.md): The instance method that unloads the embedding model.

# loadWithError: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The instance method that loads the embedding model.

## Declaration

```objectivec
- (BOOL) loadWithError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the load succeeds. When you create a contextual embedding, the framework doesn’t load the model until you need it. Use [loadWithError:](load%28%29.md) and [unload](unload%28%29.md) to control when to load and unload the model. The first time load can be expensive, make sure you load the model before you need to use it.

<a id="discussion"></a>

## Discussion

The method fails if the necessary assets aren’t on device for the model you specify. Use [hasAvailableAssets](hasavailableassets.md) and [requestEmbeddingAssetsWithCompletionHandler:](requestassets%28completionhandler_%29.md) to manage the assets.

## See Also

### Loading and unloading assets

- [unload](unload%28%29.md): The instance method that unloads the embedding model.
