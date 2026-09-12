> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidercustomaction/performaction(identifier:onitemswithidentifiers:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidercustomaction/performaction(identifier:onitemswithidentifiers:completionhandler:))

# performAction(identifier:onItemsWithIdentifiers:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the File Provider extension to perform a custom action.

## Declaration

```swift
func performAction(identifier actionIdentifier: NSFileProviderExtensionActionIdentifier, onItemsWithIdentifiers itemIdentifiers: [NSFileProviderItemIdentifier], completionHandler: @escaping ((any Error)?) -> Void) -> Progress
```

## Parameters

- `actionIdentifier`: The identifier for the requested custom action from the extension’s `Info.plist` file.
- `itemIdentifiers`: A list of item identifiers affected by the action.
- `completionHandler`: A block that you call after completing the specified action. You pass the following parameters:

  - **error**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="return-value"></a>

## Return Value

An item that tracks your extension’s progress.

<a id="Discussion"></a>

## Discussion

Define the custom actions in the File Provider Extension’s `Info.plist` file, under the `NSExtensionFileProviderActions` key. The format of this key is identical to actions defined for a [File Provider UI](../../fileproviderui.md) extension. For more information, see `Adding Actions to the Context Menu`.

# performActionWithIdentifier:onItemsWithIdentifiers:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the File Provider extension to perform a custom action.

## Declaration

```objectivec
- (NSProgress *) performActionWithIdentifier:(NSFileProviderExtensionActionIdentifier) actionIdentifier onItemsWithIdentifiers:(NSArray<NSString *> *) itemIdentifiers completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `actionIdentifier`: The identifier for the requested custom action from the extension’s `Info.plist` file.
- `itemIdentifiers`: A list of item identifiers affected by the action.
- `completionHandler`: A block that you call after completing the specified action. You pass the following parameters:

  - **error**: If an error occurs, this object contains information about the error; otherwise, it’s `nil`.

<a id="return-value"></a>

## Return Value

An item that tracks your extension’s progress.

<a id="Discussion"></a>

## Discussion

Define the custom actions in the File Provider Extension’s `Info.plist` file, under the `NSExtensionFileProviderActions` key. The format of this key is identical to actions defined for a [File Provider UI](../../fileproviderui.md) extension. For more information, see `Adding Actions to the Context Menu`.
