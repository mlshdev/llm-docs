> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedirectionaltextrange/length](https://developer.apple.com/documentation/browserenginekit/bedirectionaltextrange/length)

# length (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

The number of characters included in the directional text range.

## Declaration

```swift
var length: Int
```

<a id="discussion"></a>

## Discussion

The sign of this value indicates a direction for the text selection:

- Positive length indicates forward selection.
- Negative length indicates backward selection.

## See Also

### Measuring text range

- [offset](offset.md): The starting position of the directional text range within the text.

# length (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS · visionOS · watchOS

The number of characters included in the directional text range.

## Declaration

```objectivec
NSInteger length;
```

<a id="discussion"></a>

## Discussion

The sign of this value indicates a direction for the text selection:

- Positive length indicates forward selection.
- Negative length indicates backward selection.

## See Also

### Measuring text range

- [offset](offset.md): The starting position of the directional text range within the text.
