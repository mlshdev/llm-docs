> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/editabilitychanged()](https://developer.apple.com/documentation/browserenginekit/betextinteraction/editabilitychanged())

# editabilityChanged() (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Tells the system that the document’s editability status has changed.

## Declaration

```swift
func editabilityChanged()
```

<a id="discussion"></a>

## Discussion

In response, the system refreshes the text interaction gestures, depending on the value of `isEditable`

## See Also

### UI updates

- [refreshKeyboardUI()](refreshkeyboardui%28%29.md): Tells the system to refresh the keyboard UI.

# editabilityChanged (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Tells the system that the document’s editability status has changed.

## Declaration

```objectivec
- (void) editabilityChanged;
```

<a id="discussion"></a>

## Discussion

In response, the system refreshes the text interaction gestures, depending on the value of `isEditable`

## See Also

### UI updates

- [refreshKeyboardUI](refreshkeyboardui%28%29.md): Tells the system to refresh the keyboard UI.
