> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/canbefulfilledwithadvisorykey](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/canbefulfilledwithadvisorykey)

# canBeFulfilledWithAdvisoryKey (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

Indicates whether this key request was initiated for an advisory key.

## Declaration

```swift
var canBeFulfilledWithAdvisoryKey: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property is set to true when: \1. Advisory key loading is enabled on the parent AVContentKeySession \2. The key was previously loaded as an advisory key and cached by FairPlay \3. A subsequent request for the same key is made

When `canBeFulfilledWithAdvisoryKey` is true and `makeStreamingContentKeyRequestData` returns nil for the key request data, this indicates FairPlay has already cached the key. No request to the key server for a key response is necessary, and the application should simply return from the completion handler.

This property should be checked in the completion handler of `makeStreamingContentKeyRequestData(forApp:contentIdentifier:options:completionHandler:)` whenever the key request data is nil to distinguish advisory keys from actual errors.

# canBeFulfilledWithAdvisoryKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+

Indicates whether this key request was initiated for an advisory key.

## Declaration

```objectivec
@property (readonly) BOOL canBeFulfilledWithAdvisoryKey;
```

<a id="discussion"></a>

## Discussion

This property is set to true when: \1. Advisory key loading is enabled on the parent AVContentKeySession \2. The key was previously loaded as an advisory key and cached by FairPlay \3. A subsequent request for the same key is made

When `canBeFulfilledWithAdvisoryKey` is true and `makeStreamingContentKeyRequestData` returns nil for the key request data, this indicates FairPlay has already cached the key. No request to the key server for a key response is necessary, and the application should simply return from the completion handler.

This property should be checked in the completion handler of `makeStreamingContentKeyRequestData(forApp:contentIdentifier:options:completionHandler:)` whenever the key request data is nil to distinguish advisory keys from actual errors.
