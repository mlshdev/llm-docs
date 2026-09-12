> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/writingoptions/withnameupdating](https://developer.apple.com/documentation/foundation/filewrapper/writingoptions/withnameupdating)

# withNameUpdating (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Whether descendant file wrappers’[filename](../filename.md) properties are set if the writing succeeds.

## Declaration

```swift
static var withNameUpdating: FileWrapper.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option is necessary when your application passes a URL in the `originalContentsURL` parameter to the [write(to:options:originalContentsURL:)](../write%28to_options_originalcontentsurl_%29.md) method. Without using this option (and reusing child file wrappers properly), subsequent invocations of [write(to:options:originalContentsURL:)](../write%28to_options_originalcontentsurl_%29.md) would not be able to reliably create hard links in a new file package, because the record of names in the old file package would be out of date.

## See Also

### Constants

- [atomic](atomic.md): Whether writing is done atomically.

# NSFileWrapperWritingWithNameUpdating (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Whether descendant file wrappers’[filename](../filename.md) properties are set if the writing succeeds.

## Declaration

```objectivec
NSFileWrapperWritingWithNameUpdating
```

<a id="Discussion"></a>

## Discussion

This option is necessary when your application passes a URL in the `originalContentsURL` parameter to the [writeToURL:options:originalContentsURL:error:](../write%28to_options_originalcontentsurl_%29.md) method. Without using this option (and reusing child file wrappers properly), subsequent invocations of [writeToURL:options:originalContentsURL:error:](../write%28to_options_originalcontentsurl_%29.md) would not be able to reliably create hard links in a new file package, because the record of names in the old file package would be out of date.

## See Also

### Constants

- [NSFileWrapperWritingAtomic](atomic.md): Whether writing is done atomically.
