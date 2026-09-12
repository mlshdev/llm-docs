> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/berespondereditactions/share(_:)](https://developer.apple.com/documentation/browserenginekit/berespondereditactions/share(_:))

# share(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents UI for sharing the selected text.

## Declaration

```swift
optional func share(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To present the standard system UI for sharing content, call [share(text:from:)](../betextinteraction/share%28text_from_%29.md) in your implementation of this method.

## See Also

### Defining and sharing text

- [lookup(\_:)](lookup%28__%29.md): Presents a dictionary definition for the selected content.

# share: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents UI for sharing the selected text.

## Declaration

```objectivec
- (void) share:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To present the standard system UI for sharing content, call [shareText:fromRect:](../betextinteraction/share%28text_from_%29.md) in your implementation of this method.

## See Also

### Defining and sharing text

- [lookup:](lookup%28__%29.md): Presents a dictionary definition for the selected content.
