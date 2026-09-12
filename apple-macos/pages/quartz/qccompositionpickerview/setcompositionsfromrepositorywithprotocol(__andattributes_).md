> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionpickerview/setcompositionsfromrepositorywithprotocol(_:andattributes:)](https://developer.apple.com/documentation/quartz/qccompositionpickerview/setcompositionsfromrepositorywithprotocol(_:andattributes:))

# setCompositionsFromRepositoryWithProtocol(\_:andAttributes:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the  compositions in the composition picker view  to those that match the specified criteria.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func setCompositionsFromRepositoryWithProtocol(_ protocol: String!, andAttributes attributes: [AnyHashable : Any]! = [:])
```

## Parameters

- `protocol`: The protocols that you want compositions shown in the picker view to conform to. You can pass any of these protocols: QCCompositionProtocolAnimation, QCCompositionProtocolImageProducer, QCCompositionProtocolImageFilter, QCCompositionProtocolImageCompositor, and QCCompositionProtocolScreenSaverRSS.
- `attributes`: A dictionary that contains the attributes, and their associated values, that you want compositions in the picker view to match. For example, you can pass: QCCompositionAttributeNameKey, QCCompositionAttributeDescriptionKey, QCCompositionAttributeCopyrightKey, and QCCompositionAttributeBuiltInKey. Pass `nil` if you don’t want to filter based on the attributes.

## See Also

### Managing the Composition Picker View

- [compositions()](compositions%28%29.md): Deprecated. Returns the list of compositions that are currently in the composition picker view.
- [setAllowsEmptySelection(\_:)](setallowsemptyselection%28__%29.md): Deprecated. Sets whether to allow an empty selection in the composition picker view.
- [allowsEmptySelection()](allowsemptyselection%28%29.md): Deprecated. Retrieves the empty-selection state of the composition picker view.
- [setCompositionAspectRatio(\_:)](setcompositionaspectratio%28__%29.md): Deprecated. Sets the aspect ratio used to display compositions in the composition picker view.
- [compositionAspectRatio()](compositionaspectratio%28%29.md): Deprecated. Retrieves the aspect ratio used to display compositions in the composition picker view.
- [setSelectedComposition(\_:)](setselectedcomposition%28__%29.md): Deprecated. Sets a composition as selected in the composition picker view.
- [selectedComposition()](selectedcomposition%28%29.md): Deprecated. Returns the composition that is currently selected in the composition picker view.

# setCompositionsFromRepositoryWithProtocol:andAttributes: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the  compositions in the composition picker view  to those that match the specified criteria.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) setCompositionsFromRepositoryWithProtocol:(NSString *) protocol andAttributes:(NSDictionary *) attributes;
```

## Parameters

- `protocol`: The protocols that you want compositions shown in the picker view to conform to. You can pass any of these protocols: QCCompositionProtocolAnimation, QCCompositionProtocolImageProducer, QCCompositionProtocolImageFilter, QCCompositionProtocolImageCompositor, and QCCompositionProtocolScreenSaverRSS.
- `attributes`: A dictionary that contains the attributes, and their associated values, that you want compositions in the picker view to match. For example, you can pass: QCCompositionAttributeNameKey, QCCompositionAttributeDescriptionKey, QCCompositionAttributeCopyrightKey, and QCCompositionAttributeBuiltInKey. Pass `nil` if you don’t want to filter based on the attributes.

## See Also

### Managing the Composition Picker View

- [compositions](compositions%28%29.md): Deprecated. Returns the list of compositions that are currently in the composition picker view.
- [setAllowsEmptySelection:](setallowsemptyselection%28__%29.md): Deprecated. Sets whether to allow an empty selection in the composition picker view.
- [allowsEmptySelection](allowsemptyselection%28%29.md): Deprecated. Retrieves the empty-selection state of the composition picker view.
- [setCompositionAspectRatio:](setcompositionaspectratio%28__%29.md): Deprecated. Sets the aspect ratio used to display compositions in the composition picker view.
- [compositionAspectRatio](compositionaspectratio%28%29.md): Deprecated. Retrieves the aspect ratio used to display compositions in the composition picker view.
- [setSelectedComposition:](setselectedcomposition%28__%29.md): Deprecated. Sets a composition as selected in the composition picker view.
- [selectedComposition](selectedcomposition%28%29.md): Deprecated. Returns the composition that is currently selected in the composition picker view.
