> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanager/synchronizetextlayoutmanagers(_:)](https://developer.apple.com/documentation/appkit/nstextcontentmanager/synchronizetextlayoutmanagers(_:))

# synchronizeTextLayoutManagers(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Synchronizes changes to all nonprimary text layout managers.

## Declaration

```swift
func synchronizeTextLayoutManagers(_ completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func synchronizeTextLayoutManagers() async throws
```

## Parameters

- `completionHandler`: A completion handler that runs on success, or to handle error conditions.

<a id="Discussion"></a>

## Discussion

If `completionHandler` is `nil`, this method performs the operation synchronously. The framework passes any error to the `completionHandler`. The method blocks (or fails, if synchronous) when there’s an active transaction.

## See Also

### Working with layout managers

- [primaryTextLayoutManager](primarytextlayoutmanager.md): The primary text layout manager for this content.
- [textLayoutManagers](textlayoutmanagers.md): The array of text layout managers associated with this text content manager.
- [automaticallySynchronizesTextLayoutManagers](automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [addTextLayoutManager(\_:)](addtextlayoutmanager%28__%29.md): Adds the layout manager you provide to the list of layout managers.
- [removeTextLayoutManager(\_:)](removetextlayoutmanager%28__%29.md): Removes the layout manager you specifiy from the list of layout managers.

# synchronizeTextLayoutManagers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Synchronizes changes to all nonprimary text layout managers.

## Declaration

```objectivec
- (void) synchronizeTextLayoutManagers:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler that runs on success, or to handle error conditions.

<a id="Discussion"></a>

## Discussion

If `completionHandler` is `nil`, this method performs the operation synchronously. The framework passes any error to the `completionHandler`. The method blocks (or fails, if synchronous) when there’s an active transaction.

## See Also

### Working with layout managers

- [primaryTextLayoutManager](primarytextlayoutmanager.md): The primary text layout manager for this content.
- [textLayoutManagers](textlayoutmanagers.md): The array of text layout managers associated with this text content manager.
- [automaticallySynchronizesTextLayoutManagers](automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [addTextLayoutManager:](addtextlayoutmanager%28__%29.md): Adds the layout manager you provide to the list of layout managers.
- [removeTextLayoutManager:](removetextlayoutmanager%28__%29.md): Removes the layout manager you specifiy from the list of layout managers.
