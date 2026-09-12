> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abbeginloadingimagedataforclient(_:_:_:)](https://developer.apple.com/documentation/addressbook/abbeginloadingimagedataforclient(_:_:_:))

# ABBeginLoadingImageDataForClient(\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Starts an asynchronous fetch for image data in all locations, and returns a non-zero tag for tracking.

## Declaration

```swift
func ABBeginLoadingImageDataForClient(_ person: ABPersonRef!, _ callback: ABImageClientCallback!, _ refcon: UnsafeMutableRawPointer!) -> CFIndex
```

## Parameters

- `person`: The person whose image data you wish to fetch.
- `callback`: The function to call when the fetch is completed.
- `refcon`: An untyped pointer to program-defined data that will be passed to the callback.

<a id="return-value"></a>

## Return Value

A non-zero tag for tracking

<a id="Discussion"></a>

## Discussion

Use this function to begin an asynchronous fetch. Implement your callback function to receive the fetched image. Use the [ABCancelLoadingImageDataForTag(\_:)](abcancelloadingimagedatafortag%28__%29.md) function to cancel an asynchronous fetch.

## See Also

### Images

- [ABCancelLoadingImageDataForTag(\_:)](abcancelloadingimagedatafortag%28__%29.md): Cancels an asynchronous fetch of an image for the given tag.

# ABBeginLoadingImageDataForClient (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Starts an asynchronous fetch for image data in all locations, and returns a non-zero tag for tracking.

## Declaration

```objectivec
extern CFIndex ABBeginLoadingImageDataForClient(ABPersonRef person, ABImageClientCallback callback, void *refcon);
```

## Parameters

- `person`: The person whose image data you wish to fetch.
- `callback`: The function to call when the fetch is completed.
- `refcon`: An untyped pointer to program-defined data that will be passed to the callback.

<a id="return-value"></a>

## Return Value

A non-zero tag for tracking

<a id="Discussion"></a>

## Discussion

Use this function to begin an asynchronous fetch. Implement your callback function to receive the fetched image. Use the [ABCancelLoadingImageDataForTag](abcancelloadingimagedatafortag%28__%29.md) function to cancel an asynchronous fetch.

## See Also

### Images

- [ABCancelLoadingImageDataForTag](abcancelloadingimagedatafortag%28__%29.md): Cancels an asynchronous fetch of an image for the given tag.
