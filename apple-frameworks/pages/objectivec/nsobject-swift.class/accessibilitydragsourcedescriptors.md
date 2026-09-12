> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilitydragsourcedescriptors](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitydragsourcedescriptors)

# accessibilityDragSourceDescriptors (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of location descriptor objects that you use to define what drags are possible from this element.

## Declaration

```swift
@MainActor var accessibilityDragSourceDescriptors: [UIAccessibilityLocationDescriptor]? { get set }
```

<a id="Discussion"></a>

## Discussion

To restore the default automatic behavior for this property, assign or return the default value of `nil`.

> **Note**

>  A value of `nil` does not describe the same behavior as the empty array, which specifies that there are no relevant interactions for this element.

## See Also

### Fine-Tuning Drag and Drop

- [accessibilityDropPointDescriptors](accessibilitydroppointdescriptors.md): An array of location descriptor objects that you use to define where drops are possible on this element.

# accessibilityDragSourceDescriptors (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of location descriptor objects that you use to define what drags are possible from this element.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<UIAccessibilityLocationDescriptor *> * accessibilityDragSourceDescriptors;
```

<a id="Discussion"></a>

## Discussion

To restore the default automatic behavior for this property, assign or return the default value of `nil`.

> **Note**

>  A value of `nil` does not describe the same behavior as the empty array, which specifies that there are no relevant interactions for this element.

## See Also

### Fine-Tuning Drag and Drop

- [accessibilityDropPointDescriptors](accessibilitydroppointdescriptors.md): An array of location descriptor objects that you use to define where drops are possible on this element.
