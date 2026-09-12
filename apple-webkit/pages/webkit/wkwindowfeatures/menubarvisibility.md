> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwindowfeatures/menubarvisibility](https://developer.apple.com/documentation/webkit/wkwindowfeatures/menubarvisibility)

# menuBarVisibility (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether the webpage requests a visible menu bar.

## Declaration

```swift
var menuBarVisibility: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

If the webpage didn’t request a visible menu bar, this property is `nil`.

## See Also

### Inspecting Visibility Properties

- [statusBarVisibility](statusbarvisibility.md): A Boolean value that indicates whether the webpage requested a visible status bar.
- [toolbarsVisibility](toolbarsvisibility.md): A Boolean value that indicates whether the webpage requested a visible toolbar.

# menuBarVisibility (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether the webpage requests a visible menu bar.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * menuBarVisibility;
```

<a id="Discussion"></a>

## Discussion

If the webpage didn’t request a visible menu bar, this property is `nil`.

## See Also

### Inspecting Visibility Properties

- [statusBarVisibility](statusbarvisibility.md): A Boolean value that indicates whether the webpage requested a visible status bar.
- [toolbarsVisibility](toolbarsvisibility.md): A Boolean value that indicates whether the webpage requested a visible toolbar.
