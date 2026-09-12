> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/textfirstrect](https://developer.apple.com/documentation/browserenginekit/betextinput/textfirstrect)

# textFirstRect (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns a rect representing the bounds of the first line of marked text, if marked text is set.

## Declaration

```swift
var textFirstRect: CGRect { get }
```

<a id="discussion"></a>

## Discussion

Otherwise, this returns a rect representing the bounds of the last word at or before the insertion point.

# textFirstRect (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns a rect representing the bounds of the first line of marked text, if marked text is set.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect textFirstRect;
```

<a id="discussion"></a>

## Discussion

Otherwise, this returns a rect representing the bounds of the last word at or before the insertion point.
