> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/refreshkeyboardui()](https://developer.apple.com/documentation/browserenginekit/betextinteraction/refreshkeyboardui())

# refreshKeyboardUI() (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Tells the system to refresh the keyboard UI.

## Declaration

```swift
func refreshKeyboardUI()
```

<a id="discussion"></a>

## Discussion

This lightweight method refreshes the selection UI.  For example, this could be invoked in response to programmatic text selection changes, independent of text interaction gestures

## See Also

### UI updates

- [editabilityChanged()](editabilitychanged%28%29.md): Tells the system that the document’s editability status has changed.

# refreshKeyboardUI (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Tells the system to refresh the keyboard UI.

## Declaration

```objectivec
- (void) refreshKeyboardUI;
```

<a id="discussion"></a>

## Discussion

This lightweight method refreshes the selection UI.  For example, this could be invoked in response to programmatic text selection changes, independent of text interaction gestures

## See Also

### UI updates

- [editabilityChanged](editabilitychanged%28%29.md): Tells the system that the document’s editability status has changed.
