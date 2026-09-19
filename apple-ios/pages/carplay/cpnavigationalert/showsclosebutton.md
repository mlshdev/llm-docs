> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationalert/showsclosebutton

# showsCloseButton (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value indicating whether the close button is allowed to appear.

## Declaration

```swift
var showsCloseButton: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set the value of this property to @c NO to hide the close button.

> **Note**

> If the @c actions array is empty, the close button will be displayed regardless of this property’s value to ensure the alert remains dismissible.

Defaults to @c YES.

# showsCloseButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value indicating whether the close button is allowed to appear.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL showsCloseButton;
```

<a id="discussion"></a>

## Discussion

Set the value of this property to @c NO to hide the close button.

> **Note**

> If the @c actions array is empty, the close button will be displayed regardless of this property’s value to ensure the alert remains dismissible.

Defaults to @c YES.
