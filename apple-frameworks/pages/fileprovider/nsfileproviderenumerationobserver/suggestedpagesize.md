> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderenumerationobserver/suggestedpagesize](https://developer.apple.com/documentation/fileprovider/nsfileproviderenumerationobserver/suggestedpagesize)

# suggestedPageSize (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

The page size that the system recommends.

## Declaration

```swift
optional var suggestedPageSize: Int { get }
```

<a id="Discussion"></a>

## Discussion

The system suggests a page size to optimize performance based on the enumeration’s context. The system can request the enumeration of a container for various reasons, such as if the user opens the directory in Finder, opens a file in an application, or if the system needs to materialize the contents of a directory. Each case has its own performance profile.

While using the suggested page size helps ensure the best user experience, the system enforces a maximum of 100 times the suggested size.

## See Also

### Observing Item Enumeration

- [didEnumerate(\_:)](didenumerate%28__%29.md): Provides a batch of enumerated items.
- [finishEnumerating(upTo:)](finishenumerating%28upto_%29.md): Tells the observer that all of the items have been enumerated up to the specified page.
- [finishEnumeratingWithError(\_:)](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during item enumeration.

# suggestedPageSize (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

The page size that the system recommends.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger suggestedPageSize;
```

<a id="Discussion"></a>

## Discussion

The system suggests a page size to optimize performance based on the enumeration’s context. The system can request the enumeration of a container for various reasons, such as if the user opens the directory in Finder, opens a file in an application, or if the system needs to materialize the contents of a directory. Each case has its own performance profile.

While using the suggested page size helps ensure the best user experience, the system enforces a maximum of 100 times the suggested size.

## See Also

### Observing Item Enumeration

- [didEnumerateItems:](didenumerate%28__%29.md): Provides a batch of enumerated items.
- [finishEnumeratingUpToPage:](finishenumerating%28upto_%29.md): Tells the observer that all of the items have been enumerated up to the specified page.
- [finishEnumeratingWithError:](finishenumeratingwitherror%28__%29.md): Tells the observer that an error occurred during item enumeration.
