> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderenumerationobserver/finishenumerating(upto:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderenumerationobserver/finishenumerating(upto:))

# finishEnumerating(upTo:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Tells the observer that all of the items have been enumerated up to the specified page.

## Declaration

```swift
func finishEnumerating(upTo nextPage: NSFileProviderPage?)
```

## Mentioned In

- [Defining Your File Provider’s Content](../defining-your-file-provider-s-content.md)

## See Also

### Observing Item Enumeration

- [didEnumerate(\_:)](didenumerate%28__%29.md): Provides a batch of enumerated items.
- [finishEnumeratingWithError(\_:)](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during item enumeration.
- [suggestedPageSize](suggestedpagesize.md): The page size that the system recommends.

# finishEnumeratingUpToPage: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Tells the observer that all of the items have been enumerated up to the specified page.

## Declaration

```objectivec
- (void) finishEnumeratingUpToPage:(NSFileProviderPage) nextPage;
```

## Mentioned In

- [Defining Your File Provider’s Content](../defining-your-file-provider-s-content.md)

## See Also

### Observing Item Enumeration

- [didEnumerateItems:](didenumerate%28__%29.md): Provides a batch of enumerated items.
- [finishEnumeratingWithError:](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during item enumeration.
- [suggestedPageSize](suggestedpagesize.md): The page size that the system recommends.
