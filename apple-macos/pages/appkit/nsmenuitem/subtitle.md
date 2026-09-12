> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/subtitle](https://developer.apple.com/documentation/appkit/nsmenuitem/subtitle)

# subtitle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.4+

## Declaration

```swift
var subtitle: String? { get set }
```

<a id="discussion"></a>

## Discussion

Used to specify a standard subtitle for the menu item.

The subtitle is displayed below the standard title.

> **Note**

> On macOS 14, a menu item with an attributed title does not show the subtitle. The subtitle is shown on macOS 15 and later.

# subtitle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.4+

## Declaration

```objectivec
@property (copy, nullable) NSString * subtitle;
```

<a id="discussion"></a>

## Discussion

Used to specify a standard subtitle for the menu item.

The subtitle is displayed below the standard title.

> **Note**

> On macOS 14, a menu item with an attributed title does not show the subtitle. The subtitle is shown on macOS 15 and later.
