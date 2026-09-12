> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abcancelloadingimagedatafortag(_:)](https://developer.apple.com/documentation/addressbook/abcancelloadingimagedatafortag(_:))

# ABCancelLoadingImageDataForTag(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Cancels an asynchronous fetch of an image for the given tag.

## Declaration

```swift
func ABCancelLoadingImageDataForTag(_ tag: CFIndex)
```

## Parameters

- `tag`: Used to track an asynchronous fetch. This parameter should have been returned from a previous call to the [ABBeginLoadingImageDataForClient(\_:\_:\_:)](abbeginloadingimagedataforclient%28______%29.md) function.

<a id="Discussion"></a>

## Discussion

Use the [ABBeginLoadingImageDataForClient(\_:\_:\_:)](abbeginloadingimagedataforclient%28______%29.md) function to begin an asynchronous fetch. Implement your callback function to receive the fetched image. Use this function to cancel an asynchronous fetch.

## See Also

### Images

- [ABBeginLoadingImageDataForClient(\_:\_:\_:)](abbeginloadingimagedataforclient%28______%29.md): Starts an asynchronous fetch for image data in all locations, and returns a non-zero tag for tracking.

# ABCancelLoadingImageDataForTag (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Cancels an asynchronous fetch of an image for the given tag.

## Declaration

```objectivec
extern void ABCancelLoadingImageDataForTag(CFIndex tag);
```

## Parameters

- `tag`: Used to track an asynchronous fetch. This parameter should have been returned from a previous call to the [ABBeginLoadingImageDataForClient](abbeginloadingimagedataforclient%28______%29.md) function.

<a id="Discussion"></a>

## Discussion

Use the [ABBeginLoadingImageDataForClient](abbeginloadingimagedataforclient%28______%29.md) function to begin an asynchronous fetch. Implement your callback function to receive the fetched image. Use this function to cancel an asynchronous fetch.

## See Also

### Images

- [ABBeginLoadingImageDataForClient](abbeginloadingimagedataforclient%28______%29.md): Starts an asynchronous fetch for image data in all locations, and returns a non-zero tag for tracking.
