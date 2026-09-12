> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwindowfeatures/toolbarsvisibility](https://developer.apple.com/documentation/webkit/wkwindowfeatures/toolbarsvisibility)

# toolbarsVisibility (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether the webpage requested a visible toolbar.

## Declaration

```swift
var toolbarsVisibility: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

If the webpage didn’t request a visible toolbar, this property is `nil`.

## See Also

### Inspecting Visibility Properties

- [menuBarVisibility](menubarvisibility.md): A Boolean value that indicates whether the webpage requests a visible menu bar.
- [statusBarVisibility](statusbarvisibility.md): A Boolean value that indicates whether the webpage requested a visible status bar.

# toolbarsVisibility (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether the webpage requested a visible toolbar.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * toolbarsVisibility;
```

<a id="Discussion"></a>

## Discussion

If the webpage didn’t request a visible toolbar, this property is `nil`.

## See Also

### Inspecting Visibility Properties

- [menuBarVisibility](menubarvisibility.md): A Boolean value that indicates whether the webpage requests a visible menu bar.
- [statusBarVisibility](statusbarvisibility.md): A Boolean value that indicates whether the webpage requested a visible status bar.
