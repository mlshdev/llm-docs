> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/commitcomposition(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/commitcomposition(_:))

# commitComposition(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Informs the controller that the composition should be committed.

## Declaration

```swift
func commitComposition(_ sender: Any!)
```

## Parameters

- `sender`: The client object requesting the input method to commit the composition.

<a id="Discussion"></a>

## Discussion

If an input method implements this method, it is called when the client wants to end the composition session immediately. A typical response would be to call the `insertText` method of the client and then clean up any per-session buffers and variables. After receiving this message an input method should consider the given composition session finished.

# commitComposition: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Informs the controller that the composition should be committed.

## Declaration

```objectivec
- (void) commitComposition:(id) sender;
```

## Parameters

- `sender`: The client object requesting the input method to commit the composition.

<a id="Discussion"></a>

## Discussion

If an input method implements this method, it is called when the client wants to end the composition session immediately. A typical response would be to call the `insertText` method of the client and then clean up any per-session buffers and variables. After receiving this message an input method should consider the given composition session finished.
