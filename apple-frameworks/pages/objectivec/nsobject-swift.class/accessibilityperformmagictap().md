> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilityperformmagictap()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityperformmagictap())

# accessibilityPerformMagicTap() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Performs a salient action.

## Declaration

```swift
@MainActor func accessibilityPerformMagicTap() -> Bool
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the magic tap action succeeds; otherwise, [NO](../no.md). By default, this method returns [NO](../no.md).

<a id="Discussion"></a>

## Discussion

The exact action performed by this method depends your app, typically toggling the most important state of the app. For example, in the Phone app it answers and ends phone calls, in the Music app it plays and pauses playback, in the Clock app it starts and stops a timer, and in the Camera app it takes a picture.

## See Also

### Performing an action

- [accessibilityActivate()](accessibilityactivate%28%29.md): Tells the element to activate itself and report the success or failure of the operation.
- [accessibilityIncrement()](accessibilityincrement%28%29.md): Tells the accessibility element to increment the value of its content.
- [accessibilityDecrement()](accessibilitydecrement%28%29.md): Tells the accessibility element to decrement the value of its content.
- [accessibilityScroll(\_:)](accessibilityscroll%28__%29.md): Scrolls screen content in an application-specific way and returns the success or failure of the action.
- [accessibilityPerformEscape()](accessibilityperformescape%28%29.md): Dismisses a modal view and returns the success or failure of the action.

# accessibilityPerformMagicTap (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Performs a salient action.

## Declaration

```objectivec
- (BOOL) accessibilityPerformMagicTap;
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the magic tap action succeeds; otherwise, [NO](../no.md). By default, this method returns [NO](../no.md).

<a id="Discussion"></a>

## Discussion

The exact action performed by this method depends your app, typically toggling the most important state of the app. For example, in the Phone app it answers and ends phone calls, in the Music app it plays and pauses playback, in the Clock app it starts and stops a timer, and in the Camera app it takes a picture.

## See Also

### Performing an action

- [accessibilityActivate](accessibilityactivate%28%29.md): Tells the element to activate itself and report the success or failure of the operation.
- [accessibilityIncrement](accessibilityincrement%28%29.md): Tells the accessibility element to increment the value of its content.
- [accessibilityDecrement](accessibilitydecrement%28%29.md): Tells the accessibility element to decrement the value of its content.
- [accessibilityScroll:](accessibilityscroll%28__%29.md): Scrolls screen content in an application-specific way and returns the success or failure of the action.
- [accessibilityPerformEscape](accessibilityperformescape%28%29.md): Dismisses a modal view and returns the success or failure of the action.
