> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderenumerationobserver/didenumerate(_:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderenumerationobserver/didenumerate(_:))

# didEnumerate(\_:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Provides a batch of enumerated items.

## Declaration

```swift
func didEnumerate(_ updatedItems: [any NSFileProviderItemProtocol])
```

## Mentioned In

- [Defining Your File Provider’s Content](../defining-your-file-provider-s-content.md)

## See Also

### Observing Item Enumeration

- [finishEnumerating(upTo:)](finishenumerating%28upto_%29.md): Tells the observer that all of the items have been enumerated up to the specified page.
- [finishEnumeratingWithError(\_:)](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during item enumeration.
- [suggestedPageSize](suggestedpagesize.md): The page size that the system recommends.

# didEnumerateItems: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Provides a batch of enumerated items.

## Declaration

```objectivec
- (void) didEnumerateItems:(NSArray<id<NSFileProviderItem>> *) updatedItems;
```

## Mentioned In

- [Defining Your File Provider’s Content](../defining-your-file-provider-s-content.md)

## See Also

### Observing Item Enumeration

- [finishEnumeratingUpToPage:](finishenumerating%28upto_%29.md): Tells the observer that all of the items have been enumerated up to the specified page.
- [finishEnumeratingWithError:](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during item enumeration.
- [suggestedPageSize](suggestedpagesize.md): The page size that the system recommends.
