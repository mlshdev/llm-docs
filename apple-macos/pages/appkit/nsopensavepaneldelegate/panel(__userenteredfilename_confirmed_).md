> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopensavepaneldelegate/panel(_:userenteredfilename:confirmed:)](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel(_:userenteredfilename:confirmed:))

# panel(\_:userEnteredFilename:confirmed:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the user confirmed a filename choice by clicking Save in a Save panel.

## Declaration

```swift
@MainActor optional func panel(_ sender: Any, userEnteredFilename filename: String, confirmed okFlag: Bool) -> String?
```

## Parameters

- `sender`: The panel that reports the user’s confirmation of a filename choice.
- `filename`: The user’s filename choice.
- `okFlag`: If [true](https://developer.apple.com/documentation/swift/true), the user clicked the Save button; if [false](https://developer.apple.com/documentation/swift/false), the user did not.

<a id="return-value"></a>

## Return Value

The filename selected by the user, or `nil` if you want to cancel the save operation and leave the Save panel onscreen.

<a id="Discussion"></a>

## Discussion

The Save panel calls this method before appending any required filename extension information, and before it asks the user whether to replace an existing file, if a file with the specified name already exists in the given location.

The panel may call this method multiple times as the user types. When it does, the `okFlag` parameter is [false](https://developer.apple.com/documentation/swift/false). When the use confirms their choice, the value in the `okFlag` is [true](https://developer.apple.com/documentation/swift/true). If your delegate does extensive validation or puts up alerts, do so only when `okFlag` is [true](https://developer.apple.com/documentation/swift/true).

In macOS 10.15 and later, you cannot change the filename that the user selects. Prior to macOS 10.15, you could sanitize the app’s filename to remove undesirable characters or limit its length only if your app wasn’t running in a sandbox.

## See Also

### Related Documentation

- [panel(\_:validate:)](panel%28__validate_%29.md): Asks the delegate to validate the URL for a file that the user selected.

# panel:userEnteredFilename:confirmed: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the user confirmed a filename choice by clicking Save in a Save panel.

## Declaration

```objectivec
- (NSString *) panel:(id) sender userEnteredFilename:(NSString *) filename confirmed:(BOOL) okFlag;
```

## Parameters

- `sender`: The panel that reports the user’s confirmation of a filename choice.
- `filename`: The user’s filename choice.
- `okFlag`: If [true](https://developer.apple.com/documentation/swift/true), the user clicked the Save button; if [false](https://developer.apple.com/documentation/swift/false), the user did not.

<a id="return-value"></a>

## Return Value

The filename selected by the user, or `nil` if you want to cancel the save operation and leave the Save panel onscreen.

<a id="Discussion"></a>

## Discussion

The Save panel calls this method before appending any required filename extension information, and before it asks the user whether to replace an existing file, if a file with the specified name already exists in the given location.

The panel may call this method multiple times as the user types. When it does, the `okFlag` parameter is [false](https://developer.apple.com/documentation/swift/false). When the use confirms their choice, the value in the `okFlag` is [true](https://developer.apple.com/documentation/swift/true). If your delegate does extensive validation or puts up alerts, do so only when `okFlag` is [true](https://developer.apple.com/documentation/swift/true).

In macOS 10.15 and later, you cannot change the filename that the user selects. Prior to macOS 10.15, you could sanitize the app’s filename to remove undesirable characters or limit its length only if your app wasn’t running in a sandbox.

## See Also

### Related Documentation

- [panel:validateURL:error:](panel%28__validate_%29.md): Asks the delegate to validate the URL for a file that the user selected.
