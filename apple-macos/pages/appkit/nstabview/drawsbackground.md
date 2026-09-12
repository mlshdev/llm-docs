> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/drawsbackground](https://developer.apple.com/documentation/appkit/nstabview/drawsbackground)

# drawsBackground (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the tab view draws a background color when its type is `NSNoTabsNoBorder`.

## Declaration

```swift
var drawsBackground: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the tab view draws a background color when the its type is `NSNoTabsNoBorder`, otherwise it does not. If the tab view has a bezeled border or a line border, the appropriate background for that border is used. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [tabViewType](tabviewtype.md): The tab type to display the tabs.

# drawsBackground (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the tab view draws a background color when its type is `NSNoTabsNoBorder`.

## Declaration

```objectivec
@property BOOL drawsBackground;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the tab view draws a background color when the its type is `NSNoTabsNoBorder`, otherwise it does not. If the tab view has a bezeled border or a line border, the appropriate background for that border is used. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [tabViewType](tabviewtype.md): The tab type to display the tabs.
