> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuelement/subtitle](https://developer.apple.com/documentation/uikit/uimenuelement/subtitle)

# subtitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The subtitle to display alongside the menu element’s title.

## Declaration

```swift
var subtitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Only the [context](../uimenusystem/context.md) menu system supports the display of a subtitle, and only when the app is running on iOS.

## See Also

### Getting the element attributes

- [title](title.md): The title of the menu element.
- [image](image.md): The image to display alongside the menu element’s title.

# subtitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The subtitle to display alongside the menu element’s title.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * subtitle;
```

<a id="Discussion"></a>

## Discussion

Only the [contextSystem](../uimenusystem/context.md) menu system supports the display of a subtitle, and only when the app is running on iOS.

## See Also

### Getting the element attributes

- [title](title.md): The title of the menu element.
- [image](image.md): The image to display alongside the menu element’s title.
