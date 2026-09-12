> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderenumerationobserver](https://developer.apple.com/documentation/fileprovider/nsfileproviderenumerationobserver)

# NSFileProviderEnumerationObserver (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

An observer that receives batches of items during enumeration.

## Declaration

```swift
protocol NSFileProviderEnumerationObserver : NSObjectProtocol
```

## Mentioned In

- [Defining Your File Provider’s Content](defining-your-file-provider-s-content.md)

## Topics

### Observing Item Enumeration

- [didEnumerate(\_:)](nsfileproviderenumerationobserver/didenumerate%28__%29.md): Provides a batch of enumerated items.
- [finishEnumerating(upTo:)](nsfileproviderenumerationobserver/finishenumerating%28upto_%29.md): Tells the observer that all of the items have been enumerated up to the specified page.
- [finishEnumeratingWithError(\_:)](nsfileproviderenumerationobserver/finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during item enumeration.
- [suggestedPageSize](nsfileproviderenumerationobserver/suggestedpagesize.md): The page size that the system recommends.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Content

- [Defining Your File Provider’s Content](defining-your-file-provider-s-content.md): Create enumerators to specify your file provider’s content.
- [NSFileProviderPage](nsfileproviderpage.md): A synchronization point that represents the next batch of items to be returned by an enumerator.

# NSFileProviderEnumerationObserver (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

An observer that receives batches of items during enumeration.

## Declaration

```objectivec
@protocol NSFileProviderEnumerationObserver <NSObject>
```

## Mentioned In

- [Defining Your File Provider’s Content](defining-your-file-provider-s-content.md)

## Topics

### Observing Item Enumeration

- [didEnumerateItems:](nsfileproviderenumerationobserver/didenumerate%28__%29.md): Provides a batch of enumerated items.
- [finishEnumeratingUpToPage:](nsfileproviderenumerationobserver/finishenumerating%28upto_%29.md): Tells the observer that all of the items have been enumerated up to the specified page.
- [finishEnumeratingWithError:](nsfileproviderenumerationobserver/finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during item enumeration.
- [suggestedPageSize](nsfileproviderenumerationobserver/suggestedpagesize.md): The page size that the system recommends.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Content

- [Defining Your File Provider’s Content](defining-your-file-provider-s-content.md): Create enumerators to specify your file provider’s content.
- [NSFileProviderPage](nsfileproviderpage.md): A synchronization point that represents the next batch of items to be returned by an enumerator.
