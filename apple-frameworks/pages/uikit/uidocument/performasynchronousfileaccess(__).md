> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/performasynchronousfileaccess(_:)](https://developer.apple.com/documentation/uikit/uidocument/performasynchronousfileaccess(_:))

# performAsynchronousFileAccess(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Schedules a document-reading or document-writing operation on a concurrent background queue.

## Declaration

```swift
func performAsynchronousFileAccess(_ block: @escaping () -> Void)
```

## Parameters

- `block`: A block that’s invoked as the task to execute on the background queue. The block returns no value and takes no parameters.

<a id="Discussion"></a>

## Discussion

A typical [UIDocument](../uidocument.md) subclass — one that overrides [contents(forType:)](contents%28fortype_%29.md) and [load(fromContents:ofType:)](load%28fromcontents_oftype_%29.md) — doesn’t need to call this method.

The default implementations of [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md) and [open(completionHandler:)](open%28completionhandler_%29.md) call this method to serialize file access. If you override these methods and don’t call `super`, you should call this method to serialize file access on a background queue. If you directly call the [read(from:)](read%28from_%29.md) method, you should wrap that call in the block passed into [performAsynchronousFileAccess(\_:)](performasynchronousfileaccess%28__%29.md).

# performAsynchronousFileAccessUsingBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Schedules a document-reading or document-writing operation on a concurrent background queue.

## Declaration

```objectivec
- (void) performAsynchronousFileAccessUsingBlock:(void (^)()) block;
```

## Parameters

- `block`: A block that’s invoked as the task to execute on the background queue. The block returns no value and takes no parameters.

<a id="Discussion"></a>

## Discussion

A typical [UIDocument](../uidocument.md) subclass — one that overrides [contentsForType:error:](contents%28fortype_%29.md) and [loadFromContents:ofType:error:](load%28fromcontents_oftype_%29.md) — doesn’t need to call this method.

The default implementations of [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md) and [openWithCompletionHandler:](open%28completionhandler_%29.md) call this method to serialize file access. If you override these methods and don’t call `super`, you should call this method to serialize file access on a background queue. If you directly call the [readFromURL:error:](read%28from_%29.md) method, you should wrap that call in the block passed into [performAsynchronousFileAccessUsingBlock:](performasynchronousfileaccess%28__%29.md).
