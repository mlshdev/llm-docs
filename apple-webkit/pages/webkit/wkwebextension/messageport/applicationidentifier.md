> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/messageport/applicationidentifier](https://developer.apple.com/documentation/webkit/wkwebextension/messageport/applicationidentifier)

# applicationIdentifier (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The unique identifier for the app to which this port should be connected.

## Declaration

```swift
var applicationIdentifier: String? { get }
```

<a id="discussion"></a>

## Discussion

This identifier is provided by the web extension and may or may not be used by the app. It’s up to the app to decide how to interpret this identifier.

# applicationIdentifier (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The unique identifier for the app to which this port should be connected.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * applicationIdentifier;
```

<a id="discussion"></a>

## Discussion

This identifier is provided by the web extension and may or may not be used by the app. It’s up to the app to decide how to interpret this identifier.
