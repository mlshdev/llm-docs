> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/writingoptions/atomic](https://developer.apple.com/documentation/foundation/filewrapper/writingoptions/atomic)

# atomic (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Whether writing is done atomically.

## Declaration

```swift
static var atomic: FileWrapper.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

You can use this option to ensure that, when overwriting a file package, the overwriting either completely succeeds or completely fails, with no possibility of leaving the file package in an inconsistent state. Because this option causes additional I/O, you shouldn’t use it unnecessarily. For example, don’t use this option in an override of `-[NSDocument` [write(to:ofType:)](https://developer.apple.com/documentation/appkit/nsdocument/write%28to:oftype:%29)`]`, because `NSDocument` safe-saving is already done atomically.

## See Also

### Constants

- [withNameUpdating](withnameupdating.md): Whether descendant file wrappers’[filename](../filename.md) properties are set if the writing succeeds.

# NSFileWrapperWritingAtomic (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Whether writing is done atomically.

## Declaration

```objectivec
NSFileWrapperWritingAtomic
```

<a id="Discussion"></a>

## Discussion

You can use this option to ensure that, when overwriting a file package, the overwriting either completely succeeds or completely fails, with no possibility of leaving the file package in an inconsistent state. Because this option causes additional I/O, you shouldn’t use it unnecessarily. For example, don’t use this option in an override of `-[NSDocument` [writeToURL:ofType:error:](https://developer.apple.com/documentation/appkit/nsdocument/write%28to:oftype:%29)`]`, because `NSDocument` safe-saving is already done atomically.

## See Also

### Constants

- [NSFileWrapperWritingWithNameUpdating](withnameupdating.md): Whether descendant file wrappers’[filename](../filename.md) properties are set if the writing succeeds.
