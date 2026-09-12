> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwindowfeatures/statusbarvisibility](https://developer.apple.com/documentation/webkit/wkwindowfeatures/statusbarvisibility)

# statusBarVisibility (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether the webpage requested a visible status bar.

## Declaration

```swift
var statusBarVisibility: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

If the webpage didn’t request a visible status bar, this property is `nil`.

## See Also

### Inspecting Visibility Properties

- [menuBarVisibility](menubarvisibility.md): A Boolean value that indicates whether the webpage requests a visible menu bar.
- [toolbarsVisibility](toolbarsvisibility.md): A Boolean value that indicates whether the webpage requested a visible toolbar.

# statusBarVisibility (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether the webpage requested a visible status bar.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * statusBarVisibility;
```

<a id="Discussion"></a>

## Discussion

If the webpage didn’t request a visible status bar, this property is `nil`.

## See Also

### Inspecting Visibility Properties

- [menuBarVisibility](menubarvisibility.md): A Boolean value that indicates whether the webpage requests a visible menu bar.
- [toolbarsVisibility](toolbarsvisibility.md): A Boolean value that indicates whether the webpage requested a visible toolbar.
