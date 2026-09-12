> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilitytextinputresponderblock](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitytextinputresponderblock)

# accessibilityTextInputResponderBlock (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · visionOS 2.1+

The block to use to handle text input calls to a backing view.

## Declaration

```swift
@MainActor var accessibilityTextInputResponderBlock: AXUITextInputReturnBlock? { get set }
```

<a id="discussion"></a>

## Discussion

If your accessibility element represents a view that supports text operations using the [UITextInput](../../uikit/uitextinput.md) protocol, use this property to forward `UITextInput` calls to your backing view.

# accessibilityTextInputResponderBlock (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · visionOS 2.1+

The block to use to handle text input calls to a backing view.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AXUITextInputReturnBlock accessibilityTextInputResponderBlock;
```

<a id="discussion"></a>

## Discussion

If your accessibility element represents a view that supports text operations using the [UITextInput](../../uikit/uitextinput.md) protocol, use this property to forward `UITextInput` calls to your backing view.
