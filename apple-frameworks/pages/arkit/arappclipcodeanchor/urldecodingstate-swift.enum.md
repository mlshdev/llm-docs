> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arappclipcodeanchor/urldecodingstate-swift.enum](https://developer.apple.com/documentation/arkit/arappclipcodeanchor/urldecodingstate-swift.enum)

# ARAppClipCodeAnchor.URLDecodingState (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 14.3+ · iPadOS 14.3+

The states in the process of decoding an App Clip code URL.

## Declaration

```swift
enum URLDecodingState
```

<a id="overview"></a>

## Overview

The possible states of decoding the [url](url.md) of an App Clip Code.

## Topics

### States

- [ARAppClipCodeAnchor.URLDecodingState.decoded](urldecodingstate-swift.enum/decoded.md): A state that indicates the completed decoding of an App Clip Code URL.
- [ARAppClipCodeAnchor.URLDecodingState.decoding](urldecodingstate-swift.enum/decoding.md): A state that indicates the continuing process of decoding an App Clip Code’s URL.
- [ARAppClipCodeAnchor.URLDecodingState.failed](urldecodingstate-swift.enum/failed.md): A state that indicates the failure to decode an App Clip Code’s URL.

### Initializers

- [init(rawValue:)](urldecodingstate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Decoding the URL

- [url](url.md): The URL encoded in an App Clip Code.
- [urlDecodingState](urldecodingstate-swift.property.md): A state that indicates the process of decoding an App Clip Code URL.

# ARAppClipCodeURLDecodingState (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

The states in the process of decoding an App Clip code URL.

## Declaration

```objectivec
enum ARAppClipCodeURLDecodingState : NSInteger;
```

<a id="overview"></a>

## Overview

The possible states of decoding the [url](url.md) of an App Clip Code.

## Topics

### States

- [ARAppClipCodeURLDecodingStateDecoded](urldecodingstate-swift.enum/decoded.md): A state that indicates the completed decoding of an App Clip Code URL.
- [ARAppClipCodeURLDecodingStateDecoding](urldecodingstate-swift.enum/decoding.md): A state that indicates the continuing process of decoding an App Clip Code’s URL.
- [ARAppClipCodeURLDecodingStateFailed](urldecodingstate-swift.enum/failed.md): A state that indicates the failure to decode an App Clip Code’s URL.

## See Also

### Decoding the URL

- [url](url.md): The URL encoded in an App Clip Code.
- [urlDecodingState](urldecodingstate-swift.property.md): A state that indicates the process of decoding an App Clip Code URL.
