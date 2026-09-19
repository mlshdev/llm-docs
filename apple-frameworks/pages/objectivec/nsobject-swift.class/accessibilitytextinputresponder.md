> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitytextinputresponder

# accessibilityTextInputResponder (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · visionOS 2.1+

The object that handles text input calls for this accessibility element.

## Declaration

```swift
@MainActor weak var accessibilityTextInputResponder: (any UITextInput)? { get set }
```

<a id="discussion"></a>

## Discussion

If your accessibility element represents a view that supports text operations using the [UITextInput](../../uikit/uitextinput.md) protocol, use this property to forward `UITextInput` calls to your backing view.

# accessibilityTextInputResponder (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · visionOS 2.1+

The object that handles text input calls for this accessibility element.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITextInput> accessibilityTextInputResponder;
```

<a id="discussion"></a>

## Discussion

If your accessibility element represents a view that supports text operations using the [UITextInput](../../uikit/uitextinput.md) protocol, use this property to forward `UITextInput` calls to your backing view.
