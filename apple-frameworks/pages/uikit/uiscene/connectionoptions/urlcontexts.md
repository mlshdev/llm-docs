> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/connectionoptions/urlcontexts](https://developer.apple.com/documentation/uikit/uiscene/connectionoptions/urlcontexts)

# urlContexts (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The URLs to open, along with metadata specifying how to open them.

## Declaration

```swift
var urlContexts: Set<UIOpenURLContext> { get }
```

<a id="Discussion"></a>

## Discussion

An empty set indicates that there are no URLs to open.

# URLContexts (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The URLs to open, along with metadata specifying how to open them.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<UIOpenURLContext *> * URLContexts;
```

<a id="Discussion"></a>

## Discussion

An empty set indicates that there are no URLs to open.
