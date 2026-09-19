> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanel/showsclosebutton

# showsCloseButton (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value that indicates whether the panel displays a close button.

## Declaration

```swift
var showsCloseButton: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the panel displays a close button that the driver can use to dismiss the panel. When the value of this property is `false`, you need to dismiss the panel programmatically from your app. The default value of this property is `true`.

# showsCloseButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value that indicates whether the panel displays a close button.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL showsCloseButton;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the panel displays a close button that the driver can use to dismiss the panel. When the value of this property is `false`, you need to dismiss the panel programmatically from your app. The default value of this property is `true`.
