> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/berespondereditactions/transliteratechinese(_:)](https://developer.apple.com/documentation/browserenginekit/berespondereditactions/transliteratechinese(_:))

# transliterateChinese(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Converts the selected text between traditional and simplified Chinese.

## Declaration

```swift
optional func transliterateChinese(_ sender: Any?)
```

<a id="discussion"></a>

## Discussion

To invoke the standard system behavior for transliterating Chinese text, call [transliterateChinese(forText:)](../betextinteraction/transliteratechinese%28fortext_%29.md) in your implementation of this method.

When you change the selected text in your implementation of this method, notify the system by calling [selectionWillChange(for:)](../betextinputdelegate/selectionwillchange%28for_%29.md) and [selectionDidChange(for:)](../betextinputdelegate/selectiondidchange%28for_%29.md).

## See Also

### Translating and transliterating text

- [translate(\_:)](translate%28__%29.md): Presents a translation of the selected text.

# transliterateChinese: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Converts the selected text between traditional and simplified Chinese.

## Declaration

```objectivec
- (void) transliterateChinese:(id) sender;
```

<a id="discussion"></a>

## Discussion

To invoke the standard system behavior for transliterating Chinese text, call [transliterateChineseForText:](../betextinteraction/transliteratechinese%28fortext_%29.md) in your implementation of this method.

When you change the selected text in your implementation of this method, notify the system by calling [selectionWillChangeForTextInput:](../betextinputdelegate/selectionwillchange%28for_%29.md) and [selectionDidChangeForTextInput:](../betextinputdelegate/selectiondidchange%28for_%29.md).

## See Also

### Translating and transliterating text

- [translate:](translate%28__%29.md): Presents a translation of the selected text.
