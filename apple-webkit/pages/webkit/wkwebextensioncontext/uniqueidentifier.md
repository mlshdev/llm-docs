> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/uniqueidentifier](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A unique identifier used to distinguish the extension from other extensions and target it for messages.

## Declaration

```swift
var uniqueIdentifier: String { get set }
```

<a id="discussion"></a>

## Discussion

The default value is a unique value that matches the host in the default base URL. The identifier can be any value that is unique. Setting is only allowed when the context is not loaded. This value is accessible by the extension via `browser.runtime.id` and is used for messaging the extension via `browser.runtime.sendMessage()`.

# uniqueIdentifier (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A unique identifier used to distinguish the extension from other extensions and target it for messages.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * uniqueIdentifier;
```

<a id="discussion"></a>

## Discussion

The default value is a unique value that matches the host in the default base URL. The identifier can be any value that is unique. Setting is only allowed when the context is not loaded. This value is accessible by the extension via `browser.runtime.id` and is used for messaging the extension via `browser.runtime.sendMessage()`.
