> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilitycustomactions](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitycustomactions)

# accessibilityCustomActions (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of custom actions to display along with the built-in actions.

## Declaration

```swift
@MainActor var accessibilityCustomActions: [UIAccessibilityCustomAction]? { get set }
```

<a id="Discussion"></a>

## Discussion

The array contains one or more `UIAccessibilityCustomAction` objects defining the supported actions. Assistive technologies, such as VoiceOver, display your custom actions to the user at appropriate times.

# accessibilityCustomActions (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of custom actions to display along with the built-in actions.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSArray<UIAccessibilityCustomAction *> * accessibilityCustomActions;
```

<a id="Discussion"></a>

## Discussion

The array contains one or more `UIAccessibilityCustomAction` objects defining the supported actions. Assistive technologies, such as VoiceOver, display your custom actions to the user at appropriate times.
