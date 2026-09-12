> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/berespondereditactions/lookup(_:)](https://developer.apple.com/documentation/browserenginekit/berespondereditactions/lookup(_:))

# lookup(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents a dictionary definition for the selected content.

## Declaration

```swift
optional func lookup(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To present the standard system UI for showing a dictionary definition, call [showDictionary(forTextInContext:definingTextInRange:from:)](../betextinteraction/showdictionary%28fortextincontext_definingtextinrange_from_%29.md) in your implementation of this method.

## See Also

### Defining and sharing text

- [share(\_:)](share%28__%29.md): Presents UI for sharing the selected text.

# lookup: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents a dictionary definition for the selected content.

## Declaration

```objectivec
- (void) lookup:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To present the standard system UI for showing a dictionary definition, call [showDictionaryForTextInContext:definingTextInRange:fromRect:](../betextinteraction/showdictionary%28fortextincontext_definingtextinrange_from_%29.md) in your implementation of this method.

## See Also

### Defining and sharing text

- [share:](share%28__%29.md): Presents UI for sharing the selected text.
