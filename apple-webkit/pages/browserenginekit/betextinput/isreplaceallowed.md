> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/isreplaceallowed](https://developer.apple.com/documentation/browserenginekit/betextinput/isreplaceallowed)

# isReplaceAllowed (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns whether replacement should be allowed for an editable element.

## Declaration

```swift
var isReplaceAllowed: Bool { get }
```

<a id="discussion"></a>

## Discussion

For example, replacement shouldn’t be allowed in password fields or when the selected text is only consists of whitespace.

# replaceAllowed (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns whether replacement should be allowed for an editable element.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReplaceAllowed) BOOL replaceAllowed;
```

<a id="discussion"></a>

## Discussion

For example, replacement shouldn’t be allowed in password fields or when the selected text is only consists of whitespace.
