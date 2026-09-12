> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedelegate/scene(_:openurlcontexts:)](https://developer.apple.com/documentation/uikit/uiscenedelegate/scene(_:openurlcontexts:))

# scene(\_:openURLContexts:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Asks the delegate to open one or more URLs.

## Declaration

```swift
optional func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>)
```

## Parameters

- `scene`: The scene that UIKit asks to open the URL.
- `URLContexts`: One or more [UIOpenURLContext](../uiopenurlcontext.md) objects. Each object contains one URL to open and any additional information needed to open that URL.

## Mentioned In

- [Collaborating and sharing copies of your data](../collaborating-and-sharing-copies-of-your-data.md)

# scene:openURLContexts: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Asks the delegate to open one or more URLs.

## Declaration

```objectivec
- (void) scene:(UIScene *) scene openURLContexts:(NSSet<UIOpenURLContext *> *) URLContexts;
```

## Parameters

- `scene`: The scene that UIKit asks to open the URL.
- `URLContexts`: One or more [UIOpenURLContext](../uiopenurlcontext.md) objects. Each object contains one URL to open and any additional information needed to open that URL.

## Mentioned In

- [Collaborating and sharing copies of your data](../collaborating-and-sharing-copies-of-your-data.md)
