> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/textlastrect](https://developer.apple.com/documentation/browserenginekit/betextinput/textlastrect)

# textLastRect (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns a rect representing the bounds of the last line of marked text, if marked text is set.

## Declaration

```swift
var textLastRect: CGRect { get }
```

<a id="discussion"></a>

## Discussion

Otherwise, this returns a rect representing the bounds of the last word at or before the insertion point. This may have the same value of `textFirstRect`, but can differ in cases such as a word that spans two lines.

# textLastRect (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns a rect representing the bounds of the last line of marked text, if marked text is set.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect textLastRect;
```

<a id="discussion"></a>

## Discussion

Otherwise, this returns a rect representing the bounds of the last word at or before the insertion point. This may have the same value of `textFirstRect`, but can differ in cases such as a word that spans two lines.
