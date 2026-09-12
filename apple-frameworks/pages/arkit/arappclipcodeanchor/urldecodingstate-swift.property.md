> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arappclipcodeanchor/urldecodingstate-swift.property](https://developer.apple.com/documentation/arkit/arappclipcodeanchor/urldecodingstate-swift.property)

# urlDecodingState (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+

A state that indicates the process of decoding an App Clip Code URL.

## Declaration

```swift
var urlDecodingState: ARAppClipCodeAnchor.URLDecodingState { get }
```

<a id="Discussion"></a>

## Discussion

The initial value of this property is [ARAppClipCodeAnchor.URLDecodingState.decoding](urldecodingstate-swift.enum/decoding.md).

## See Also

### Decoding the URL

- [url](url.md): The URL encoded in an App Clip Code.
- [ARAppClipCodeAnchor.URLDecodingState](urldecodingstate-swift.enum.md): The states in the process of decoding an App Clip code URL.

# urlDecodingState (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+

A state that indicates the process of decoding an App Clip Code URL.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) ARAppClipCodeURLDecodingState urlDecodingState;
```

<a id="Discussion"></a>

## Discussion

The initial value of this property is [ARAppClipCodeURLDecodingStateDecoding](urldecodingstate-swift.enum/decoding.md).

## See Also

### Decoding the URL

- [url](url.md): The URL encoded in an App Clip Code.
- [ARAppClipCodeURLDecodingState](urldecodingstate-swift.enum.md): The states in the process of decoding an App Clip code URL.
