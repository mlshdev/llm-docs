> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/title](https://developer.apple.com/documentation/appkit/nsviewcontroller/title)

# title (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The localized title of the receiver’s primary view.

## Declaration

```swift
var title: String? { get set }
```

<a id="Discussion"></a>

## Discussion

You can employ the [title](title.md) property as needed for your app’s user interface, such as to enable a user to choose among multiple named views in a menu or other affordance. The [NSViewController](../nsviewcontroller.md) class does not use this property for its own purposes.

The [title](title.md) property is key-value coding and key-value observing compliant.

## See Also

### View Properties

- [view](view.md): The view controller’s primary view.

# title (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The localized title of the receiver’s primary view.

## Declaration

```objectivec
@property (copy, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

You can employ the [title](title.md) property as needed for your app’s user interface, such as to enable a user to choose among multiple named views in a menu or other affordance. The [NSViewController](../nsviewcontroller.md) class does not use this property for its own purposes.

The [title](title.md) property is key-value coding and key-value observing compliant.

## See Also

### View Properties

- [view](view.md): The view controller’s primary view.
