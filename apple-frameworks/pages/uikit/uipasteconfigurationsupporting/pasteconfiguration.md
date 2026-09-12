> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteconfigurationsupporting/pasteconfiguration](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting/pasteconfiguration)

# pasteConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The paste configuration associated with the responder object.

## Declaration

```swift
@NSCopying var pasteConfiguration: UIPasteConfiguration? { get set }
```

<a id="Discussion"></a>

## Discussion

If the responder object doesn’t have a paste configuration, `nil` is returned.

# pasteConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The paste configuration associated with the responder object.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIPasteConfiguration * pasteConfiguration;
```

<a id="Discussion"></a>

## Discussion

If the responder object doesn’t have a paste configuration, `nil` is returned.
